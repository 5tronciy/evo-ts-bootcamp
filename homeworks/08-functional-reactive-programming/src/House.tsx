import s from "./App.module.css";
import { ReactComponent as Wall } from "./assets/brick-wall.svg";
import { ReactComponent as Window } from "./assets/windows.svg";

export const House = () => {
  const gameBoard: Array<0 | 1> = [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0,
  ];

  const floors = 5;
  const rows = Array.from(Array(floors * 2 + 1).keys());

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
