import { useEffect } from "react";
import { createStore, Reducer, AnyAction } from "redux";

export const amountReducer: Reducer<number, AnyAction> = (
  state: number = 0,
  action
) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      return action.payload;
    case "DEBIT":
      return state - action.payload;
    case "CREDIT":
      return state + action.payload;
    case "GET_BALANCE_WITHOUT_TAX":
      return (state * (100 - action.payload)) / 100;
    default:
      return state;
  }
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__: any;
  }
}

const store = createStore(
  amountReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const array = [
  { type: "UPDATE_BALANCE", payload: 1000.0 },
  { type: "CREDIT", payload: 200.0 },
  { type: "CREDIT", payload: 100.0 },
  { type: "GET_BALANCE_WITHOUT_TAX", payload: 14 },
  { type: "DEBIT", payload: 250.0 },
  { type: "UPDATE_BALANCE", payload: 1000.0 },
];

export const App = () => {
  useEffect(() => array.forEach((action) => store.dispatch(action), []));

  return null;
};
