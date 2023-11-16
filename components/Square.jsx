import React from "react";

const Square = ({ value, active, handleClick }) => {
  if (!value) {
    return (
      <button
        disabled={Boolean(active)}
        onClick={handleClick}
        className="square"
      />
    );
  }
  return (
    <button disabled className={`square square_${value.toLowerCase()}`}>
      {value}
    </button>
  );
};

export default Square;
