import image from "@assets/papillusion.png";
import Info from "@components/Info/Info";
import Style from "./Style";

export default function Description() {
  return (
    <Style>
      <img src={image} alt="Pictures of papillusion" />
      <Info />
    </Style>
  );
}
