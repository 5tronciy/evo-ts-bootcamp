import { AnyAction } from "@reduxjs/toolkit";

const initialState = { photoIds: [] };

export const favouritesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
