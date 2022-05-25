import { useReducer } from 'react';
import Header from '../header/Header';
import NumberGenerator from '../numberGenerator/NumberGenerator.jsx';
import DifficultyButton from '../difficultyButton/DifficultyButton';
import Start from '../start/Start.jsx';
import PlayerModel from '../../models/player'
import Player from '../player/Player.jsx';
import './assets/css/homepage.css';

const Homepage = () => {
  const difficulties = ['easy', 'medium', 'hard'];
  const ACTIONS = {
    reset: 'reset',
    setDifficulty: 'setDifficulty',
    setInitialNumber: 'setInitialNumber',
    playerDiceAddition: 'playerDiceAddition',
    playerDiceRemoval: 'playerDiceRemoval',
    playerRoll: 'playerRoll',
  }

  const initialState = {
    start: false,
    difficulty: 'easy',
    initialNumber: 0,
    player1: new PlayerModel(1),
    player2: new PlayerModel(2),
    turn: 1
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'reset':
        return {
          ...state,
          start: false,
          difficulty: 'easy',
          initialNumber: 0,
          turn: 1
        };
      case 'setDifficulty':
        return { ...state, difficulty: action.payload };
      case 'setInitialNumber':
        return {
          ...state,
          start: true,
          initialNumber: action.payload,
        };
      case 'playerDiceAddition':
        let diceAddition = {
          ...state
        };
        diceAddition[`player${action.payload.playerNumber}`] = {
          ...state[`player${action.payload.playerNumber}`],
          selectedDice: [...state[`player${action.payload.playerNumber}`].selectedDice, action.payload.die]
        }
        return diceAddition
      case 'playerDiceRemoval':
        let diceRemoval = {
          ...state
        };
        diceRemoval[`player${action.payload.playerNumber}`] = {
          ...state[`player${action.payload.playerNumber}`],
          selectedDice: [...state[`player${action.payload.playerNumber}`].selectedDice.filter(dice => dice !== action.payload.die)]
        }
        return diceRemoval
      case 'playerRoll':
        return {
          ...state,
          initialNumber: action.payload.newNumber,
          turn: action.payload.turn
        }
      default:
        throw new Error();
    };
  };

  return (
    <>
      <Header />
      <div className='body'>
        <div className='number--container'>
          <Player
            state={state}
            player={state.player1}
            dispatch={dispatch}
            ACTIONS={ACTIONS}
          />
          <div className='btn--container'>
            <div>
              <h3>Best of</h3>
              <h3>3</h3>
            </div>
            <NumberGenerator randomNumber={state.initialNumber} />
            <div className='difficulty--container'>
              {difficulties.map((difficulty) =>
                <DifficultyButton
                  key={difficulty}
                  difficulty={difficulty}
                  state={state}
                  dispatch={dispatch}
                  ACTIONS={ACTIONS}
                />
              )}
            </div>
            <Start
              state={state}
              dispatch={dispatch}
              ACTIONS={ACTIONS} />
          </div>
          <Player
            state={state}
            player={state.player2}
            dispatch={dispatch}
            ACTIONS={ACTIONS}
          />
        </div>
      </div >
    </>
  )
};

export default Homepage