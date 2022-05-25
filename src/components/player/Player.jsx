import Dice from '../dice/Dice'
import './assests/css/player.css'

const Player = ({ state, dispatch, ACTIONS, player }) => {

  const dice = ['4', '6', '8', '10', '12', '20']

  const handleRoll = (state, { selectedDice }) => {
    if (selectedDice.length > 0) {
      const currentValue = state.initialNumber
      let total = 0

      const determinePlayer = () => {
        if (state.turn === 1) {
          return 2
        }
        return 1
      }

      const roll = () => {
        for (let dice of selectedDice) {
          let min = 1;
          let max = parseInt(dice)
          let roll = Math.floor(Math.random() * (max - min + 1) + min)
          total += roll
        }
      }

      roll()

      return dispatch({ type: ACTIONS.playerRoll, payload: { newNumber: currentValue - total, turn: determinePlayer() } })
    }
  }

  return (
    <div className='player--container'>
      <div>
        <h2>Player {player.playerNumber}</h2>
        <h2>{player.remainder}</h2>
      </div>
      <div>
        <h3>Available Dice</h3>
      </div>
      <div className='dice--container'>
        {dice.map((die) => {
          return (
            <Dice
              die={die}
              playerNumber={player.playerNumber}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
          )
        })}
      </div>
      <button
        disabled={state.turn !== player.playerNumber ? true : false}
        className='btn'
        onClick={() => handleRoll(state, player)}> Roll </button>
    </div>
  )
}

export default Player