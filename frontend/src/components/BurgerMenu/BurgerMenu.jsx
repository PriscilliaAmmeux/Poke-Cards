import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./style";

export default function BurgerMenu() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <Style>
      <div className="menuContainer">
        <div
          className="hamburger"
          role="button"
          onClick={handleClick}
          onKeyDown={handleClick}
          tabIndex={0}
        >
          {click ? (
            <FaTimes size={30} style={{ color: "#f1f1f1" }} />
          ) : (
            <FaBars size={30} styles={{ color: " #f1f1f1" }} />
          )}
        </div>
        <nav className={`menuContent ${click ? "open" : "closed"}`}>
          <ul className="nav-list-burger">
            <Link className="nav-links-burger" to="/deck">
              <li className="nav-item-burger">My deck</li>
            </Link>
            <Link className="nav-links-burger" to="/collection ">
              <li className="nav-item-burger">Collection</li>
            </Link>
            <Link className="nav-links-burger" to="/gamesPage">
              <li className="nav-item-burger">Play</li>
            </Link>
            <Link className="nav-links-burger" to="/contact">
              <li className="nav-item-burger">Contact</li>
            </Link>
          </ul>
        </nav>
      </div>
    </Style>
  );
}
