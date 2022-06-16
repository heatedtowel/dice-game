import './css/shop.css'

const Shop = ({ state, dispatch, ACTIONS }) => {
  const shopContents = {
    'Re-Roll': 2,
    'Skip Turn': 6,
    '-1 Opponent Tokens': 5,
  }

  const handlePowerUps = (player, key, cost) => {
    if (player.tokens >= cost && !player.items.includes(key)) {
      let newTokenCount = player.tokens - cost
      dispatch({ type: ACTIONS.purchaseItem, payload: { item: key, tokens: newTokenCount, playerNumber: player.playerNumber } })
    }
  }

  return (
    <>
      <div className='shop--container'>
        <div>
          <h2 className='shopTitle'>Shop</h2>
        </div>
        <div className='shop--item--container'>
          {Object.keys(shopContents).map((key) => {
            return (
              <div className='shopItem'>
                <h5>{key}</h5>
                <h5>{shopContents[key]} Tokens</h5>
                <div>
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
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Shop