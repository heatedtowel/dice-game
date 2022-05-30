import Dice from '../dice/Dice'
import './assests/css/player.css'

const Player = ({ state, dispatch, ACTIONS, player }) => {
  const { playerNumber, selectedDice } = player
  const dice = ['4', '6', '8', '10', '12', '20']

  const handleClick = (state, selectedDice) => {
    const { start, turn, initialNumber } = state

    if (selectedDice.length > 0 && start) {
      const currentValue = initialNumber

      const determinePlayer = () => {
        if (turn === 1) {
          return 2
        }
        return 1
      }

      const roll = () => {
        let rollTotal = 0

        for (let dice of selectedDice) {
          let min = 1;
          let max = parseInt(dice)
          let roll = Math.floor(Math.random() * (max - min + 1) + min)
          rollTotal += roll
        }

        if ((currentValue - rollTotal) < 0) {
          return dispatch({
            type: ACTIONS.playerRoll,
            payload: {
              newNumber: currentValue,
              turn: determinePlayer()
            }
          })
        }
        if ((currentValue - rollTotal) === 0) {
          return dispatch({ type: ACTIONS.win })
        }
        return dispatch({
          type: ACTIONS.playerRoll,
          payload: {
            newNumber: currentValue - rollTotal,
            turn: determinePlayer()
          }
        })
      }

      roll()
    }
  }

  const handleDisabled = ({ start }) => {
    if (start && state.turn === playerNumber) {
      return false
    }
    return true
  }

  return (
    <div className='player--container'>
      <div>
        <h2>Player {playerNumber}</h2>
      </div>
      <div>
        <h3>Available Dice</h3>
      </div>
      <div className='dice--container'>
        {dice.map((die) => {
          return (
            <Dice
              die={die}
              playerNumber={playerNumber}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
          )
        })}
      </div>
      <button
        disabled={handleDisabled(state)}
        className='btn'
        onClick={() => handleClick(state, selectedDice)}
      > Roll
      </button>
    </div>
  )
}

export default Player