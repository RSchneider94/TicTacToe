import React from 'react';
import styled from 'styled-components';

const StyledGameIcon = styled.span`
  position: relative;
  top: 30%;
  left: 30%;
  font-size: 3.5em;
`;

function GameIcon({ tile }) {
  return (
    <StyledGameIcon role="img" aria-label="x">
      {tile === 1 && '❌'}
      {tile === 2 && '⭕️'}
    </StyledGameIcon>
  );
}

export default GameIcon;
