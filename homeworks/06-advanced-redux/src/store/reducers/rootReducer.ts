import { combineReducers } from "redux";
import { pizzas } from "./pizzasReducer";
import { bucket } from "./bucketReducer";

export const rootReducer = combineReducers({ pizzas, bucket });
