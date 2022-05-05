import React, { useRef, useState } from 'react'
import './assets/css/difficultyButton.css'

const DifficultyButton = ({ difficulty, handleChange }) => {



  const buttonRef = useRef()

  return (
    <button
      className='btn'
      ref={buttonRef}
      value={difficulty}
      onClick={() => handleChange(buttonRef.current.value)}
    >{difficulty}
    </button>
  )
}

export default DifficultyButton