import { Component } from "react";
import Title from "./components/Title";
import BubbleSort from "./components/BubbleSort";
import Status from "./components/Status";

type AppState = {
  array: number[];
};

class App extends Component {
  state: AppState = { array: [123, 2] };

  componentDidMount() {}

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
