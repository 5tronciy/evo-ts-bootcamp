import { createSlice } from "@reduxjs/toolkit";

interface IRouter {
  selectedRoute: string;
}

const initialState = { selectedRoute: "nasa" } as IRouter;

export const routesReducer = createSlice({
  name: "routes",
  initialState: initialState,
  reducers: {
    changeRoute: (state, action) => {
      state.selectedRoute = action.payload;
    },
  },
});
