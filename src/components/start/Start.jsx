import React from 'react';
import { VscDebugRestart } from 'react-icons/vsc'
import './assets/css/start.css'

const Start = ({ dispatch, state, ACTIONS }) => {

  const handleStart = (difficulty) => {
    let min;
    if (state.start !== true && state.difficulty !== '') {
      switch (difficulty) {
        case 'easy':
          min = 1
          dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * (50 - min + 1) + min) })
          break;
        case 'medium':
          min = 50
          dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * (100 - min + 1) + min) })
          break;
        case 'hard':
          min = 100
          dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * (200 - min + 1) + min) })
          break;

        default:
          min = 1
          dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 50) })
          break;
      };
    }
  };

  const handleReset = () => {
    dispatch({ type: ACTIONS.reset })
  }

  return (
    <>
      <button
        className='btn'
        disabled={state.start ? true : false}
        onClick={() => handleStart(state.difficulty)}
      >Start
      </button>
      <button
        className='btn'
        onClick={() => handleReset()}
      ><VscDebugRestart />
      </button>
    </>
  )
};

export default Start