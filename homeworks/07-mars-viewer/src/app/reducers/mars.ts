import { AnyAction } from "@reduxjs/toolkit";

const initialState = { status: "", selectedSol: 1, sols: [], photos: [] };

export const marsReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
