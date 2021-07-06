import { House } from "./House";

export const HouseConnected = () => {
  const gameBoard: Array<0 | 1> = [
    0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
    0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
    0, 0, 0, 0, 0,
  ];

  const floors = 5;

  const rows = Array.from(Array(floors * 2 + 1).keys());

  return <House rows={rows} gameBoard={gameBoard} />;
};
