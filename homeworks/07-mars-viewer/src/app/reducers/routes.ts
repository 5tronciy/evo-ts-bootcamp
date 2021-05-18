import { AnyAction } from "@reduxjs/toolkit";

const initialState = { selectedRoute: "nasa" };

export const routesReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};
