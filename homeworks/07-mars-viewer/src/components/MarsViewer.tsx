import { BaseSyntheticEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { ActionTypes } from "../app/types";
import s from "./MarsViewer.module.css";

export const MarsViewer = () => {
  const dispatch = useDispatch();
  const onChange = (event: BaseSyntheticEvent) => {
    const inputValue = parseInt(event.target.value);
    dispatch({ type: ActionTypes.changeSelectedSol, payload: inputValue });
  };

  const sol = useSelector((state: RootState) => state.mars.selectedSol);

  return (
    <div className={s.viewer}>
      <p>Select Sol and press "load"!</p>
      <input
        className={s.input}
        onChange={onChange}
        type="number"
        value={sol}
      />
      <button>load</button>
      <p>Photos are not loaded</p>
    </div>
  );
};
