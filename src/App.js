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

    return await Promise.all(data.results.map((x) => fetchAllPokemon(x.url)));
  };

  const fetchAllPokemon = async (url) => {
    const req = await fetch(url);
    const pkmn = await req.json();
    const { id, name, height, weight, sprites, types } = pkmn;

    return { id, name, height, weight, sprites, types };
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
