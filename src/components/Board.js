import React from "react";
import Square from "./Square";

const Board = ({ board, onSquareClick }) => {
  return (
    <div>
      <div className="row">
        <Square ind={0} player={board[0]} onSquareClick={onSquareClick} />
        <Square ind={1} player={board[1]} onSquareClick={onSquareClick} />
        <Square ind={2} player={board[2]} onSquareClick={onSquareClick} />
      </div>
      <div className="row">
        <Square ind={3} player={board[3]} onSquareClick={onSquareClick} />
        <Square ind={4} player={board[4]} onSquareClick={onSquareClick} />
        <Square ind={5} player={board[5]} onSquareClick={onSquareClick} />
      </div>
      <div className="row">
        <Square ind={6} player={board[6]} onSquareClick={onSquareClick} />
        <Square ind={7} player={board[7]} onSquareClick={onSquareClick} />
        <Square ind={8} player={board[8]} onSquareClick={onSquareClick} />
      </div>
    </div>
  );
};

export default Board;
