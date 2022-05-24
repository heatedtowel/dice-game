import React from 'react';
import './assets/css/start.css'

const Start = ({ dispatch, state, ACTIONS }) => {

  const handleStart = (difficulty) => {
    if (state.start !== true) {
      switch (difficulty) {
        case 'easy':
          dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 50) })
          break;
        case 'medium':
          dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 100) })
          break;
        case 'hard':
          dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 200) })
          break;

        default:
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
      <button className='btn' onClick={() => handleStart(state.difficulty)}>Start</button>
      <button className='btn' onClick={() => handleReset(state.difficulty)}>Restart</button>
    </>
  )
};

export default Start