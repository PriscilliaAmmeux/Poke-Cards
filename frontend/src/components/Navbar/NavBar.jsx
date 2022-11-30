import { Link } from "react-router-dom";
import Style from "./style";

export default function NavBar() {
  return (
    <Style>
      <ul>
        <Link className="link" to="/">
          <li>Home</li>
        </Link>
        <Link className="link" to="/deck">
          <li>My Deck</li>
        </Link>
        <Link className="link" to="/collection">
          <li>Collection</li>
        </Link>
        <Link className="link" to="/gamespage">
          <li>Play</li>
        </Link>
        <Link className="link" to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </Style>
  );
}
