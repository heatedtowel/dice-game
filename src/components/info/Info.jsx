import { useState } from 'react'
import './css/info.css'

const WinScreen = ({ initialState, setHasSetName }) => {

  const [player1Name, setplayer1Name] = useState('')
  const [player2Name, setplayer2Name] = useState('')


  const handleLogin = (p1Name, p2Name) => {
    if (p1Name.length >= 3 && p2Name.length >= 3) {
      initialState.player1.setName(p1Name)
      initialState.player2.setName(p2Name)
      return setHasSetName(true)
    }
    return alert('Name must be more than 3 letters')
  }

  return (
    <div className="winOverlay">
      <div className='info--container'>
        <form>
          <div>
            <h1>Player 1</h1>
            <input type="text" onChange={(e) => setplayer1Name(e.target.value)} />
            <h1>Player 2</h1>
            <input type="text" onChange={(e) => setplayer2Name(e.target.value)} />
          </div>
          <button type="button" onClick={() => handleLogin(player1Name, player2Name)}>Start Game</button>
        </form>
      </div>
    </div>
  )
}

export default WinScreen