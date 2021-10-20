import PokemonType from './PokemonType';

const PokemonTypeList = ({ types }) => {
  return (
    <div className='pokemon-types'>
      {types.map((type) => (
        <PokemonType key={type.url} type={type.name} />
      ))}
    </div>
  );
};

export default PokemonTypeList;
