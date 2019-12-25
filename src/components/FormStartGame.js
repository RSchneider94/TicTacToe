import React from 'react';
import styled from 'styled-components';

const StyledFormStartGame = styled.div`
  display: flex;
  flex-flow: row wrap;
  margin: 80px auto 0;
  padding-bottom: 40px;
  width: 80%;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const StyledWelcomeText = styled.h2`
  height: fit-content;
  text-align: center;
  font-size: 2.5em;
  padding-left: 2em;
  border-bottom: 2px solid #5d3455;
`;

const StyledFormGroup = styled.div`
  margin: 20px 0;
`;

const StyledInputText = styled.input`
  width: 40%;
  display: inline-block;
  padding: 6px;
  border: 1px solid #5d3455;
  border-radius: 2px;
  font-size: 14px;

  &:focus {
    border: 2px solid #5d3455;
    outline: 0;
  }
`;

const StyledSubmitButton = styled.button`
  background-color: #5d3455;
  border: 1px solid #5d3455;
  color: #fff;
  padding: 10px;
  border-radius: 2px;
  font-size: 14px;

  &:hover {
    cursor: pointer;
  }
`;

function FormStartGame({ player1, player2, handleChange, handleSubmit }) {
  return (
    <StyledFormStartGame>
      <StyledWelcomeText>
        Welcome! Let's start?
        <span role="img" aria-label="smile">
          😀
        </span>
      </StyledWelcomeText>
      <form
        onSubmit={handleSubmit}
        style={{ width: '100%', textAlign: 'center' }}
      >
        <StyledFormGroup>
          <label style={{ display: 'block', margin: '10px 0' }}>
            Player 1:
          </label>
          <StyledInputText
            type="text"
            name="player1"
            id="player1"
            placeholder="Enter the name of player 1"
            value={player1}
            onChange={handleChange}
          ></StyledInputText>
        </StyledFormGroup>
        <StyledFormGroup>
          <label style={{ display: 'block', margin: '10px 0' }}>
            Player 2:
          </label>
          <StyledInputText
            type="text"
            name="player2"
            id="player2"
            placeholder="Enter the name of player 2"
            value={player2}
            onChange={handleChange}
          ></StyledInputText>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledSubmitButton type="submit">Start the Game!</StyledSubmitButton>
        </StyledFormGroup>
      </form>
    </StyledFormStartGame>
  );
}

export default FormStartGame;
