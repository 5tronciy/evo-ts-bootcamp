import { createSlice } from "@reduxjs/toolkit";

interface IFavourites {
  photoIds: string[];
}

const initialState = { photoIds: [] } as IFavourites;

export const favouritesReducer = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    addToFavourites: (state, action) => {
      state.photoIds.push(action.payload);
    },
    removeFromFavourites: (state, action) => {
      state.photoIds = state.photoIds.filter((id) => id !== action.payload);
    },
  },
});
