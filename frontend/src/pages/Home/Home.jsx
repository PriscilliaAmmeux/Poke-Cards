import { Link } from "react-router-dom";
import background from "@assets/background.jpg";
import Style from "./style";

export default function Home() {
  return (
    <Style>
      <img src={background} alt="background home" />
      <ul>
        <Link to="/deck">
          <li>My Deck</li>
        </Link>
        <Link to="/collection">
          <li>Collection</li>
        </Link>
        <Link to="/gamesPages">
          <li>Play</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </Style>
  );
}
