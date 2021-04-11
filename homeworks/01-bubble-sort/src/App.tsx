import { Component } from "react";
import Title from "./components/Title";
import BubbleSort from "./components/BubbleSort";
import Status from "./components/Status";
import { generateArray } from "./utils";

type AppState = {
  array: number[];
};

class App extends Component {
  state: AppState = { array: [] };

  componentDidMount() {
    this.setState({ array: generateArray(50) });
  }

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Title />
        <BubbleSort array={this.state.array} />
        <Status />
      </>
    );
  }
}

export default App;
