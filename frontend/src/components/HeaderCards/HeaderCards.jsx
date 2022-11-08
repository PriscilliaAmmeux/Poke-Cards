import image from "@assets/insect.png";
import Style from "./Style";

export default function HeaderCards() {
  return (
    <Style>
      <h1>Papillusion</h1>
      <div className="type">
        <h2>
          <span>PV:</span> 120
        </h2>
        <img src={image} alt="logo type pokemon" />
      </div>
    </Style>
  );
}
