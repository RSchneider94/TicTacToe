const startGame = () => ({
  type: "START_GAME"
});

const setPlayerName = (whichPlayer, name) => ({
  type: "SET_PLAYER_NAME",
  whichPlayer,
  name
});

export { startGame, setPlayerName };
