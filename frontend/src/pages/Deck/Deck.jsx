import NavBar from "@components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Deck() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards/?results=3")
      .then(({ data }) => {
        setCards(data.data);
      });
  }, []);
  return (
    <Style>
      <NavBar />
      <h1>Pseudo : wallet </h1>
      <p>1600$</p>
      <h2>Your collection</h2>
      <ul>
        {cards
          .filter((data) => {
            if (data.name === "Bulbasaur" || data.name === "Arcanine") {
              return true;
            }
            return false;
          })
          .map((data) => {
            return (
              <li key={data.id}>
                <img
                  className="displayDeck"
                  src={data.images.small}
                  alt={data.images.small}
                />
              </li>
            );
          })}
      </ul>
      <h2>Your actuel deck</h2>
      <ul>
        {cards
          .filter((data) => {
            if (data.name === "Aerodactyl" || data.name === "Caterpie") {
              return true;
            }
            return false;
          })
          .map((data) => {
            return (
              <li key={data.id}>
                <img
                  className="displayDeck"
                  src={data.images.small}
                  alt={data.images.small}
                />
              </li>
            );
          })}
      </ul>
    </Style>
  );
}
