import { useState } from 'react'
import { motion } from 'framer-motion'
import './css/playerInfo.css'

const WinScreen = ({ initialState, setHasSetName }) => {

  const [player1Info, setplayer1Info] = useState({ name: '', color: '' })
  const [player2Info, setplayer2Info] = useState({ name: '', color: '' })

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
      initialState.player1.setName(player1Info.name)
      initialState.player1.setColor(player1Info.color)
      initialState.player2.setName(player2Info.name)
      initialState.player2.setColor(player2Info.color)
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
        <form
          onSubmit={() => handleLogin(player1Info.name, player2Info.name)}
        >
          <div>
            <h1>Player 1</h1>
            <input
              style={{ color: (player1Info.name.length >= 3) ? 'green' : 'red' }}
              type="text"
              placeholder='please choose a name'
              onChange={(e) => setplayer1Info(prev => ({ ...prev, name: e.target.value }))}
            />
            <input
              type="color"
              onChange={(e) => setplayer1Info(prev => ({ ...prev, color: e.target.value }))}
            />
            <h1>Player 2</h1>
            <input
              style={{ color: (player2Info.name.length >= 3) ? 'green' : 'red' }}
              type="text"
              placeholder='please choose a name'
              onChange={(e) => setplayer2Info(prev => ({ ...prev, name: e.target.value }))}
            />
            <input
              type="color"
              onChange={(e) => setplayer2Info(prev => ({ ...prev, color: e.target.value }))}
            />
          </div>
          <motion.button
            className='infoBtn'
            type="submit"
            whileHover={{ scale: [1, 1.2, 1], transition: { repeat: Infinity } }}
          >Continue
          </motion.button>
        </form>
      </motion.div>
    </div >
  )
}

export default WinScreen