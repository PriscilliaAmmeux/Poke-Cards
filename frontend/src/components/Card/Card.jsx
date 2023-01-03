import PropTypes from "prop-types";
import Style from "./style";

export default function Card({ cardData }) {
  return (
    <Style>
      <img className="cardImage" src={cardData.small_img} alt={cardData.name} />
    </Style>
  );
}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    small_img: PropTypes.string.isRequired,
  }).isRequired,
};
