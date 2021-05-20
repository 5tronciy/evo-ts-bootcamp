import { createReducer } from "@reduxjs/toolkit";
import { changeSol } from "../actionCreators";

type Sol = {
  num: number;
  photos: string[];
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
