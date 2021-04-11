type Props = {
  array: number[];
};

const BubbleSort = (props: Props) => {
  return (
    <>
      <div className="array" style={{ height: "200px" }}>
        {props.array.map((item, index) => (
          <div
            key={index}
            className="element"
            style={{ height: item + "px" }}
          ></div>
        ))}
      </div>
      <div className="buttons">
        <button>New set</button>
        <button>Start</button>
      </div>
    </>
  );
};

export default BubbleSort;
