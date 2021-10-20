import Header from './components/Header';
import PokemonList from './components/PokemonList';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

const App = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromAPI = await fetchPokemon();
      setPokemon(pokemonFromAPI);
    };
    getPokemon();
  }, []);

  //fetch pokemon
  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=3');
    const data = await response.json();

    const fetchedPokemon = [];
    for (let index = 0; index < data.results.length; index++) {
      const res = await fetch(data.results[index].url);
      const pkmn = await res.json();
      const { id, name, height, weight, sprites, types } = pkmn;
      const newPokemon = { id, name, height, weight, sprites, types };
      fetchedPokemon.push(newPokemon);
    }
    return fetchedPokemon;
  };

  return (
    <div>
      <Header />
      <PokemonList pokemonArray={pokemon} />
    </div>
  );
};

export default App;
