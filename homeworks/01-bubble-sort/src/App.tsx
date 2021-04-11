import { Component } from "react";
import Title from "./components/Title";
import BubbleSort from "./components/BubbleSort";
import Status from "./components/Status";
import { generateArray } from "./utils";
import styles from "./styles.module.css";

const ELEMENTS_COUNT = 10;
const INTERVAL = 1000;

type State = {
  array: number[];
  status: string;
};

class App extends Component {
  timerId: number = 0;
  state: State = { array: [], status: "Not Solved" };

  componentDidMount() {
    this.newSet();
  }

  newSet() {
    this.setState({ array: generateArray(ELEMENTS_COUNT) });
  }

  sortArray() {
    const arr = this.state.array;
    const len = arr.length;
    var isSwapped = false;

    // for (var i = 0; i < len; i++) {
    //   isSwapped = false;
    //   for (var j = 0; j < len; j++) {
    //     if (arr[j] > arr[j + 1]) {
    //       var temp = arr[j];
    //       arr[j] = arr[j + 1];
    //       arr[j + 1] = temp;
    //       isSwapped = true;
    //       this.timerId = window.setInterval(() => {
    //         this.setState({ array: arr });
    //       }, INTERVAL);
    //       console.log(arr);
    //     }
    //   }
    //   if (!isSwapped) {
    //     break;
    //   }
    // }
    for (var i = 0; i < len; i++) {
      isSwapped = false;
      for (var j = 0; j < len - i - 1; j++) {
        this.timerId = window.setInterval(() => {
          this.setState({ array: arr });
        }, INTERVAL);
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          isSwapped = true;
          console.log(arr);
        }
      }
      if (!isSwapped) {
        break;
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <main className={styles.app}>
        <Title />
        <BubbleSort
          array={this.state.array}
          onNewSet={this.newSet.bind(this)}
          onStart={this.sortArray.bind(this)}
        />
        <Status status={this.state.status} />
      </main>
    );
  }
}

export default App;
