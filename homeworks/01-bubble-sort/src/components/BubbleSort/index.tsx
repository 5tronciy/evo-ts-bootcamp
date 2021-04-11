import styles from "./styles.module.css";

type Props = {
  array: number[];
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
        <button>New set</button>
        <button>Start</button>
      </div>
    </>
  );
};

export default BubbleSort;
