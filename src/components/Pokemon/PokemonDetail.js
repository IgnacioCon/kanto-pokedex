import PokemonName from './PokemonName';
import PokemonTypeList from './PokemonTypeList';
import PokemonInfo from './PokemonInfo';
import './PokemonCard.css';

const PokemonDetail = ({ types, height, weight, idName }) => {
  return (
    <div className='pokemon-details'>
      <PokemonName name={idName.name} pokemonID={idName.id} />
      <PokemonInfo height={height} weight={weight} />
      <PokemonTypeList types={types} />
    </div>
  );
};

export default PokemonDetail;
