import PropTypes from "prop-types";
import Style from "./style";

export default function PokeDetail({ pokeData }) {
  return (
    <Style>
      <article className="left">
        <img
          className="pokecard"
          src={pokeData.large_img}
          alt={pokeData.name}
        />
      </article>
      <article className="right">
        <h2 className="pokename">{pokeData.name}</h2>
        <p>Type: Electric</p>
      </article>
    </Style>
  );
}

PokeDetail.propTypes = {
  pokeData: PropTypes.shape({
    large_img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};
