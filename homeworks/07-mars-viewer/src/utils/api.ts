import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionTypes } from "../app/types";

const apiKey = process.env.REACT_APP_NASA_API_KEY;

const url =
  "https://api.nasa.gov/mars-photos/api/v1/rovers/perseverance/photos";

export const loadPhotos = async (sol: number) => {
  const response = await fetch(url + `?sol=${sol}&api_key=${apiKey}`);
  const result = await response.json();
  return result;
};

export const fetchPhotosBySol = createAsyncThunk(
  "mars/fetchSol",
  async (sol: number, thunkAPI) => {
    const response = await loadPhotos(sol);
    thunkAPI.dispatch({ type: ActionTypes.addPhotos, payload: response.data });
    thunkAPI.dispatch({ type: ActionTypes.addDays, payload: sol });
  }
);

// export const fetchSol = createSlice({
//   name: "mars",
//   initialState: { status: "idle", selectedSol: 1, sols: [], photos: [] },
//   reducers: { marsReducer },
//   extraReducers: {
//     [fetchPhotosBySol.fulfilled]: (state, action) => {
//       state.sols.push(action.payload);
//     },
//   },
// });
