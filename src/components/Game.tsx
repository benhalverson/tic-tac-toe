import  { useState } from "react";
import { calculateWinner } from "../helper";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);
  const xO = xIsNext ? "X" : "O";
  const winner = calculateWinner(history[stepNumber].squares);

  const handleClick = (i: number) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[historyPoint.length - 1];
    const squares = [...current.squares];
    // return if won or occupied
    if (winner || squares[i]) {
      return;
    }
    squares[i] = xO;
    setHistory(historyPoint.concat([{ squares }]));
    setStepNumber(historyPoint.length);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
  };

  return (
    <>
      <h1>Tic-Tac-Toe</h1>
      <h3>{winner ? `Winner ${winner}` : `Next player ${xO}`}</h3>
      <Board squares={history[stepNumber].squares} onClick={handleClick} />
      <button className="reset" onClick={resetGame}>Reset</button>
    </>
  );
};

export default Game;
