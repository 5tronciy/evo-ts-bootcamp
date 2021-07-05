import {
  useCallback,
  useEffect,
  useState,
  Dispatch,
  SetStateAction,
} from "react";
import s from "./App.module.css";
import { House } from "./House";
import { ReactComponent as Cat } from "./assets/cat.svg";
import { timer, Observable, fromEvent } from "rxjs";
import { scan } from "rxjs/operators";

interface Coordinates {
  top: number;
  left: number;
}

const useObservable = (
  observable: Observable<any>,
  setter: Dispatch<SetStateAction<any>>
) => {
  useEffect(() => {
    let subscribtion = observable.subscribe((result: any) => setter(result));
    return () => subscribtion.unsubscribe();
  }, [observable, setter]);
};

const observable$ = timer(0, 1000);

function App() {
  const [score, setScore] = useState(0);

  const selectCat = useCallback(() => document.getElementById("cat"), []);
  // const cat = document.getElementById("cat")!;
  const target = document;
  const clickOnCat$ = fromEvent(target, "click").pipe(
    scan((count) => count + 1, 0)
  );
  useObservable(clickOnCat$, setScore);
  const getWindowsCoords = useCallback(() => {
    const windows = document.querySelectorAll(".window");
    const windowsCoordinates: Coordinates[] = [];
    windows.forEach((window) => windowsCoordinates.push(getCoords(window)));
    return windowsCoordinates;
  }, []);

  useEffect(() => {
    const windows = getWindowsCoords();
    let subscription = observable$.subscribe(() => {
      const windowWithCat = Math.floor(Math.random() * windows.length);
      const cat: any = selectCat();
      cat!.style.display = "block";
      cat!.style.left = windows[windowWithCat].left.toString();
      cat!.style.top = windows[windowWithCat].top.toString();
    });
    return () => subscription.unsubscribe();
  }, [getWindowsCoords, selectCat]);

  function getCoords(elem: Element) {
    var box = elem.getBoundingClientRect();
    return {
      top: box.top,
      left: box.left,
    };
  }

  const onCat = () => {
    const cat: any = selectCat();
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
