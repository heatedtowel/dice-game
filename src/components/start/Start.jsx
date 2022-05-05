import React, { useState } from 'react';
import './assets/css/start.css'

const Start = ({ setRandomNumber, difficulty }) => {

  const [isActive, setIsActive] = useState(false)


  const handleStart = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        setRandomNumber(Math.floor(Math.random() * 20))
        break;
      case 'medium':
        setRandomNumber(Math.floor(Math.random() * 40))
        break;
      case 'hard':
        setRandomNumber(Math.floor(Math.random() * 60))
        break;

      default: setRandomNumber(Math.floor(Math.random() * 20))
        break;
    }
  }

  return (
    <>
      <button className='btn' onClick={() => handleStart(difficulty)}>Start</button>
    </>
  )
}

export default Start