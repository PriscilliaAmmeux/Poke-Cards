import Card from "@components/Card/Card";
import Style from "./style";

export default function Bucket() {
  return (
    <Style>
      <h2>Your Bucket:</h2>
      <div className="actualBucket">
        <Card />
        <button type="button">Remove</button>
      </div>
    </Style>
  );
}
