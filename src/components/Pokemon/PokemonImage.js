import './PokemonCard.css';

const PokemonImage = ({ image, name }) => {
  const { other } = image;
  const pkmnImg = Object.entries(other)[0][1];

  return <img className='pokemon-img' src={pkmnImg.front_default} alt={name} />;
};

export default PokemonImage;
