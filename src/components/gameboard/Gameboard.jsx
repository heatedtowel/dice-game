import { useState } from 'react';
import {
  Shop,
  NumberGenerator,
  DifficultyButton,
  Start,
  Player,
  WinScreen,
  PlayerInfo
} from '../../index'
import './css/gameboard.css';

const Gameboard = ({ initialState, state, dispatch, ACTIONS }) => {
  const [hasSetName, setHasSetName] = useState(false)
  const difficulties = ['Short', 'Medium', 'Long'];
  //build out difficulty class

  return (
    <>
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
          <Shop
            state={state}
            dispatch={dispatch}
            ACTIONS={ACTIONS} />
          <div className='number--container'>
            <Player
              state={state}
              player={state.player1}
              opposingPlayer={state.player2}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
            <div className='btn--container'>
              <NumberGenerator randomNumber={state.initialNumber} />
              <h4>Game Length</h4>
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
                setHasSetName={setHasSetName}
              />
            </div>
            <Player
              state={state}
              player={state.player2}
              opposingPlayer={state.player1}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
          </div>
        </div >}
    </>
  )
};

export default Gameboard