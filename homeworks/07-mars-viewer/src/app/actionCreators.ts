import { createAction } from "@reduxjs/toolkit";
import { ActionTypes } from "./types";

export const setSol = (sol: number) => {
  return { type: ActionTypes.changeSelectedSol, payload: sol };
};

export const changeSol = createAction<number>("mars/changeSelectedSol");
