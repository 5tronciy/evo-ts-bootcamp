import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { merge } from "../../utils";
import { loadPhotos } from "../../utils/api";

export type Sol = {
  num: number;
  photos: string[];
};

type Camera = {
  full_name: string;
  id: string;
  name: string;
  rover_id: string;
};

type Rover = {
  id: string;
  landing_date: string;
  launch_date: string;
  name: string;
  status: string;
};

export type FetchPhoto = {
  id: string;
  img_src: string;
  earth_date: string;
  rover: Rover;
  camera: Camera;
  sol: number;
};

export interface IPhoto {
  id: string;
  imgSrc: string;
  roverName: string;
  cameraFullName: string;
}

interface MarsState {
  status: string;
  selectedSol: number;
  sols: Sol[];
  photos: IPhoto[];
}

const initialState = {
  status: "idle",
  selectedSol: 1,
  sols: [],
  photos: [],
} as MarsState;

export const fetchPhotosBySol = createAsyncThunk(
  "mars/fetchSol",
  async (sol: number, thunkAPI) => {
    const response = await loadPhotos(sol);
    thunkAPI.dispatch(marsReducer.actions.addPhotos(response.photos));
    const solObject = {
      num: sol,
      photos: response.photos.map((item: IPhoto) => item.id),
    };
    thunkAPI.dispatch(marsReducer.actions.addDays(solObject));
  }
);

export const marsReducer = createSlice({
  name: "mars",
  initialState: initialState,
  reducers: {
    changeSelectedSol: (state, action) => {
      state.selectedSol = action.payload;
    },
    addPhotos: (state, action) => {
      const newPhotos = action.payload.map((photo: FetchPhoto) => {
        const id = photo.id;
        const imgSrc = photo.img_src;
        const roverName = photo.rover.name;
        const cameraFullName = photo.camera.full_name;
        return { id, imgSrc, roverName, cameraFullName };
      });
      state.photos = merge(state.photos, newPhotos, "id");
    },
    addDays: (state, action) => {
      state.sols.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPhotosBySol.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPhotosBySol.fulfilled, (state, action) => {
        state.status = "idle";
      });
  },
});
