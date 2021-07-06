import s from "./styles.module.css";
import { ReactComponent as Wall } from "../../assets/brick-wall.svg";
import { ReactComponent as Window } from "../../assets/windows.svg";
import { HouseConnected } from "./HouseConnected";

interface IProps {
  rows: number[];
  gameBoard: Array<0 | 1>;
}

export const House = ({ rows, gameBoard }: IProps) => {
  return (
    <div className={s.house}>
      {rows.map((floor) => (
        <div key={floor} className={s.row}>
          {gameBoard
            .slice(floor * 5, floor * 5 + 5)
            .map((cell) =>
              cell === 0 ? (
                <Wall key={String(floor) + cell} height="50px" />
              ) : (
                <Window
                  key={String(floor) + cell}
                  className="window"
                  height="50px"
                />
              )
            )}
        </div>
      ))}
    </div>
  );
};

export default HouseConnected;
