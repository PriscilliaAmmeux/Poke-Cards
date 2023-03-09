import NavBar from "@components/Navbar/NavBar";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper";
/* eslint-disable import/no-unresolved */
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
/* eslint-disable import/no-unresolved */
import Style from "./style";

export default function Deck() {
  const [isActive] = useState("Deck");
  const [cards, setCards] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/pokemon`)
      .then(({ data }) => {
        setCards(data);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/users/1`)
      .then(({ data }) => {
        setUser(data);
      });
  }, []);

  return (
    <Style>
      <NavBar isActive={isActive} />
      <h1 className="pseudo-deck">Pseudo : {user.pseudo} </h1>
      <p className="wallet-deck">Wallet : {user.wallet} </p>
      <h2 className="title-deck">Your collection</h2>
      <ul className="list-deck">
        <Swiper
          slidesPerView={5}
          spaceBetween={8}
          pagination={{ clickable: true }}
          navigation
          modules={[FreeMode, Pagination, Navigation]}
          className="swiper"
        >
          {cards
            .filter((data) => {
              if (data.level < 8) {
                return true;
              }
              return false;
            })
            .map((data) => {
              return (
                <SwiperSlide key={data.id}>
                  <img
                    draggable="true"
                    className="displayDeck"
                    src={data.small_img}
                    alt={data.name}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </ul>
      <h2 className="title-deck">Your actuel deck</h2>
      <ul className="list-deck">
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
                  draggable="true"
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
