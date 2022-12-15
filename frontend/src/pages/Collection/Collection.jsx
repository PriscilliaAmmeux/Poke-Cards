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
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/pokemon").then(({ data }) => {
      setCard(data);
    });
  }, []);
  return (
    <Style>
      <NavBar />
      <section>
        <TypesFilter filter={filter} setFilter={setFilter} />
        <InputFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </section>
      <ul>
        {card
          .filter((element) => {
            if (filter !== "") {
              if (element.types === filter) {
                return true;
              }
              return false;
            }
            return true;
          })
          .filter((element) => {
            if (searchValue !== "") {
              if (element.name === searchValue) {
                return true;
              }
              return false;
            }
            return true;
          })
          .map((element) => {
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
