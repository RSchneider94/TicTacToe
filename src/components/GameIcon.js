import React from 'react';
import styled from 'styled-components';

const StyledGameIcon = styled.span`
  position: relative;
  top: 30%;
  left: 30%;
  font-size: 3.5em;
`;

function GameIcon() {
  return (
    <StyledGameIcon role="img" aria-label="x">
      {true ? '❌' : '⭕️'}
    </StyledGameIcon>
  );
}

export default GameIcon;
