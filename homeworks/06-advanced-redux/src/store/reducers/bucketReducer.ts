import { Reducer } from "redux";
import { ActionTypes, PizzaInBucket } from "../../types";

export const bucket: Reducer = (state = [], action) => {
  let pizzaInBasket: PizzaInBucket | undefined;
  switch (action.type) {
    case ActionTypes.PizzaAddedIntoBasket:
      pizzaInBasket = state.find(
        (pizza: { _id: string }) => pizza._id === action.payload._id
      );
      return pizzaInBasket
        ? state.map((pizza: { _id: any; count: number }) => {
            if (pizza._id !== action.payload._id) {
              return pizza;
            }
            return Object.assign({}, pizza, { count: pizza.count + 1 });
          })
        : [...state, Object.assign({}, action.payload, { count: 1 })];
    case ActionTypes.PizzaRemovedFromBasket:
      pizzaInBasket = state.find(
        (pizza: { _id: string }) => pizza._id === action.payload
      );
      return pizzaInBasket!.count > 1
        ? state.map((pizza: { _id: any; count: number }) => {
            if (pizza._id !== action.payload) {
              return pizza;
            }
            return Object.assign({}, pizza, { count: pizza.count - 1 });
          })
        : state.filter(
            (pizza: { _id: string }) => pizza._id !== action.payload
          );
    default:
      return state;
  }
};
