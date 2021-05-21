import { createAction } from "@reduxjs/toolkit";
import { Photo, Sol } from "./reducers/mars";

export const changeSol = createAction<number>("mars/changeSelectedSol");

export const addPhotos = createAction<Photo[]>("mars/addPhotos");

export const addDays = createAction<Sol>("mars/addDays");
