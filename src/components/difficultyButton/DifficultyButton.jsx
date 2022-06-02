import React, { useRef } from 'react'
import './assets/css/difficultyButton.css'

const DifficultyButton = ({ difficulty, state, dispatch, ACTIONS }) => {

  const buttonRef = useRef()

  const handleClick = (start) => {
    if (!start) {
      dispatch({ type: ACTIONS.setDifficulty, payload: buttonRef.current.value })
    }
  }

  return (
    <button
      className={state.difficulty === difficulty ? 'btn-selected' : 'btn-unselected'}
      disabled={state.difficulty !== difficulty && state.start}
      ref={buttonRef}
      value={difficulty}
      onClick={() => handleClick(state.start)}
    >{difficulty}
    </button>
  )
}

export default DifficultyButton