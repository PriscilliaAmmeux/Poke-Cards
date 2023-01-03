import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@components/Card/Card";
import InputFilter from "@components/InputFilter/InputFilter";
import NavBar from "@components/Navbar/NavBar";
import TypesFilter from "@components/TypesFilter/TypesFilter";
import Style from "./style";

export default function Collection() {
  const [card, setCard] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [type, setType] = useState("");

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
              <li className="card" key={element.id}>
                <Card cardData={element} />
                <div className="purchase">
                  <p>
                    Price: <span>{element.price}</span>$
                  </p>
                  <Link to={`/carddetail/${element.id}`}>
                    <button type="button">More detail</button>
                  </Link>
                  <button type="submit">Add to cart</button>
                </div>
              </li>
            );
          })}
      </ul>
    </Style>
  );
}
