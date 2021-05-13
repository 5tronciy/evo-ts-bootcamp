import { Reducer } from "redux";
import { ActionTypes } from "../../types";

export const pizzas: Reducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.PizzaViewed:
      return action.payload;
    case ActionTypes.PizzaSelected:
      return state;
    default:
      return state;
  }
};
