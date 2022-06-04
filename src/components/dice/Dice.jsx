import { useState, useEffect } from "react"
import './css/dice.css'

const Dice = ({ start, die, dispatch, ACTIONS, playerNumber, selectedDice }) => {
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setChecked(false)
  }, [start])

  const handleChecked = (die, start) => {
    if (start) {
      if (!checked && selectedDice.length <= 2) {
        dispatch({ type: ACTIONS.playerDiceAddition, payload: { die: die, playerNumber: playerNumber } })
        setChecked(!checked);
        return
      }
      if (checked) {
        dispatch({ type: ACTIONS.playerDiceRemoval, payload: { die: die, playerNumber: playerNumber } })
        setChecked(!checked);
      }
    }
  };

  return (
    // <label>
    //   <input
    //     type="checkbox"
    //     checked={checked}
    //     onChange={() => handleChecked(die, start)}
    //   />
    //   D{die}
    // </label>
    <>
      <input
        id={playerNumber + die}
        type="checkbox"
        name={playerNumber + die}
        checked={checked}
        onChange={() => handleChecked(die, start)} />
      <div class="label">
        <label for={playerNumber + die}>D{die}</label>
      </div>
    </>
  )
}

export default Dice