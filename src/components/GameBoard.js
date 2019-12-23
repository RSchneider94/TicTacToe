import React from "react";
import styled from "styled-components";

const StyledGameBoard = styled.div`
  display: flex;
  margin: 80px auto 0;
  height: 400px;
  width: 400px;
  background-color: #fff;
  border-radius: 2%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

function GameBoard() {
  return <StyledGameBoard></StyledGameBoard>;
}

export default GameBoard;
