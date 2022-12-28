import PropTypes from "prop-types";

export default function Card({ cardData }) {
  return <img src={cardData.small_img} alt={cardData.name} />;
}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    small_img: PropTypes.string.isRequired,
  }).isRequired,
};
