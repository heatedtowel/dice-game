import './css/shop.css'

const Shop = ({ state, dispatch, ACTIONS }) => {
  const shopContents = {
    'Re-Roll': {
      name: 'Re-Roll',
      price: 2,
      effect: function () { return console.log('reroll') }
    },
    'Skip Turn': {
      name: 'Skip Turn',
      price: 6,
      effect: function () { return console.log('Skip Turn') }
    },
    'Opponent Loses A Token': {
      name: 'Opponent Loses A Token',
      price: 5,
      effect: function (playerNumber, opposingPlayer, itemToRemove) {
        dispatch({
          type: ACTIONS.minusOpponentTokens,
          payload: {
            opposingPlayer: opposingPlayer,
            minusTokenAmmount: 1
          }
        })
        dispatch({
          type: ACTIONS.playerItemRemoval,
          payload: {
            item: itemToRemove,
            playerNumber: playerNumber
          }
        })
      }
    },
    'Shop Item 4': {
      name: 'Re-Roll',
      price: 20,
      effect: function () { return console.log('reroll') }
    },
    'Shop Item 5': {
      name: 'Skip Turn',
      price: 10,
      effect: function () { return console.log('Skip Turn') }
    },
  }

  const handlePowerUps = (player, key, cost) => {
    let existingItem = player.items?.find((itemKey) => key === itemKey.name)
    if ((player.tokens >= cost) && !existingItem) {
      let newTokenCount = player.tokens - cost
      dispatch({ type: ACTIONS.purchaseItem, payload: { item: shopContents[key], tokens: newTokenCount, playerNumber: player.playerNumber } })
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
              <div key={key} className='shopItem'>
                <h5>{key}</h5>
                <h5>{shopContents[key].price} Tokens</h5>
                <div>
                  <button
                    onClick={() => handlePowerUps(state.player1, key, shopContents[key].price)}
                    disabled={!state.start || state.turn === state.player1.name}>
                    P1
                  </button>
                  <button
                    onClick={() => handlePowerUps(state.player2, key, shopContents[key].price)}
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