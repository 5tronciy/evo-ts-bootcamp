import { AnyAction } from "@reduxjs/toolkit";
import { ActionTypes } from "../types";

const initialState = { status: "", selectedSol: 1, sols: [], photos: [] };

export const marsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.changeSelectedSol:
      return { ...state, selectedSol: action.payload };
    default:
      return state;
  }
};
