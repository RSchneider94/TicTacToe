const startGame = () => ({
  type: 'START_GAME'
});

const setPlayerName = (whichPlayer, name) => ({
  type: 'SET_PLAYER_NAME',
  whichPlayer,
  name
});

const makeMove = (tileXPosition, tileYPosition) => ({
  type: 'MAKE_MOVE',
  tileXPosition,
  tileYPosition
});

export { startGame, setPlayerName, makeMove };
