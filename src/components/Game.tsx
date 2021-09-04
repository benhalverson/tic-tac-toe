import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';

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

  const renderMoves = () => {
    const moves = history.map((step, move) => {
     const destination = move ? `Go to move #${move}` : 'Go to game start'; 
     return (
       <li key={move}>
         <button onClick={() => jumpTo(move)}>{destination}</button>
       </li>
     )
    });
    console.log(moves);
  };

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  };


  return (
    <>
    <h1>Tic-Tac-Toe</h1>
    <Board squares={history[stepNumber].squares} onClick={handleClick} />
    <div className="wrapper">
      <div>
      <h3>History</h3>
      {renderMoves()}
      </div>
      <h3>{winner ? `Winner ${winner}`: `Next player ${xO}`}</h3>
    </div>
    </>
  )
}

export default Game;