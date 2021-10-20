import './PokemonCard.css';

const PokemonInfo = ({ height, weight }) => {
  return (
    <div className='pokemon-info'>
      <div className='pokemon-info-box'>
        <span>
          <strong>{height / 10}m</strong>
        </span>
        <h4>Height</h4>
      </div>

      <div className='pokemon-info-box'>
        <span>
          <strong>{weight / 10}kg</strong>
        </span>
        <h4>Weight</h4>
      </div>
    </div>
  );
};

export default PokemonInfo;
