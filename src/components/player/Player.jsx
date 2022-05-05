import React, { useState } from 'react'
import './assests/css/player.css'

const Player = () => {

  const [checked, setChecked] = useState(false)

  const dice = ['D4', , 'D6', 'D8', 'D10', 'D12', 'D20']

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <div>
      <h3>Available Dice</h3>
      <div className='dice--container'>
        {dice.map((die) => <label>
          <input
            type="checkbox"
            checked={checked}
            onChange={handleChecked} />
          {die}
        </label>)}
      </div>
    </div>
  )
}

export default Player