import NavBar from "@components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Deck() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards/?results=10")
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
        {cards.map((element) => {
          return (
            <li key={element.id}>
              <img src={element.images.small} alt={element.images.small} />
            </li>
          );
        })}
      </ul>
      <h3>Your actuel deck</h3>
    </Style>
  );
}
