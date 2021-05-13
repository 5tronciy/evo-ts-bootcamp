import { useEffect } from "react";
import { State, ActionTypes } from "../types";
import { getPizza } from "../services/api";
import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";

export function useApp() {
  const dispatch = useDispatch();

  useEffect(() => {
    getPizza().then((pizza) => {
      dispatch({ type: ActionTypes.PizzaViewed, payload: pizza.items });
    });
  }, []);

  const plusPizzaBucket = (_id: string, name: string, price: number) => {
    dispatch({
      type: ActionTypes.PizzaAddedIntoBasket,
      payload: {
        _id,
        name,
        price,
      },
    });
  };

  const minusPizzaBucket = (_id: string) => {
    dispatch({ type: ActionTypes.PizzaRemovedFromBasket, payload: _id });
  };

  const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
  const { pizzas, bucket } = useTypedSelector((state) => state);

  let totalPrice = 0;
  for (let i = 0; i < bucket.length; i++) {
    totalPrice += bucket[i].price * bucket[i].count;
  }

  return {
    totalPrice,
    pizzas,
    bucket,
    plusPizzaBucket,
    minusPizzaBucket,
  };
}
