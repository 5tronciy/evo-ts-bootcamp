import { BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { marsSlicer } from "../app/reducers/mars";
import { RootState } from "../app/store";
import { fetchPhotosBySol } from "../utils/api";
import s from "./MarsViewer.module.css";

export const MarsViewer = () => {
  const dispatch = useDispatch();

  const onChange = (event: BaseSyntheticEvent) => {
    const inputValue = parseInt(event.target.value);
    if (inputValue) {
      dispatch(marsSlicer.actions.changeSelectedSol(inputValue));
    }
  };

  const sol: number = useSelector((state: RootState) => state.mars.selectedSol);

  const onLoad = () => {
    dispatch(fetchPhotosBySol(sol));
  };

  return (
    <div className={s.viewer}>
      <p>Select Sol and press "load"!</p>
      <input
        className={s.input}
        onChange={onChange}
        type="number"
        value={sol}
      />
      <button onClick={onLoad}>load</button>
      <p>Photos are not loaded</p>
    </div>
  );
};
