import Style from "./style";

export default function PledgeCount() {
  return (
    <Style>
      <h2>Your Count</h2>
      <p>
        Your actual wallet: <span>xxxxxxxxx$</span>
      </p>
      <p>
        Count: <span>xxxxxxxx$</span>
      </p>
      <button type="button">Buy</button>
    </Style>
  );
}
