import './assets/css/numberGenerator.css';

const NumberGenerator = ({ randomNumber }) => {
  return (
    <div className='number'>
      {randomNumber}
    </div>
  )
};

export default NumberGenerator