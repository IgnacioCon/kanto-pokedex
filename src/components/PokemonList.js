import Pokemon from './Pokemon/Pokemon.js';

import './PokemonList.css';

const PokemonList = ({ pokemonArray }) => {
  return (
    <div className='container'>
      <div className='card-container'>
        {pokemonArray.map((x) => (
          <Pokemon key={x.id} pokemon={x} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
