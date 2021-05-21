import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { favouritesReducer } from "./reducers/favourites";
import { marsSlicer } from "./reducers/mars";
import { routesReducer } from "./reducers/routes";

export const store = configureStore({
  reducer: {
    mars: marsSlicer.reducer,
    favourites: favouritesReducer,
    routes: routesReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
