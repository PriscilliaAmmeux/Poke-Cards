import Cards from "@components/Cards/Cards";
import InputFilter from "@components/InputFilter/InputFilter";
import NavBar from "@components/Navbar/NavBar";
import TypesFilter from "@components/TypesFilter/TypesFilter";
import axios from "axios";
import { useEffect, useState } from "react";
import Style from "./style";

export default function Collection() {
  const [card, setCard] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("");
  const [isBuy, setIsBuy] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/pokemon`)
      .then(({ data }) => {
        setCard(data);
      });
  }, []);
  return (
    <Style>
      <NavBar />
      <section className="filter">
        <TypesFilter setType={setType} />
        <InputFilter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </section>
      <ul>
        {card
          .filter((element) => {
            if (type !== "") {
              if (element.type === type) {
                return true;
              }
              return false;
            }
            return true;
          })
          .filter((element) => {
            if (searchValue !== "") {
              if (element.name.includes(searchValue)) {
                return true;
              }
              return false;
            }
            return true;
          })
          .map((element) => {
            return (
              <li key={element.id}>
                <Cards cardData={element} isBuy={isBuy} setIsBuy={setIsBuy} />
              </li>
            );
          })}
      </ul>
    </Style>
  );
}
