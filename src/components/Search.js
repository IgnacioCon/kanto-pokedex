import { useRef } from 'react';
import { useEffect } from 'react';

const Search = ({ search, filterPokemon }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type='text'
        value={search}
        onChange={(e) => filterPokemon(e.target.value)}
        placeholder='Pokemon'
      />
    </div>
  );
};

export default Search;
