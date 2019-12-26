import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import FormStartGame from '../components/FormStartGame';
import GameBoard from '../components/GameBoard';
import GameFinished from '../components/GameFinished';

import { setPlayerName, startGame } from '../redux/actions';

function GameRoot() {
  const { gameStarted, tiles, winner, roundFinished } = useSelector(
    state => state.controlGame
  );
  const { player1, player2 } = useSelector(state => state.controlPlayers);
  const dispatch = useDispatch();

  const handleChangePlayerName = e => {
    dispatch(setPlayerName(e.target.name, e.target.value));
  };

  const handleSubmitStartGame = e => {
    e.preventDefault();
    if (player1 && player2) {
      dispatch(startGame());
    }
  };

  if (!gameStarted) {
    return (
      <FormStartGame
        player1={player1}
        player2={player2}
        handleChange={handleChangePlayerName}
        handleSubmit={handleSubmitStartGame}
      ></FormStartGame>
    );
  }
  if (!roundFinished) {
    return <GameBoard tiles={tiles}></GameBoard>;
  }
  return <GameFinished></GameFinished>;
}

export default GameRoot;
