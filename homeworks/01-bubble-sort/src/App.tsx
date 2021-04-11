import { Component } from "react";
import Title from "./components/Title";
import BubbleSort from "./components/BubbleSort";
import Status from "./components/Status";
import { generateArray, sortArrayStep } from "./utils";
import styles from "./styles.module.css";

const ELEMENTS_COUNT = 30;
const INTERVAL = 100;

type State = {
  array: {
    arr: number[];
    finished?: boolean;
  };
  status: string;
};

class App extends Component {
  timerId: number = 0;
  state: State = {
    array: {
      arr: [],
    },
    status: "Not Solved",
  };

  componentDidMount() {
    this.newSet();
  }

  newSet() {
    this.setState({ array: { arr: generateArray(ELEMENTS_COUNT) } });
  }

  sortArray() {
    this.timerId = window.setInterval(() => {
      this.setState({ array: sortArrayStep(this.state.array) });
      if (this.state.array.finished) {
        clearInterval(this.timerId);
        this.setState({ status: "Solved" });
      }
    }, INTERVAL);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <main className={styles.app}>
        <Title />
        <BubbleSort
          array={this.state.array.arr}
          onNewSet={this.newSet.bind(this)}
          onStart={this.sortArray.bind(this)}
        />
        <Status status={this.state.status} />
      </main>
    );
  }
}

export default App;
