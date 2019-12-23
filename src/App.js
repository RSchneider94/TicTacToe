import React from "react";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import GameRoot from "./containers/GameRoot";

function App() {
  return (
    <Provider store={store}>
      <GameRoot></GameRoot>
    </Provider>
  );
}

export default App;
