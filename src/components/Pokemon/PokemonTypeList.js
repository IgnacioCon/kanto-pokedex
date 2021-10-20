import PokemonType from './PokemonType';

const PokemonTypeList = ({ types }) => {
  return (
    <div className='pokemon-types'>
      {types.map((x, idx) => (
        <PokemonType key={idx} type={x.type.name} />
      ))}
    </div>
  );
};

export default PokemonTypeList;
