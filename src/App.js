import Header from './components/Header';
import PokemonList from './components/PokemonList';

const App = () => {
  return (
    <div>
      <Header />
      <section className='container'>
        <PokemonList />
      </section>
    </div>
  );
};

export default App;
