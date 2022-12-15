import { Link } from "react-router-dom";
import pokeball from "@assets/pokeball.png";
import Style from "./style";

export default function Home() {
  return (
    <Style>
      <h1 className="title">Pokecard Games</h1>
      <ul>
        <div className="right">
          <Link className="linkbtn" to="/deck">
            <li className="deck">My Deck</li>
          </Link>
          <Link className="linkbtn" to="/collection">
            <li className="collec">Collection</li>
          </Link>
        </div>
        <img className="pokeball" src={pokeball} alt="Pokeball" />
        <div className="left">
          <Link className="linkbtn" to="/gamesPage">
            <li className="play">Play</li>
          </Link>
          <Link className="linkbtn" to="/contact">
            <li className="contact">Contact</li>
          </Link>
        </div>
      </ul>
    </Style>
  );
}
