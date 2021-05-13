export type Pizza = {
  _id: string;
  image: string;
  name: string;
  price: number;
};

export type PizzaInBucket = Pizza & { count: number };

export type State = {
  pizzas: Pizza[];
  bucket: PizzaInBucket[];
};

export enum ActionTypes {
  PizzaViewed = "PIZZA_VIEWED",
  PizzaSelected = "PIZZA_SELECTED",
  PizzaAddedIntoBasket = "PIZZA_ADDED_INTO_BASKET",
  PizzaRemovedFromBasket = "PIZZA_REMOVED_FROM_BASKET",
}

export type EventType = {
  eventName: ActionTypes;
  pizzaName?: string;
  pizzaPrice?: number;
};
