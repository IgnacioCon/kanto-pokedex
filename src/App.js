import Header from './components/Header';
import PokemonList from './components/PokemonList';
import './App.css';
import { useState, useEffect } from 'react';
const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getPokemon = async () => {
      const pokemonFromAPI = await fetchPokemon();
      setPokemon(pokemonFromAPI);
      setFilteredPokemon(pokemonFromAPI);
    };
    getPokemon();
  }, []);

  //fetch pokemon
  const fetchPokemon = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
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

  const filterPokemon = (termToSearch) => {
    const searchTerm = termToSearch.toString().toLowerCase().trim();
    if (searchTerm === '') {
      setSearch(termToSearch);
      setFilteredPokemon(pokemon);
      return;
    }
    const filtered = pokemon.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm)
    );

    setSearch(termToSearch);
    setFilteredPokemon(filtered);
  };

  return (
    <div>
      <Header search={search} filterPokemon={filterPokemon} />
      <PokemonList pokemonArray={filteredPokemon} />
    </div>
  );
};

export default App;
