import { MouseEvent } from "react";
import styles from "./styles.module.css";

type Props = {
  array: number[];
  onNewSet: (event: MouseEvent<HTMLButtonElement>) => void;
  onStart: (event: MouseEvent<HTMLButtonElement>) => void;
};

const BubbleSort = (props: Props) => {
  return (
    <>
      <div className={styles.array}>
        {props.array.map((item, index) => (
          <div
            key={index}
            className={styles.element}
            style={{ height: item + "px" }}
          ></div>
        ))}
      </div>
      <div className={styles.buttons}>
        <button onClick={props.onNewSet}>New set</button>
        <button onClick={props.onStart}>Start</button>
      </div>
    </>
  );
};

export default BubbleSort;
