import Title from './Title';
import Search from './Search';
import './Header.css';

const Header = ({ search, filterPokemon }) => {
  return (
    <div className='header-container'>
      <Title />
      <Search search={search} filterPokemon={filterPokemon} />
    </div>
  );
};

export default Header;
