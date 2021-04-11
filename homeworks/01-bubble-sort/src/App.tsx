import { Component } from "react";
import Title from "./components/Title";
import Frame from "./components/Frame";
import Status from "./components/Status";

type Props = {};

class App extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <>
        <Title />
        <Frame />
        <Status />
      </>
    );
  }
}

export default App;
