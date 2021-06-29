import { useCallback, useEffect, useState } from "react";
import s from "./App.module.css";
import { House } from "./House";
import { ReactComponent as Cat } from "./assets/cat.svg";

interface Coordinates {
  top: number;
  left: number;
}

function App() {
  const [score, setScore] = useState(0);

  const selectCat = useCallback(() => document.getElementById("cat"), []);

  const getWindowsCoords = useCallback(() => {
    const windows = document.querySelectorAll(".window");
    const windowsCoordinates: Coordinates[] = [];
    windows.forEach((window) => windowsCoordinates.push(getCoords(window)));
    return windowsCoordinates;
  }, []);

  function getCoords(elem: Element) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top,
      left: box.left,
    };
  }

  useEffect(() => {
    let timerId: null | ReturnType<typeof setInterval> = setInterval(() => {
      const windows = getWindowsCoords();
      const windowWithCat = Math.floor(Math.random() * windows.length);
      const cat: HTMLElement | null = selectCat();
      cat!.style.display = "block";
      cat!.style.left = windows[windowWithCat].left.toString();
      cat!.style.top = windows[windowWithCat].top.toString();
    }, 1000);
    return () => clearInterval(timerId!);
  }, [getWindowsCoords, selectCat]);

  const onCat = () => {
    const cat: HTMLElement | null = selectCat();
    setScore(score + 1);
    cat!.style.display = "none";
  };

  return (
    <div className={s.app}>
      <House />
      <Cat id="cat" className={s.cat} onClick={onCat} />
      <p>Score: {score}</p>
      <button onClick={() => setScore(0)}>New Game</button>
    </div>
  );
}

export default App;
