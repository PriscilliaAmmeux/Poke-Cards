import Card from "@components/Card/Card";
import NavBar from "@components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Collection() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards").then(({ data }) => {
      setCard(data.data);
    });
  }, []);
  return (
    <Style>
      <NavBar />
      <ul>
        {card.map((element) => {
          return (
            <li key={element.id}>
              <Card cardData={element} />
            </li>
          );
        })}
      </ul>
    </Style>
  );
}
