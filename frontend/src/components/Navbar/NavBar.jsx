import { Link } from "react-router-dom";
import Style from "./style";

export default function NavBar() {
  return (
    <Style>
      <ul className="navBar">
        <Link className="link" to="/">
          <li className="item">Home</li>
        </Link>
        <Link className="link" to="/deck">
          <li className="item">My Deck</li>
        </Link>
        <Link className="link" to="/collection">
          <li className="item">Collection</li>
        </Link>
        <Link className="link" to="/gamespage">
          <li className="item">Play</li>
        </Link>
        <Link className="link" to="/contact">
          <li className="item">Contact</li>
        </Link>
      </ul>
    </Style>
  );
}
