import './assets/css/numberGenerator.css';

const NumberGenerator = ({ randomNumber }) => {
  return (
    <div className='dice'>{randomNumber}</div>
  )
};

export default NumberGenerator