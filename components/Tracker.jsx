import React from "react";

const Tracker = ({ xWin, oWin, scratch }) => {
  console.log(xWin, oWin, scratch, "tracker prop");
  return (
    <section className="flex justify-center">
      <div className="flex-column">
        <p>X Wins: {xWin}</p>
        <p>O Wins: {oWin}</p>
        <p>Scratch Games: {scratch}</p>
      </div>
    </section>
  );
};

export default Tracker;
