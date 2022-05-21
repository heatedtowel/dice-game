import React from 'react';
import './assets/css/start.css'

const Start = ({ dispatch, difficulty, ACTIONS }) => {

  const handleStart = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 100) })
        break;
      case 'medium':
        dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 500) })
        break;
      case 'hard':
        dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 1000) })
        break;

      default: dispatch({ type: ACTIONS.setInitialNumber, payload: Math.floor(Math.random() * 20) })
        break;
    };
  };

  return (
    <>
      <button className='btn' onClick={() => handleStart(difficulty)}>Start</button>
    </>
  )
};

export default Start