import { useState, useEffect } from "react"
import './css/dice.css'

const Dice = ({ state, die, dispatch, ACTIONS, player }) => {
  let { playerNumber, tokens } = player
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(false)
  }, [state.start, state.turn])

  const handleChecked = (die, playerNumber, tokens) => {
    if (!checked && tokens !== 0) {
      let newTokens = tokens - 1
      dispatch({
        type: ACTIONS.playerDiceAddition,
        payload: {
          die: die,
          playerNumber: playerNumber,
          tokens: newTokens
        }
      })
      setChecked(!checked);
      return
    }
    if (checked) {
      let newTokens = tokens + 1
      dispatch({
        type: ACTIONS.playerDiceRemoval,
        payload: {
          die: die,
          playerNumber: playerNumber,
          tokens: newTokens
        }
      })
      setChecked(!checked);
    }
  };

  return (
    <>
      <input
        id={playerNumber + die}
        type="checkbox"
        disabled={!state.start}
        name={playerNumber + die}
        checked={checked}
        onChange={() => handleChecked(die, playerNumber, tokens)}
      />
      <div className="label">
        <label
          for={playerNumber + die}
        >D{die}
        </label>
      </div>
    </>
  )
}

export default Dice