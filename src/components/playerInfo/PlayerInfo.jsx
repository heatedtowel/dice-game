import { useState } from 'react'
import { motion } from 'framer-motion'
import './css/playerInfo.css'

const WinScreen = ({ initialState, setHasSetName }) => {

  const [player1Name, setplayer1Name] = useState('')
  const [player2Name, setplayer2Name] = useState('')

  const playerInfoVariant = {
    container: {
      opacity: 1,
      borderRadius: '56% 44% 87% 13% / 37% 61% 39% 63%',
      padding: '5rem 12rem',
      transition: {
        duration: 2
      }
    },
    text: {

    }
  }

  const handleLogin = (p1Name, p2Name) => {
    if (p1Name.length >= 3 && p2Name.length >= 3) {
      initialState.player1.setName(p1Name)
      initialState.player2.setName(p2Name)
      return setHasSetName(true)
    }
    return alert('Name must be more than 3 letters')
  }

  return (
    <div>
      <motion.div
        className='info--container'
        initial={{ opacity: 0, borderRadius: '1rem', padding: '0rem' }}
        variants={playerInfoVariant}
        animate='container'
      >
        <form>
          <div>
            <h1>Player 1</h1>
            <input
              style={{ color: (player1Name.length > 3) ? 'green' : 'red' }}
              type="text"
              placeholder='please choose a name'
              onChange={(e) => setplayer1Name(e.target.value)}
            />
            <h1>Player 2</h1>
            <input
              style={{ color: (player2Name.length > 3) ? 'green' : 'red' }}
              type="text"
              placeholder='please choose a name'
              onChange={(e) => setplayer2Name(e.target.value)}
            />
          </div>
          <motion.button
            className='infoBtn'
            type="button"
            whileHover={{ scale: [1, 1.2, 1], transition: { repeat: Infinity } }}
            onClick={() => handleLogin(player1Name, player2Name)}
          >Start Game
          </motion.button>
        </form>
      </motion.div>
    </div >
  )
}

export default WinScreen