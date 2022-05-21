import { useState } from "react"

const Dice2 = ({ die, dispatch, ACTIONS }) => {

  const [checked, setChecked] = useState(false)

  const handleChecked = (die) => {
    try {
      if (!checked) {
        dispatch({ type: ACTIONS.player2DiceAddition, payload: die })
        setChecked(!checked);
        return
      }
      dispatch({ type: ACTIONS.player2DiceRemoval, payload: die })
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
      {die}
    </label>
  )
}

export default Dice2