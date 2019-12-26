import { combineReducers } from 'redux';

const initialStatePlayers = {
  player1: '',
  pointsPlayer1: 0,
  player2: '',
  pointsPlayer2: 0
};

const initialStateGame = {
  gameStarted: false,
  tiles: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ],
  currentPlayer: 1,
  moves: 0,
  roundFinished: false
};

function controlGame(state = initialStateGame, action) {
  switch (action.type) {
    case 'START_GAME':
      return {
        ...state,
        gameStarted: true
      };
    case 'MAKE_MOVE':
      let newRoundFinished = state.roundFinished;
      let newMoves = ++state.moves;
      if (newMoves === 9) {
        newRoundFinished = true;
      }
      const newTiles = [...state.tiles];
      newTiles[action.tileXPosition][action.tileYPosition] =
        state.currentPlayer;

      return {
        ...state,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
        tiles: newTiles,
        moves: newMoves,
        roundFinished: newRoundFinished
      };
    default:
      return state;
  }
}

function controlPlayers(state = initialStatePlayers, action) {
  switch (action.type) {
    case 'SET_PLAYER_NAME':
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
