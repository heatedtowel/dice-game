import './css/shop.css'

const Shop = ({ state, dispatch, ACTIONS }) => {
  console.log(state.player1)
  const shopContents = {
    'Re-Roll': {
      name: 'Re-Roll',
      price: 2,
      description: 'Allows a reroll of the entire turn',
      effect: function () {
        return null
      }
    },
    'Skip Turn': {
      name: 'Skip Turn',
      price: 1,
      description: 'Skips current turn without rolling',
      effect: function (playerNumber, opposingPlayer, itemToRemove, currentPlayer) {
        dispatch({
          type: ACTIONS.skipTurn,
          payload: {
            turn: currentPlayer,
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
    'Opponent Loses A Token': {
      name: 'Opponent Loses A Token',
      price: 4,
      description: 'Opposing player loses 1 token',
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
    'Gift Basket': {
      name: 'Gift Basket',
      price: 5,
      description: 'Contains 2 - 10 tokens',
      effect: function (playerNumber, opposingPlayer, itemToRemove) {
        let max = 10
        let min = 2
        let total = Math.floor(Math.random() * (max - min + 1) + min)
        dispatch({
          type: ACTIONS.giftBasket,
          payload: {
            additionalTokens: total,
            playerNumber: playerNumber,
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
    }
  }

  const handlePowerUps = (player, key, cost) => {
    let existingItem = player.items?.find((itemKey) => key === itemKey.name)
    let newTokenCount = player.tokens - cost
    if ((newTokenCount > 0) && !existingItem) {
      dispatch({ type: ACTIONS.purchaseItem, payload: { item: shopContents[key], tokens: newTokenCount, playerNumber: player.playerNumber } })
    }
  }

  return (
    <>
      <div className='shop--container'>
        <div>
          <h2 className='shopTitle'>Item Shop</h2>
        </div>
        <div className='shop--item--container'>
          {Object.keys(shopContents).map((key) => {
            return (
              <div key={key} className='shopItem'>
                <h5>{key}</h5>
                <h5>{shopContents[key].price} {shopContents[key].price > 1 ? 'Tokens' : 'Token'}</h5>
                <h5>{shopContents[key].description}</h5>
                <div>
                  <button
                    className='shop--purchase--p1--btn'
                    onClick={() => handlePowerUps(state.player1, key, shopContents[key].price)}
                    disabled={!state.start || state.turn === state.player1.name}>
                    P1
                  </button>
                  <button
                    className='shop--purchase--p2--btn'
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