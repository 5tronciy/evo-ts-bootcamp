import { MarsViewer } from "./components/MarsViewer";
import s from "./App.module.css";
const App = () => {
  return (
    <div className={s.app}>
      <MarsViewer />
    </div>
  );
};

export default App;
