import { createAsyncThunk } from "@reduxjs/toolkit";
import { marsSlicer, Photo } from "../app/reducers/mars";

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
    thunkAPI.dispatch(marsSlicer.actions.addPhotos(response.photos));
    const solObject = {
      num: sol,
      photos: response.photos.map((item: Photo) => item.id),
    };
    thunkAPI.dispatch(marsSlicer.actions.addDays(solObject));
  }
);
