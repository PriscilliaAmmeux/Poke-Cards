import PropTypes from "prop-types";

export default function Card({ cardData }) {
  return <img src={cardData.images.small} alt={cardData.name} />;
}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    images: PropTypes.shape({
      small: PropTypes.string.isRequired,
    }),
  }).isRequired,
};
