import React from "react";

function PlayerInfo({ player1, player2 }) {
  return (
    <div>
      <span>{player1}: 0 pts</span> | <span>{player2}: 0 pts</span>
    </div>
  );
}

export default PlayerInfo;
