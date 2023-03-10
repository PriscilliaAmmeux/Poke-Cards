import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineDatabase,
} from "react-icons/ai";
import { CgProfile, CgGames } from "react-icons/cg";
import Style from "./style";

export default function NavBar(isActive) {
  return (
    <Style>
      <ul className="navBar">
        <Link className="link" to="/">
          <li className={isActive === "Home" ? "activeStyle" : "item"}>
            <AiOutlineHome /> <span className="nav-mobile">Home</span>
          </li>
        </Link>
        <Link className="link" to="/deck">
          <li className={isActive === "Deck" ? "activeStyle" : "item"}>
            <CgProfile className="size-icon" />
            <span className="nav-mobile">My deck</span>
          </li>
        </Link>
        <Link className="link" to="/collection">
          <li className={isActive === "Collection" ? "activeStyle" : "item"}>
            <AiOutlineDatabase /> <span className="nav-mobile">Collection</span>
          </li>
        </Link>
        <Link className="link" to="/gamespage">
          <li className={isActive === "Play" ? "activeStyle" : "item"}>
            <CgGames /> <span className="nav-mobile">Play</span>
          </li>
        </Link>
        <Link className="link" to="/contact">
          <li className={isActive === "Contact" ? "activeStyle" : "item"}>
            <AiOutlineMail /> <span className="nav-mobile">Contact</span>
          </li>
        </Link>
      </ul>
    </Style>
  );
}
