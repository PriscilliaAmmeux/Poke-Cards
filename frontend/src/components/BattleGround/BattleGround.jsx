import image from "@assets/Card1.png";
import image2 from "@assets/Card2.png";

import Style from "./style";

export default function BattleGround() {
  return (
    <Style>
      <label htmlFor="yourCard">
        Your Card
        <img src={image} alt="Aerodatyl card" />
      </label>
      <label htmlFor="botCard">
        Bot Card
        <img src={image2} alt="Weedle card" />
      </label>
    </Style>
  );
}
