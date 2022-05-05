import { useState } from 'react';
import Header from '../header/Header';
import NumberGenerator from '../numberGenerator/NumberGenerator.jsx';
import DifficultyButton from '../difficultyButton/DifficultyButton';
import Start from '../start/Start.jsx';
import Player from '../player/Player.jsx';
import './assets/css/homepage.css';

const Homepage = () => {

  const [randomNumber, setRandomNumber] = useState(0);
  const [difficulty, setDifficulty] = useState('easy')


  const difficulties = ['easy', 'medium', 'hard']

  const handleChange = (difficulty) => setDifficulty(difficulty)



  return (
    <>
      <Header />
      <div className='body'>
        <NumberGenerator randomNumber={randomNumber} />
        <div>
          <div className='btn--container'>
            {difficulties.map((difficulty) => <DifficultyButton key={difficulty} difficulty={difficulty} handleChange={handleChange} />)}
          </div>
          <Start setRandomNumber={setRandomNumber} difficulty={difficulty} />
        </div>
        <div className='player--container'>
          <Player />
          <Player />
        </div>
      </div>
    </>
  )
};

export default Homepage