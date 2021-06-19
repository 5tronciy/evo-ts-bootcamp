import { Router } from "./components/Router";
import { MarsViewer } from "./components/MarsViewer";
import s from "./App.module.css";
import { RootState } from "./app/store";
import { Favourites } from "./components/Favourites";
import { useAppSelector } from "./app/hooks";

const App = () => {
  const route = useAppSelector(
    (state: RootState) => state.routes.selectedRoute
  );

  return (
    <div className={s.app}>
      <Router />
      {route === "nasa" ? (
        <MarsViewer />
      ) : route === "favourites" ? (
        <Favourites />
      ) : (
        <p>Router error!</p>
      )}
    </div>
  );
};

export default App;
