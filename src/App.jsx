/* eslint-disable react/prop-types */

import { useState } from "react";

const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={onSquareClick}
      className="bg-white border border-gray-800 h-12 w-12 m-1 text-3xl"
    >
      {value}
    </button>
  );
};

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState();
  const handleClick = (i) => {
    const newSquare = [...square];
    if (isXNext) {
      newSquare[i] = "O";
    } else {
      newSquare[i] = "X";
    }
    setIsXNext(!isXNext);
    setSquare(newSquare);
  };
  return (
    <>
      <div className="flex">
        <Square value={square[0]} onSquareClick={() => handleClick(0)} />
        <Square value={square[1]} onSquareClick={() => handleClick(1)} />
        <Square value={square[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="flex">
        <Square value={square[3]} onSquareClick={() => handleClick(3)} />
        <Square value={square[4]} onSquareClick={() => handleClick(4)} />
        <Square value={square[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="flex">
        <Square value={square[6]} onSquareClick={() => handleClick(6)} />
        <Square value={square[7]} onSquareClick={() => handleClick(7)} />
        <Square value={square[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};

export default Board;
