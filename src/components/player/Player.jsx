import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PlayerItems from '../playerItems/PlayerItems'
import Dice from '../dice/Dice'
import './assests/css/player.css'

const Player = ({ state, dispatch, ACTIONS, player, opposingPlayer }) => {
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
    <motion.div
      className='player--container'
      animate={{ color: player.color ? `${player.color}` : '#FFFFFF' }}
    >
      <h2>{name}</h2>
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
      </div>
      <div>
        <h3>Tokens: {player.tokens}</h3>
      </div>
      <div className='player--item--container'>
        <h3>Items</h3>
        <div className='items--container'>
          {Object.keys(player.items).map((item) => {
            return (
              <PlayerItems
                key={`${player.items[item].name}-${player.name}`}
                item={player.items[item]}
                player={player}
                opposingPlayer={opposingPlayer}
                state={state}
              />
            )
          })}
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
    </motion.div>
  )
}

export default Player