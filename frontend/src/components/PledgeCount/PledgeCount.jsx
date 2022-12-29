import PropTypes from "prop-types";
import Style from "./style";

export default function PledgeCount({
  user,
  purchaseValue,
  wallet,
  setWallet,
}) {
  const handleClick = () => {
    setWallet(user - purchaseValue);
  };
  return (
    <Style>
      <h2>Your Count</h2>
      <p>
        Your actual wallet: <span>{user}$</span>
      </p>
      <p>
        Purchase amount: <span>{purchaseValue}$</span>
      </p>
      <p>
        Count: <span>{wallet}$</span>
      </p>
      <button type="button" onClick={handleClick}>
        Buy
      </button>
    </Style>
  );
}

PledgeCount.propTypes = {
  user: PropTypes.number.isRequired,
  purchaseValue: PropTypes.number.isRequired,
  wallet: PropTypes.number.isRequired,
  setWallet: PropTypes.number.isRequired,
};
