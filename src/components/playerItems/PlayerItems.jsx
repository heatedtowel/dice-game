const PlayerItems = ({ item, player, state, opposingPlayer }) => {
  return (
    <button
      onClick={() => state.turn !== player.name ? item.effect(player.playerNumber, opposingPlayer.playerNumber, item.name) : null}
    >{item.name}
    </button>
  )
}

export default PlayerItems