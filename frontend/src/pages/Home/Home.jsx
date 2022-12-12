import { Link } from "react-router-dom";
import pokeball from "@assets/pokeball.png";
import Style from "./style";

export default function Home() {
  return (
    <Style>
      <ul>
        <div className="right">
          <Link className="linkbtn" to="/deck">
            <li>My Deck</li>
          </Link>
          <Link className="linkbtn" to="/collection">
            <li>Collection</li>
          </Link>
        </div>
        <img className="pokeball" src={pokeball} alt="Pokeball" />
        <div className="left">
          <Link className="linkbtn" to="/gamesPages">
            <li>Play</li>
          </Link>
          <Link className="linkbtn" to="/contact">
            <li>Contact</li>
          </Link>
        </div>
      </ul>
    </Style>
  );
}
