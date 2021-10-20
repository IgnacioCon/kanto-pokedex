import Title from './Title';
import Search from './Search';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <Title />
      <Search />
    </div>
  );
};

export default Header;
