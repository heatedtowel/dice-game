import React, { useState } from 'react'
import Dice from '../dice/Dice'
import Roll from '../roll/Roll'
import './assests/css/player.css'

const Player = () => {


  const dice = ['D4', , 'D6', 'D8', 'D10', 'D12', 'D20']


  return (
    <div className='player--container'>
      <div>
        <h2>Player 1</h2>
        <h2>0</h2>
      </div>
      <div>
        <h3>Available Dice</h3>
      </div>
      <div className='dice--container'>
        {dice.map((die) => {
          return (
            <Dice die={die} />
          )
        })}
      </div>
      < Roll />
    </div>
  )
}

export default Player