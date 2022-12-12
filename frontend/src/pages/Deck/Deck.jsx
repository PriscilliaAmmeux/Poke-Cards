import NavBar from "@components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Deck() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.pokemontcg.io/v2/cards/?results=5")
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
        {cards.map((data) => {
          return (
            <li key={data.id}>
              <img src={data.images.small} alt={data.images.small} />
            </li>
          );
        })}
      </ul>
      <h3>Your actuel deck</h3>
    </Style>
  );
}
