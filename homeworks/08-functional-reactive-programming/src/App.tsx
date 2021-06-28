import s from "./App.module.css";
import { House } from "./House";

function App() {
  return (
    <div className={s.app}>
      <House />
    </div>
  );
}

export default App;
