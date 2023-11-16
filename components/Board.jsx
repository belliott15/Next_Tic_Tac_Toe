"use client";
import React, { useEffect, useState } from "react";
import Square from "./Square.jsx";
import Tracker from "./Tracker.jsx";

const Board = () => {
  //state to track win/loss/scratch
  const [xWin, setXWin] = useState(0);
  const [oWin, setOWin] = useState(0);
  const [scratch, setScratch] = useState(0);
  //set square state to create board
  const [squares, setSquares] = useState(Array(9).fill(null));
  //state to track current player
  const [currentPlayer, setCurrentPlayer] = useState(
    Math.round(Math.random() * 1) === 1 ? "X" : "O"
  );
  //state to hold if game is over
  const [active, setActive] = useState(null);

  //handle the selection function of
  const handleClick = (index) => {
    //map through squares state and if clicked index is same as
    //parameter index return the current player else just return the val
    const newData = squares.map((val, i) => {
      if (i === index) {
        return currentPlayer;
      }
      return val;
    });
    //update state with new square data
    setSquares(newData);
    //change player to opposite player
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  //reset board function
  const resetClick = () => {
    const newBoard = Array(9).fill(null);
    setSquares(newBoard);
    const randomPlayer = Math.round(Math.random() * 1) === 1 ? "X" : "O";
    setCurrentPlayer(randomPlayer);
    setActive(null);
  };

  //check if winner or cats game
  const checkWinner = (board) => {
    //winning combinations
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    //loop through winning combinations and match to the board
    for (let i = 0; i < lines.length; i++) {
      //set variables for each array in the lines array
      const [a, b, c] = lines[i];
      //if the first value is equal to other two values return the value (winner)
      //else return null and continue
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  //when squares are updated and page loads check to see if a winner has been found
  useEffect(() => {
    //if winner is found set state to winner symbol
    const w = checkWinner(squares);
    if (w) {
      setActive(w);
      if (w === "X") setXWin(xWin + 1);
      if (w === "O") setOWin(oWin + 1);
    }
    //if no winner and all squares have values set state to 'Scratch
    if (!w && !squares.filter((square) => !square).length) {
      setActive("Scratch");

      setScratch(scratch + 1);
    }
  }, [squares]);

  return (
    <section className="flex-column ">
      <h1 className="flex justify-center">Current Player: {currentPlayer}</h1>
      <div className="flex justify-center p-5">
        <div className="grid">
          {/* map through squares state and create a new square per */}
          {squares.map((_, i) => {
            return (
              <Square
                key={i}
                handleClick={() => handleClick(i)}
                value={squares[i]}
                active={active}
              />
            );
          })}
        </div>
      </div>
      {/* create conditional to display winner on screen */}
      <div className="flex justify-center p-10">
        {active && active !== "Scratch" && <p>{active} has won the round</p>}
        {active && active === "Scratch" && <p>Scratch Game Try again!</p>}
      </div>
      <footer className="flex justify-center">
        <button
          onClick={resetClick}
          className="rounded bg-gray-700 text-white px-3"
        >
          Reset
        </button>
      </footer>
      <Tracker xWin={xWin} oWin={oWin} scratch={scratch} />
    </section>
  );
};

export default Board;
