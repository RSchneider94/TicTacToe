import React from 'react';
import styled from 'styled-components';

const StyledGameTile = styled.div`
  flex: 1 auto;
  border: 2px solid #5d3455;
  width: 33%;
  min-height: 182px;
  cursor: pointer;
`;

function GameTile({ children, handleClick }) {
  return <StyledGameTile onClick={handleClick}>{children}</StyledGameTile>;
}

export default GameTile;
