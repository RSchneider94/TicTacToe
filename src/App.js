import React from "react";
import "./App.css";

import GameInfoBar from "./components/GameInfoBar";
import GameBoard from "./components/GameBoard";

function App() {
  return (
    <div>
      <GameInfoBar></GameInfoBar>
      <GameBoard></GameBoard>
    </div>
  );
}

export default App;
