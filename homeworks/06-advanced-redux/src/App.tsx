import React from "react";
import "./App.css";
import {
  Loading,
  Missing,
  PizzaList,
  PizzaBasket,
  TotalPrice,
} from "./components";
import * as R from "ramda";
import { useApp } from "./hooks";

function App() {
  const { totalPrice, pizzas, plusPizzaBucket, minusPizzaBucket, bucket } =
    useApp();

  const handleMinusPizza = (_id: string) => {
    minusPizzaBucket(_id);
  };

  const handleAddPizza = (_id: string) => {
    const { name, price } = pizzas.find((pizza) => pizza._id === _id)!;
    plusPizzaBucket(_id, name, price);
  };

  const pizzaList = R.cond([
    [R.isEmpty, Loading],
    [R.T, (xs) => PizzaList({ pizza: xs, onAdd: handleAddPizza })],
  ]);
  const pizzaBucket = R.cond([
    [R.isEmpty, Missing],
    [R.T, (xs) => PizzaBasket({ pizza: xs, onMinus: handleMinusPizza })],
  ]);

  return (
    <div className="grid grid-cols-3 gap-4 h-full">
      <div className="col-span-2 p-8">
        <div className="grid grid-cols-4 gap-4">{pizzaList(pizzas)}</div>
      </div>
      <div className="col-span-1 bg-white overflow-y-auto h-full">
        <div className="flex flex-col p-8">
          <TotalPrice price={totalPrice} />
          {pizzaBucket(bucket)}
          <div className="flex flex-col">
            <button className="bg-yellow-400 rounded-xl pt-2 pb-2">
              Make Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
