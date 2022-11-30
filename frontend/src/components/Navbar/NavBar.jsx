import { Link } from "react-router-dom";
import Style from "./style";

export default function NavBar() {
  return (
    <Style>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
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
