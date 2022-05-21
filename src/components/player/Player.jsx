import Dice from '../dice/Dice'
import Roll from '../roll/Roll'
import './assests/css/player.css'

const Player = ({ state, dispatch, ACTIONS, player }) => {

  const dice = ['D4', 'D6', 'D8', 'D10', 'D12', 'D20']

  return (
    <div className='player--container'>
      <div>
        <h2>Player {player.playerNumber}</h2>
        <h2>{player.remainder}</h2>
      </div>
      <div>
        <h3>Available Dice</h3>
      </div>
      <div className='dice--container'>
        {dice.map((die) => {
          return (
            <Dice
              die={die}
              playerNumber={player.playerNumber}
              dispatch={dispatch}
              ACTIONS={ACTIONS}
            />
          )
        })}
      </div>
      <button className='btn'> Roll </button>
    </div>
  )
}

export default Player