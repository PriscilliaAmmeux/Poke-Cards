import NavBar from "@components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Deck() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/pokemon").then(({ data }) => {
      setCards(data);
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
            if (data.level < 8) {
              return true;
            }
            return false;
          })
          .map((data) => {
            return (
              <li key={data.id}>
                <img
                  className="displayDeck"
                  src={data.small_img}
                  alt={data.name}
                />
              </li>
            );
          })}
      </ul>
      <h2>Your actuel deck</h2>
      <ul>
        {cards
          .filter((data) => {
            if (
              data.name === "Buizel" ||
              data.name === "Combee" ||
              data.name === "Magnemite" ||
              data.name === "Chingling" ||
              data.name === "Starly"
            ) {
              return true;
            }
            return false;
          })
          .map((data) => {
            return (
              <li key={data.id}>
                <img
                  className="displayDeck"
                  src={data.small_img}
                  alt={data.name}
                />
              </li>
            );
          })}
      </ul>
    </Style>
  );
}
