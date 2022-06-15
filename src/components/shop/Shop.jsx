import './css/shop.css'

const Shop = ({ state, dispatch, ACTIONS }) => {
  const shopContents = {
    'Re-Roll': 2,
    'Skip Turn': 6,
    '-1 Opponent Tokens': 5,
  }

  const handlePowerUps = (player, key, cost) => {
    if (player.tokens >= cost) {
      let newTokenCount = player.tokens - cost
      dispatch({ type: ACTIONS.purchaseItem, payload: { item: key, tokens: newTokenCount, playerNumber: player.playerNumber } })
    }
  }

  return (
    <>
      <h2>Shop</h2>
      <div className='shopContainer'>
        {Object.keys(shopContents).map((key) => {
          return (
            <div className='shopItem'>
              <h5>{key}</h5>
              <h5>{shopContents[key]} Tokens</h5>
              <button
                onClick={() => handlePowerUps(state.player1, key, shopContents[key])}
                disabled={!state.start || state.turn === state.player1.name}>
                P1
              </button>
              <button
                onClick={() => handlePowerUps(state.player2, key, shopContents[key])}
                disabled={!state.start || state.turn === state.player2.name}
              >
                P2
              </button>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Shop