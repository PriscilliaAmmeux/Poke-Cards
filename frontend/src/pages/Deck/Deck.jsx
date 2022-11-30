import NavBar from "@components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Deck() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards").then(({ data }) => {
      setCard(data.data);
    });
  }, []);
  return (
    <Style>
      <NavBar />
      <h1>Pseudo : wallet </h1>
      <p>1600$</p>
      <h2>Your collection</h2>
      <ul>
        {card
          .filter((element) => {
            if (element.level <= 50) {
              return true;
            }
            return false;
          })
          .map((element) => {
            return <li key={element.id}> {element.images.small}</li>;
          })}
      </ul>
      <h3>Your actuel deck</h3>
    </Style>
  );
}
