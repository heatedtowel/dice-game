import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PlayerItems from '../playerItems/PlayerItems'
import Dice from '../dice/Dice'
import './css/player.css'

const Player = ({ state, dispatch, ACTIONS, player, opposingPlayer }) => {
  let { playerNumber, selectedDice, name, tokens } = player
  let [diceRolls, setDiceRolls] = useState([])
  let [popup, setPopup] = useState(false)
  const dice = ['4', '6', '8', '10', '12', '20']
  let rollTotal = 0

  const handleRoll = (state, selectedDice, playerName, playerNumber, tokens) => {
    const { start, initialNumber } = state

    if ((selectedDice.length > 0 && start) || tokens === 0) {
      const currentValue = initialNumber
      rollDice()

      function rollDice() {
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
        setPopup(player.items?.some(() => 'Re-Roll'))

        if (!player.items?.some(() => 'Re-Roll'))
          submitRoll(rollTotal, popup, currentValue, playerName, playerNumber)
      }
    }
  }

  function submitRoll(rollTotal, popup, currentValue, playerName, playerNumber) {
    if ((currentValue - rollTotal) < 0 && !popup) {
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

  const popupClickHandler = (answer) => {
    if (answer === 'Yes') {
      dispatch({
        type: ACTIONS.playerItemRemoval,
        payload: {
          playerNumber: playerNumber,
          item: 'Re-Roll'
        }
      })
      console.log('true', '\n', state, '\n', selectedDice, '\n', name, '\n', playerNumber, '\n', tokens)
      setPopup(player.items?.some(() => 'Re-Roll'))
      return handleRoll(state, selectedDice, name, playerNumber, tokens)
    }
    setPopup(false)
    console.log('false', '\n', rollTotal, '\n', popup, '\n', state.initialNumber, '\n', name, '\n', playerNumber)
    submitRoll(rollTotal, popup, state.initialNumber, name, playerNumber)
  }

  const handleDisabled = ({ start }) => {
    if (start && state.turn !== name) {
      return false
    }
    return true
  }

  return (
    <>
      {popup &&
        <div className='reRoll--popup--container'>
          <div className='reRoll--popup'>
            <h1>Would you like to use your Re-Roll item?</h1>
            <button
              className='popup--btn left'
              onClick={(e) => popupClickHandler(e.target.innerText,)}
            >Yes
            </button>
            <button
              className='popup--btn right'
              onClick={(e) => popupClickHandler(e.target.innerText, player)}
            >No
            </button>
            <div className='rollValues'>
              {diceRolls.map((roll => {
                return (
                  <button className='diceResult'>{roll}</button>
                )
              }))}
            </div>
          </div>
        </div>
      }
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
        {player.items.length > 0 && <div className='player--items--container'>
          <h3 className='items--title'>Items</h3>
          <div className='item--container'>
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
        </div>}
        <button
          disabled={handleDisabled(state)}
          className='roll--btn'
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
    </>
  )
}

export default Player