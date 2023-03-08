import { Link } from "react-router-dom";
import Style from "./style";

export default function NavBar(isActive) {
  return (
    <Style>
      <ul className="navBar">
        <Link className="link" to="/">
          <li className={isActive === "Home" ? "activeStyle" : "item"}>Home</li>
        </Link>
        <Link className="link" to="/deck">
          <li
            className={isActive === "Deck" ? "activeStyle" : "item"}
            to="/deck"
          >
            My Deck
          </li>
        </Link>
        <Link className="link" to="/collection">
          <li className={isActive === "Collection" ? "activeStyle" : "item"}>
            Collection
          </li>
        </Link>
        <Link className="link" to="/gamespage">
          <li className={isActive === "Play" ? "activeStyle" : "item"}>Play</li>
        </Link>
        <Link className="link" to="/contact">
          <li className={isActive === "Contact" ? "activeStyle" : "item"}>
            Contact
          </li>
        </Link>
      </ul>
    </Style>
  );
}
