import { useState, useReducer } from 'react';
import Header from '../header/Header';
import NumberGenerator from '../numberGenerator/NumberGenerator.jsx';
import DifficultyButton from '../difficultyButton/DifficultyButton';
import Start from '../start/Start.jsx';
import Player from '../player/Player.jsx';
import WinScreen from '../winScreen/WinScreen';
import PlayerInfo from '../playerInfo/PlayerInfo'
import PlayerModel from '../../models/player'


import './assets/css/gameboard.css';

const Gameboard = () => {
  const [hasSetName, setHasSetName] = useState(false)

  // const gameBoardVariant = {
  //   aboutMe: {
  //     card: {
  //       opacity: 1,
  //       x: 0,
  //       backgroundColor: theme ? '#417257e3' : '#0c494fc0',
  //       borderRadius: '1rem',
  //       fontWeight: 500,
  //       transition: {
  //         y: { duration: .5 },
  //         opacity: { duration: 1 },
  //         borderRadius: { duration: 2 },
  //         backgroundColor: { duration: .5 },
  //         fontWeight: { duration: 1.5 }
  //       }
  //     }
  //   },
  // }

  const initialState = {
    start: false,
    difficulty: '',
    initialNumber: 0,
    player1: new PlayerModel(1),
    player2: new PlayerModel(2),
    turn: 1,
    winner: null
  };

  const difficulties = ['easy', 'medium', 'hard'];
  const ACTIONS = {
    reset: 'reset',
    setDifficulty: 'setDifficulty',
    setInitialNumber: 'setInitialNumber',
    playerDiceAddition: 'playerDiceAddition',
    playerDiceRemoval: 'playerDiceRemoval',
    playerRoll: 'playerRoll',
    win: 'win',
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  function reducer(state, action) {
    switch (action.type) {
      case 'reset':
        return {
          ...initialState
        };
      case 'win':
        return {
          ...initialState,
          winner: action.payload.winner
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
        };
      default:
        throw new Error();
    };
  };

  return (
    <>
      <Header />
      {!hasSetName ?
        <PlayerInfo
          initialState={initialState}
          setHasSetName={setHasSetName}
        /> :
        <div className='body'>
          {state.winner &&
            <WinScreen
              winner={state.winner}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
              setHasSetName={setHasSetName}
            />}
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
                ACTIONS={ACTIONS}
                setHasSetName={setHasSetName} />
            </div>
            <Player
              state={state}
              player={state.player2}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
          </div>
        </div >}

    </>
  )
};

export default Gameboard