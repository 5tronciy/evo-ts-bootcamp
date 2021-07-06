import { useCallback, useEffect, useState } from "react";
import { fromEvent, timer } from "rxjs";
import { scan } from "rxjs/operators";
import { useObservable } from "../../hooks/useObservable";
import { getCoords } from "../../utils";
import { App } from "./App";

export interface Coordinates {
  top: number;
  left: number;
}

const timer$ = timer(0, 1000);
const cat = document.getElementById("cat")!;
const button = document.getElementById("button")!;

export const AppConnected = () => {
  const [score, setScore] = useState(0);

  const clickOnCat$ = fromEvent(cat, "click").pipe(scan(() => score + 1, 0));
  useObservable(clickOnCat$, setScore);

  var submit$ = fromEvent(button, "click").pipe(scan(() => score - score, 0));
  useObservable(submit$, setScore);

  const getWindowsCoords = useCallback(() => {
    const windows = document.querySelectorAll(".window");
    const windowsCoordinates: Coordinates[] = [];
    windows.forEach((window) => windowsCoordinates.push(getCoords(window)));
    return windowsCoordinates;
  }, []);

  useEffect(() => {
    const windows = getWindowsCoords();
    let subscription = timer$.subscribe(() => {
      const windowWithCat = Math.floor(Math.random() * windows.length);
      cat.style.display = "block";
      cat.style.left = windows[windowWithCat].left.toString();
      cat.style.top = windows[windowWithCat].top.toString();
    });
    return () => subscription.unsubscribe();
  }, [getWindowsCoords]);
  return <App score={score} />;
};
