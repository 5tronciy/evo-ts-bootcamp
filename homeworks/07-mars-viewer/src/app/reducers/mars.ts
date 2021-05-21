import { createSlice } from "@reduxjs/toolkit";

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

type FetchPhoto = {
  id: string;
  img_src: string;
  earth_date: string;
  rover: Rover;
  camera: Camera;
  sol: number;
};

export type Photo = {
  id: string;
  imgSrc: string;
  roverName: string;
  cameraFullName: string;
};

interface MarsState {
  status: string;
  selectedSol: number;
  sols: Sol[];
  photos: Photo[];
}

const initialState = {
  status: "idle",
  selectedSol: 1,
  sols: [],
  photos: [],
} as MarsState;

export const marsSlicer = createSlice({
  name: "mars",
  initialState: initialState,
  reducers: {
    changeSelectedSol: (state, action) => {
      state.selectedSol = action.payload;
    },
    addPhotos: (state, action) => {
      state.photos = action.payload;
    },
    addDays: (state, action) => {
      state.sols.push(action.payload);
    },
  },
});
