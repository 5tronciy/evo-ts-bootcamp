import { BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { marsSlicer } from "../app/reducers/mars";
import { RootState } from "../app/store";
import { fetchPhotosBySol } from "../utils/api";
import { Photo } from "./Photo";
import s from "./MarsViewer.module.css";

export const MarsViewer = () => {
  const dispatch = useDispatch();

  const onChange = (event: BaseSyntheticEvent) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue) {
      dispatch(marsSlicer.actions.changeSelectedSol(inputValue));
    }
  };

  const mars = useSelector((state: RootState) => state.mars);

  const sol = mars.sols.find((sol) => sol.num === mars.selectedSol);

  const onLoad = () => {
    dispatch(fetchPhotosBySol(mars.selectedSol));
  };

  return (
    <div className={s.viewer}>
      <p>Select Sol and press "load"!</p>
      <input
        className={s.input}
        onChange={onChange}
        type="number"
        value={mars.selectedSol}
      />
      <button onClick={onLoad}>load</button>
      {mars.sols.find((sol) => sol.num === mars.selectedSol) ? (
        <div className={s.grid}>
          {mars.photos
            .filter((photo) => sol?.photos.includes(photo.id))
            .map((photo) => (
              <Photo key={photo.id} photo={photo} />
            ))}
        </div>
      ) : (
        <p>Photos are not loaded</p>
      )}
    </div>
  );
};
