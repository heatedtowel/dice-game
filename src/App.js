import { useReducer } from 'react';
import Gameboard from './components/gameboard/Gameboard'
import { initialState, ACTIONS, reducer } from './GameReducer';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <div className="App-body">
        <Gameboard
          initialState={initialState}
          state={state}
          dispatch={dispatch}
          ACTIONS={ACTIONS}
        />
      </div>
    </div>
  );
}

export default App;
