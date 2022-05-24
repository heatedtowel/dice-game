import { useState } from "react"

const Dice = ({ die, dispatch, ACTIONS, playerNumber }) => {

  const [checked, setChecked] = useState(false)

  const handleChecked = (die) => {
    try {
      if (!checked) {
        dispatch({ type: ACTIONS.playerDiceAddition, payload: { die: die, playerNumber: playerNumber } })
        setChecked(!checked);
        return
      }
      dispatch({ type: ACTIONS.playerDiceRemoval, payload: { die: die, playerNumber: playerNumber } })
      setChecked(!checked);
    }
    catch (err) {
      console.log(err)
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => handleChecked(die)}
      />
      D{die}
    </label>
  )
}

export default Dice