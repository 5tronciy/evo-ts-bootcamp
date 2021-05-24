import s from "./App.module.css";
import { ReactComponent as Wall } from "./assets/brick-wall.svg";
import { ReactComponent as Window } from "./assets/windows.svg";

function App() {
  const gameBoard: Array<0 | 1> = [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0,
  ];

  const renderCell = (block: 0 | 1) => {
    return block === 0 ? <Wall height="50px" /> : <Window height="50px" />;
  };

  return (
    <div className={s.app}>
      <div className={s.house}>
        <div className={s.row}>
          {renderCell(gameBoard[0])}
          {renderCell(gameBoard[1])}
          {renderCell(gameBoard[2])}
          {renderCell(gameBoard[3])}
          {renderCell(gameBoard[4])}
        </div>
        <div className={s.row}>
          {renderCell(gameBoard[5])}
          {renderCell(gameBoard[6])}
          {renderCell(gameBoard[7])}
          {renderCell(gameBoard[8])}
          {renderCell(gameBoard[9])}
        </div>
        <div className={s.row}>
          {renderCell(gameBoard[10])}
          {renderCell(gameBoard[11])}
          {renderCell(gameBoard[12])}
          {renderCell(gameBoard[13])}
          {renderCell(gameBoard[14])}
        </div>
        <div className={s.row}>
          {renderCell(gameBoard[15])}
          {renderCell(gameBoard[16])}
          {renderCell(gameBoard[17])}
          {renderCell(gameBoard[18])}
          {renderCell(gameBoard[19])}
        </div>
        <div className={s.row}>
          {renderCell(gameBoard[20])}
          {renderCell(gameBoard[21])}
          {renderCell(gameBoard[22])}
          {renderCell(gameBoard[23])}
          {renderCell(gameBoard[24])}
        </div>
        <div className={s.row}>
          {renderCell(gameBoard[25])}
          {renderCell(gameBoard[26])}
          {renderCell(gameBoard[27])}
          {renderCell(gameBoard[28])}
          {renderCell(gameBoard[29])}
        </div>
        <div className={s.row}>
          {renderCell(gameBoard[30])}
          {renderCell(gameBoard[31])}
          {renderCell(gameBoard[32])}
          {renderCell(gameBoard[33])}
          {renderCell(gameBoard[34])}
        </div>
      </div>
    </div>
  );
}

export default App;
