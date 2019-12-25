import React from 'react';
import styled from 'styled-components';

import GameInfoBar from './GameInfoBar';
import GameTile from './GameTile';
import GameIcon from './GameIcon';

import { useDispatch } from 'react-redux';
import { makeMove } from '../redux/actions';

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

function GameBoard({ tiles }) {
  const dispatch = useDispatch();
  let gameTiles = [];

  const handleTileClick = (x, y) => () => {
    dispatch(makeMove(x, y));
  };

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      gameTiles.push(
        <GameTile
          key={`tile_${i}_${j}`}
          handleClick={tiles[i][j] > 0 ? () => {} : handleTileClick(i, j)}
          positionX={i}
          positionY={j}
        >
          <GameIcon tile={tiles[i][j]}></GameIcon>
        </GameTile>
      );
    }
  }
  return (
    <div>
      <GameInfoBar></GameInfoBar>
      <StyledGameBoard>{gameTiles}</StyledGameBoard>
    </div>
  );
}

export default GameBoard;
