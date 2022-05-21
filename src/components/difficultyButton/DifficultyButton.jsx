import React, { useRef } from 'react'
import './assets/css/difficultyButton.css'

const DifficultyButton = ({ difficulty, dispatch, ACTIONS }) => {

  const buttonRef = useRef()

  return (
    <button
      className='btn'
      ref={buttonRef}
      value={difficulty}
      onClick={() => dispatch({ type: ACTIONS.setDifficulty, payload: buttonRef.current.value })}
    >{difficulty}
    </button>
  )
}

export default DifficultyButton