import { Link } from "react-router-dom";
import pokeball from "@assets/pokeball.png";
import pokeCardsGames from "@assets/pokeCardsGames.png";

import BurgerMenu from "@components/BurgerMenu/BurgerMenu";
import Style from "./style";

export default function Home() {
  return (
    <Style>
      <img className="title" src={pokeCardsGames} alt="Poke Cards Games" />
      <div className="navBar">
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
      </div>
      <div className="burgerMenu">
        <BurgerMenu />
        <img className="pokeball" src={pokeball} alt="Pokeball" />
      </div>
    </Style>
  );
}
