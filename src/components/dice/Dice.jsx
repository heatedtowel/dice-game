import { useState } from "react"

const Dice = ({ die }) => {

  const [checked, setChecked] = useState(false)


  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChecked} />
      {die}
    </label>
  )
}

export default Dice