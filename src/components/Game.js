import React, { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [board, setBoard] = useState(new Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  function isWinner(board, player) {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      if (
        board[combination[0]] === player &&
        board[combination[1]] === player &&
        board[combination[2]] === player
      ) {
        return true;
      }
    }

    return false;
  }

  function onSquareClick(e) {
    if (winner !== "") return;
    const pos = parseInt(e.target.name, 10);

    if (board[pos] != null) {
      alert("Invalid Move");
      return;
    }

    const newBoard = [...board];
    newBoard[pos] = player;
    setBoard(newBoard);

    if (isWinner(newBoard, player)) {
      setWinner(`Winner: ${player}`);
    } else {
      setPlayer((currentPlayer) => (currentPlayer === "X" ? "O" : "X"));
    }
  }

  function resetGame() {
    setPlayer("X");
    setBoard(new Array(9).fill(null));
    setWinner("");
  }

  return (
    <div className="main">
      <h2>{player === "X" ? "Player X" : "Player O"}</h2>
      <Board board={board} onSquareClick={onSquareClick} />
      <button className="gameResetButton" onClick={resetGame}>
        Reset Board
      </button>
      <h2>{winner}</h2>
    </div>
  );
};

export default Game;
