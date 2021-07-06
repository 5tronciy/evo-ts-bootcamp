import House from "../House/House";
import { AppConnected } from "./AppConnected";

interface IScore {
  score: number;
}

export const App = ({ score }: IScore) => {
  return (
    <div>
      <House />
      <p>Score: {score}</p>
    </div>
  );
};

export default AppConnected;
