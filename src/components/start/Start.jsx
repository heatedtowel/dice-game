import React from 'react';
import { VscDebugRestart } from 'react-icons/vsc'
import './css/start.css'

const Start = ({ dispatch, state, ACTIONS, setHasSetName }) => {

  const handleStart = (difficulty) => {
    let min;
    if (state.start !== true && state.difficulty !== '') {
      switch (difficulty) {
        case 'Short':
          state.player1.setTokens(100)
          state.player2.setTokens(100)
          min = 1
          dispatch({
            type: ACTIONS.start,
            payload: {
              initialNumber: Math.floor(Math.random() * (50 - min + 1) + min),
              tokensPerTurn: 2
            }
          })
          break;
        case 'Medium':
          state.player1.setTokens(3)
          state.player2.setTokens(3)
          min = 50
          dispatch({
            type: ACTIONS.start,
            payload: {
              initialNumber: Math.floor(Math.random() * (100 - min + 1) + min),
              tokensPerTurn: 2
            }
          })
          break;
        case 'Long':
          state.player1.setTokens(3)
          state.player2.setTokens(3)
          min = 100
          dispatch({
            type: ACTIONS.start,
            payload: {
              initialNumber: Math.floor(Math.random() * (200 - min + 1) + min),
              tokensPerTurn: 2
            }
          })
          break;

        default:
          min = 1
          dispatch({
            type: ACTIONS.start,
            payload: {
              initialNumber: Math.floor(Math.random() * 50)
            }
          })
          break;
      };
    }
  };

  const handleReset = () => {
    setHasSetName(false)
    dispatch({ type: ACTIONS.reset })
  }

  return (
    <>
      <button
        className='start--btn'
        disabled={state.start ? true : false}
        onClick={() => handleStart(state.difficulty)}
      >Start
      </button>
      <button
        className='reset--btn'
        onClick={() => handleReset()}
      ><VscDebugRestart />
      </button>
    </>
  )
};

export default Start