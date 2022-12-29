import image from "@assets/Card1.png";
import Style from "./style";

export default function Card() {
  return (
    <Style>
      <img className="cardImage" src={image} alt="pledge card" />
      <div className="parmeter">
        <p className="cardPrice">Price: 150$</p>
      </div>
    </Style>
  );
}
