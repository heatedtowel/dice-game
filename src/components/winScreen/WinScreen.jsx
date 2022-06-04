import './css/winScreen.css'

const WinScreen = ({ state, dispatch, ACTIONS }) => {
  const handleReset = () => {
    dispatch({ type: ACTIONS.reset })
  }

  return (
    <div className="winOverlay">
      <div className='win--container'>
        <h1>Congratulations</h1>
        <h1>Player {state.turn}</h1>
        <button onClick={() => handleReset()}>Play Again</button>
      </div>
    </div>
  )
}

export default WinScreen