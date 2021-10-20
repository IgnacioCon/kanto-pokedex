const PokemonName = ({ name, pokemonID }) => {
  const paddedID = pokemonID.toString().padStart(3, '0');
  return (
    <div className='pokemon-name'>
      <h2>{name}</h2>
      &nbsp;
      <h3>{`#${paddedID}`}</h3>
    </div>
  );
};

export default PokemonName;
