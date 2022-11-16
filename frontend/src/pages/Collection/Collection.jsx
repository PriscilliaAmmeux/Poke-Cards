import Card from "@components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Collection() {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards").then(({ data }) => {
      setCard(data.data);
    });
  }, []);
  return (
    <ul>
      {card.map((element) => {
        return (
          <li key={element.id}>
            <Card cardData={element} />
          </li>
        );
      })}
    </ul>
  );
}
