import './css/shop.css'

const Shop = () => {
  return (
    <>
      <h2>Shop</h2>
      <div className='shopContainer'>
        <div className='shopItem'>
          <button>
            Re-Roll
          </button>
          <h5>2 tokens</h5>
        </div>
        <div className='shopItem'>
          <button>
            Skip Turn
          </button>
          <h5>6 tokens</h5>
        </div>
        <div className='shopItem'>
          <button>
            -1 Opponent Tokens
          </button>
          <h5>5 tokens</h5>
        </div>
      </div>
    </>
  )
}

export default Shop