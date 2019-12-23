import React, { useState } from "react";
import "./App.css";

import FormStartGame from "./components/FormStartGame";
import GameInfoBar from "./components/GameInfoBar";
import GameBoard from "./components/GameBoard";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  if (gameStarted) {
    return (
      <div>
        <GameInfoBar></GameInfoBar>
        <GameBoard></GameBoard>
      </div>
    );
  }
  return (
    <div>
      <FormStartGame></FormStartGame>
    </div>
  );
}

export default App;
