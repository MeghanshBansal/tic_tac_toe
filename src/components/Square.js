import React from "react";

const Square = ({ ind, player, onSquareClick }) => {
  return (
    <div>
      <button className="square" onClick={onSquareClick} name={ind}>
        {player}
      </button>
    </div>
  );
};

export default Square;
