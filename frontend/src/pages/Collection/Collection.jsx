import Card from "@components/Card/Card";
import InputFilter from "@components/InputFilter/InputFilter";
import NavBar from "@components/Navbar/NavBar";
import TypesFilter from "@components/TypesFilter/TypesFilter";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Collection() {
  const [card, setCard] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios.get("https://api.pokemontcg.io/v2/cards").then(({ data }) => {
      setCard(data.data);
    });
  }, []);

  return (
    <Style>
      <NavBar />
      <section>
        <TypesFilter />
        <InputFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </section>
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
