import React from 'react';
import styled from 'styled-components';

import GameInfoBar from './GameInfoBar';
import GameTile from './GameTile';

const StyledGameBoard = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 80px auto 0;
  height: 550px;
  width: 450px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

let gameTiles = [];
for (let index = 0; index < 9; index++) {
  gameTiles.push(<GameTile key={index}></GameTile>);
}

function GameBoard() {
  return (
    <div>
      <GameInfoBar></GameInfoBar>
      <StyledGameBoard>{gameTiles}</StyledGameBoard>
    </div>
  );
}

export default GameBoard;
