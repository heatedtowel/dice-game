import './css/playerItems.css'

const PlayerItems = ({ item, player, state, opposingPlayer }) => {
  return (
    <button
      className="player--item"
      onClick={() => state.turn !== player.name ? item.effect(player.playerNumber, opposingPlayer.playerNumber, item.name, player.name) : null}
    >{item.name}
    </button>
  )
}

export default PlayerItems