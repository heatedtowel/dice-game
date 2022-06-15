import { useState, useEffect } from 'react'
import Dice from '../dice/Dice'
import './assests/css/player.css'

const Player = ({ state, dispatch, ACTIONS, player }) => {
  let { playerNumber, selectedDice, name, tokens } = player
  let [diceRolls, setDiceRolls] = useState([])
  const dice = ['4', '6', '8', '10', '12', '20']

  useEffect(() => {
    if (!state.start) {
      setDiceRolls([])
    }
  }, [state.start])


  const handleRoll = (state, selectedDice, playerName, playerNumber, tokens) => {
    const { start, initialNumber } = state

    if ((selectedDice.length > 0 && start) || tokens === 0) {
      const currentValue = initialNumber

      const roll = () => {
        let currentRoll = []
        let rollTotal = 0

        for (let dice of selectedDice) {
          let min = 1;
          let max = parseInt(dice)
          let roll = Math.floor(Math.random() * (max - min + 1) + min)
          currentRoll.push(roll)
          rollTotal += roll
        }
        setDiceRolls(currentRoll)

        if ((currentValue - rollTotal) < 0) {
          return dispatch({
            type: ACTIONS.playerRoll,
            payload: {
              newNumber: currentValue,
              playerNumber: playerNumber,
              turn: playerName,
              tokens: tokens
            }
          })
        }
        if ((currentValue - rollTotal) === 0) {
          return dispatch({
            type: ACTIONS.win,
            payload: {
              winner: playerName
            }
          })
        }
        return dispatch({
          type: ACTIONS.playerRoll,
          payload: {
            newNumber: currentValue - rollTotal,
            playerNumber: playerNumber,
            turn: playerName,
            tokens: tokens
          }
        })
      }
      roll()
    }
  }

  const handleDisabled = ({ start }) => {
    if (start && state.turn !== name) {
      return false
    }
    return true
  }

  return (
    <div className='player--container'>
      <div>
        <h2>{name}</h2>
      </div>
      <div className='dice--container'>
        <div className='dice-title'>
          <h3>Available Dice</h3>
        </div>
        <div className='dice'>
          {dice.map((die) => {
            return (
              <Dice
                key={die}
                die={die}
                state={state}
                player={player}
                dispatch={dispatch}
                ACTIONS={ACTIONS}
              />
            )
          })}
        </div>
        <h3>Tokens: {player.tokens}</h3>
        <div className='container'>
          <h3>Items</h3>
          <div className='items--container'>
            {player.items?.map((item) => {
              return (
                <h5>{item}</h5>
              )
            })}
          </div>
        </div>
      </div>
      <button
        disabled={handleDisabled(state)}
        className='btn'
        onClick={() => handleRoll(state, selectedDice, name, playerNumber, tokens)}
      > Roll
      </button>
      <div className='rollValues'>
        {diceRolls.map((roll => {
          return (
            <button className='diceResult'>{roll}</button>
          )
        }))}
      </div>
    </div>
  )
}

export default Player