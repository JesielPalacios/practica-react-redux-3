import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./styles.css";

const actionIncremented = {
  type: "@counter/incremented"
};

const actionDecremented = {
  type: "@counter/decremented"
};

const actionReseted = {
  type: "@counter/reseted"
};

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "@counter/incremented":
      return state + 1;
    case "@counter/decremented":
      return state - 1;
    case "@counter/reseted":
      return 0;
    default:
      return state;
  }
};

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = () => {
  return (
    <div className="App">
      <h1>Redux practice</h1>
      {store.getState()}{' '}
      <button
        onClick={() => store.dispatch(actionIncremented)}
      >
        +
      </button>{' '}
      <button
        onClick={() => store.dispatch(actionDecremented)}
      >
        -
      </button>{' '}
      <button
        onClick={() => store.dispatch(actionReseted)}
      >
        reset
      </button>{' '}
    </div>
  );
}

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderApp()
store.subscribe(renderApp)

// Redux desde cero - ¡Primeros pasos e introducción a Redux en español! (FullStack Bootcamp)
// https://www.youtube.com/watch?v=QEsukdXFxxs