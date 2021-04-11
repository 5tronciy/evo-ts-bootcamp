import { Component } from "react";
import Title from "./components/Title";
import BubbleSort from "./components/BubbleSort";
import Status from "./components/Status";
import { generateArray } from "./utils";
import styles from "./styles.module.css";

type AppState = {
  array: number[];
};

class App extends Component {
  state: AppState = { array: [] };

  componentDidMount() {
    this.setState({ array: generateArray(50) });
  }

  newSet() {
    this.setState({ array: generateArray(50) });
  }

  sortArray() {
    return;
  }

  componentWillUnmount() {}

  render() {
    return (
      <main className={styles.app}>
        <Title />
        <BubbleSort
          array={this.state.array}
          onNewSet={this.newSet.bind(this)}
          onStart={this.sortArray.bind(this)}
        />
        <Status />
      </main>
    );
  }
}

export default App;
