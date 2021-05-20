import { createReducer } from "@reduxjs/toolkit";
import { changeSol } from "../actionCreators";

type Sol = {
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

type Photo = {
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

export const marsReducer = createReducer(initialState, (builder) => {
  builder.addCase(changeSol, (state, action) => {
    state.selectedSol = action.payload;
  });
});
