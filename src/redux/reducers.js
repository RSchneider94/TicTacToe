import { combineReducers } from "redux";

const initialStatePlayers = {
  player1: "",
  pointsPlayer1: 0,
  player2: "",
  pointsPlayer2: 0
};

function controlGame(state = { gameStarted: false }, action) {
  switch (action.type) {
    case "START_GAME":
      return {
        gameStarted: true
      };
    default:
      return state;
  }
}

function controlPlayers(state = initialStatePlayers, action) {
  switch (action.type) {
    case "SET_PLAYER_NAME":
      return { ...state, [action.whichPlayer]: action.name };
    default:
      return state;
  }
}

const game = combineReducers({
  controlGame,
  controlPlayers
});

export default game;
