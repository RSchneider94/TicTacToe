import React from 'react';

import styled from 'styled-components';

const StyledGameFinished = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px auto 0;
  width: 450px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

function GameFinished() {
  return (
    <StyledGameFinished>
      <p>Game Finished!</p>
    </StyledGameFinished>
  );
}

export default GameFinished;
