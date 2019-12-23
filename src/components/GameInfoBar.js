import React from "react";

import { useSelector } from "react-redux";

import styled from "styled-components";

import PlayerInfo from "./PlayerInfo";

const StyledGameInfoBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  height: 40px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

function GameInfoBar() {
  const { player1, player2 } = useSelector(state => state.controlPlayers);
  return (
    <StyledGameInfoBar>
      <PlayerInfo player1={player1} player2={player2}></PlayerInfo>
    </StyledGameInfoBar>
  );
}

export default GameInfoBar;
