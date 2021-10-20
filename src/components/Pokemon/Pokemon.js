import PokemonImage from './PokemonImage';
import PokemonDetail from './PokemonDetail';
import './PokemonCard.css';

const Pokemon = (props) => {
  const { sprites, ...details } = props.pokemon;
  const { types, height, weight, ...idName } = details;
  const typeArray = Array.from(Object.values(types[0]));

  return (
    <div
      className='card'
      style={{
        backgroundImage: `url(types/${typeArray[0].name}.png)`,
        backgroundSize: 'cover',
      }}
    >
      <PokemonImage image={sprites} name={details.name} />
      <PokemonDetail
        types={typeArray}
        height={height}
        weight={weight}
        idName={idName}
      />
    </div>
  );
};

export default Pokemon;
