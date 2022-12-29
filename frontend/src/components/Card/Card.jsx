import PropTypes from "prop-types";
import Style from "./style";

export default function Card({ cardData, isBuy, setIsBuy }) {
  const handleClick = () => {
    setIsBuy(true);
  };
  return (
    <Style>
      <img src={cardData.small_img} alt={cardData.name} />
      <div className="pledgeStore">
        <p>Price: {cardData.price} $</p>
        <button className="buyButton" type="button" onClick={handleClick}>
          {isBuy ? "Already buy" : "Buy"}
        </button>
      </div>
    </Style>
  );
}

Card.propTypes = {
  cardData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    small_img: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  isBuy: PropTypes.string.isRequired,
  setIsBuy: PropTypes.string.isRequired,
};
