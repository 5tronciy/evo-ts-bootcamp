import { Component } from "react";
import { Title } from "./components/Title";
import { BubbleSort } from "./components/BubbleSort";
import { Status } from "./components/Status";
import { generateArray, sortArrayStep } from "./utils";
import styles from "./styles.module.css";

const ELEMENTS_COUNT = 30;
const INTERVAL = 60;

type State = {
  array: {
    arr: number[];
    finished: boolean;
  };
  status: string;
  interval?: null | ReturnType<typeof setTimeout>;
};

export class App extends Component {
  timerId: number = 0;
  state: State = {
    array: {
      arr: [],
      finished: false,
    },
    status: "Not Solved",
  };

  componentDidMount() {
    this.newSet();
  }

  newSet() {
    this.setState({
      array: { arr: generateArray(ELEMENTS_COUNT) },
      status: "Not Solved",
    });
    this.pause();
  }

  sortArray() {
    this.timerId = window.setInterval(() => {
      this.setState({ array: sortArrayStep(this.state.array) });
      if (this.state.array.finished) {
        clearInterval(this.timerId);
        this.setState({ interval: null, status: "Solved" });
      }
    }, INTERVAL);
    this.setState({ interval: this.timerId, status: "Not Solved" });
  }

  pause() {
    this.state.interval && clearInterval(this.state.interval);
    this.setState({ interval: null });
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
          isPlaying={this.state.interval != null}
          status={this.state.status}
          onNewSet={this.newSet.bind(this)}
          onStart={this.sortArray.bind(this)}
          onPause={this.pause.bind(this)}
        />
        <Status status={this.state.status} />
      </main>
    );
  }
}
