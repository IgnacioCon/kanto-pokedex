import './PokemonTypes.css';

const PokemonType = ({ type }) => {
  return (
    <div className='type-container'>
      <div className={`icon ${type}`}>
        <img className='icon-img' src={`icons/${type}.svg`} alt={type} />
      </div>
      <h4 className='type-name'>{type}</h4>
    </div>
  );
};

export default PokemonType;
