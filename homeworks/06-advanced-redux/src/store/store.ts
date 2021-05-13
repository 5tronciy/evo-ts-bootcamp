import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "./logger";
import { rootReducer } from "./reducers/rootReducer";

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
