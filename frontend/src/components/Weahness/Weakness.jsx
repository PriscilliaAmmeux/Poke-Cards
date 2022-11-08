import image from "@assets/fire.png";
import Style from "./Style";

export default function Weakness() {
  return (
    <Style>
      <p>Weakness:</p>
      <img src={image} alt="" />
    </Style>
  );
}
