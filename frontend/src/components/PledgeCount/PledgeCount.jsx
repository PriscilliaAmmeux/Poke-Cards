import axios from "axios";
import PropTypes from "prop-types";
import Style from "./style";

export default function PledgeCount({ user, purchaseValue }) {
  const handleClick = () => {
    axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/users/${user.id}`, {
      ...user,
      wallet: user.wallet - purchaseValue,
    });
  };
  return (
    <Style>
      <h2>Your Count</h2>
      <p>
        Your actual wallet: <span>{user.wallet}$</span>
      </p>
      <p>
        Purchase amount: <span>{purchaseValue}$</span>
      </p>
      <p>
        Count: <span>{user.wallet - purchaseValue}$</span>
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
};
