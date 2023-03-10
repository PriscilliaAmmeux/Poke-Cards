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

export default function MyCollection() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/pokemon`)
      .then(({ data }) => {
        setCards(data);
      });
  }, []);

  return (
    <Style>
      <h2 className="title-deck">Your collection</h2>
      <ul className="list-deck">
        <Swiper
          slidesPerView={5}
          spaceBetween={8}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            851: {
              slidesPerView: 5,
            },
          }}
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
    </Style>
  );
}
