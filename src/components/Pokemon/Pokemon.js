import PokemonImage from './PokemonImage';
import PokemonDetail from './PokemonDetail';
import './PokemonCard.css';

const Pokemon = (props) => {
  const { sprites, ...details } = props.pokemon;
  const { types, height, weight, ...idName } = details;
  return (
    <div
      className='card'
      style={{
        backgroundImage: `url(types/${types[0].type.name}.png)`,
        backgroundSize: 'cover',
      }}
    >
      <PokemonImage image={sprites} name={details.name} />
      <PokemonDetail
        types={types}
        height={height}
        weight={weight}
        idName={idName}
      />
    </div>
  );
};

export default Pokemon;
