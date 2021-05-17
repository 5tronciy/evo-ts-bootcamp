import { Middleware } from "redux";
import { State, ActionTypes, EventType } from "../types";

export const logger: Middleware = (store) => (next) => (action) => {
  const { type, payload } = action;
  const { pizzas, bucket }: State = store.getState();
  const currentPizza = pizzas.find(
    (pizza) => pizza._id === payload._id || payload
  );
  const bodyData: EventType =
    type === ActionTypes.PizzaViewed
      ? {
          eventName: type,
        }
      : {
          eventName: type,
          pizzaName: currentPizza!.name,
          pizzaPrice: currentPizza!.price,
        };
  fetch("http://localhost:3001/log", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bodyData),
  })
    .then((json) => {
      console.log(json);
    })
    .catch((ex) => {
      console.log(ex);
    });
  next(action);
};
