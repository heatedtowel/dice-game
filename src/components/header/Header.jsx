import './assets/css/header.css'

const Header = () => {
  return (
    <div className='score--container'>
      <div>
        <h2>Player 1</h2>
        <h2>0</h2>
      </div>
      <div>
        <h3>Best of</h3>
        <h3>3</h3>
      </div>
      <div>
        <h2>Player 2</h2>
        <h2>0</h2>
      </div>
    </div>
  )
}

export default Header