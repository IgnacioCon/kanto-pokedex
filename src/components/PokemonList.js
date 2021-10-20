import Pokemon from './Pokemon/Pokemon.js';

import './PokemonList.css';

const poke = [
  {
    id: 6,
    name: 'Charizard',
    height: 17,
    weight: 905,
    types: [
      {
        0: {
          name: 'fire',
          url: 'https://pokeapi.co/api/v2/type/10/',
        },
        1: { name: 'flying', url: 'https://pokeapi.co/api/v2/type/3/' },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png',
        },
      },
    },
  },
  {
    id: 132,
    name: 'Ditto',
    height: 3,
    weight: 40,
    types: [
      {
        0: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        },
      },
    },
  },
  {
    id: 132,
    name: 'Ditto',
    height: 3,
    weight: 40,
    types: [
      {
        0: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        },
      },
    },
  },
  {
    id: 132,
    name: 'Ditto',
    height: 3,
    weight: 40,
    types: [
      {
        0: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        },
      },
    },
  },
  {
    id: 132,
    name: 'Ditto',
    height: 3,
    weight: 40,
    types: [
      {
        0: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        },
      },
    },
  },
  {
    id: 132,
    name: 'Ditto',
    height: 3,
    weight: 40,
    types: [
      {
        0: {
          name: 'normal',
          url: 'https://pokeapi.co/api/v2/type/1/',
        },
      },
    ],
    sprites: {
      other: {
        'official-artwork': {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png',
        },
      },
    },
  },
];

const PokemonList = () => {
  return (
    <div className='container'>
      <div className='card-container'>
        {poke.map((x) => (
          <Pokemon key={x.id} pokemon={x} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
