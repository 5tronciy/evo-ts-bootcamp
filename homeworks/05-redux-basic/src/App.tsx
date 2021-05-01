import { useEffect } from "react";
import { createStore, compose, Reducer, AnyAction } from "redux";

export const rootReducer: Reducer<number, AnyAction> = (
  state: number = 0,
  action
) => {
  switch (action.type) {
    case "UPDATE_BALANCE":
      return action.payload;
    case "DEBIT":
      return state + action.payload;
    case "CREDIT":
      return state - action.payload;
    case "SET_BALANCE_WITH_TAX":
      return (state * (100 - action.payload)) / 100;
    default:
      return state;
  }
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const balance = createStore(rootReducer, undefined, composeEnhancers());

export const App = () => {
  useEffect(() => {
    balance.dispatch({ type: "UPDATE_BALANCE", payload: 1000.0 });
    balance.dispatch({ type: "CREDIT", payload: 200.0 });
    balance.dispatch({ type: "DEBIT", payload: 50.0 });
    balance.dispatch({ type: "SET_BALANCE_WITH_TAX", payload: 14.0 });
  }, []);
  return null;
};
