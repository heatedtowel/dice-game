import Confetti from 'react-confetti'
import './css/winScreen.css'

const WinScreen = ({ winner, dispatch, ACTIONS, setHasSetName }) => {
  const handleReset = () => {
    setHasSetName(false)
    dispatch({ type: ACTIONS.reset })
  }

  return (
    <div className="winOverlay">
      <Confetti />
      <div className='win--container'>
        <h1>Congratulations</h1>
        <h1>{winner}</h1>
        <button onClick={() => handleReset()}>Play Again</button>
      </div>
    </div>
  )
}

export default WinScreen