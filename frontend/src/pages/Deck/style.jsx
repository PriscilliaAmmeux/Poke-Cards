import styled from "styled-components";

export default styled.section`
  .pseudo-deck,
  .wallet-deck {
    font-size: 1rem;
    color: #fff;
    padding-left: 1rem;
  }

  .title-deck {
    color: #fff;
    font-size: 2rem;
    padding-left: 1rem;
    padding-top: 1rem;
    align-items: center;
  }

  .list-deck {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .displayDeck {
    margin: 0.5rem;
    cursor: move;
  }
  .swiper {
    width: 90vw;
    .swiper-button-next {
      color: #ff2415;
      right: 1%;
    }
    .swiper-button-prev {
      color: #ff2415;
      left: 2%;
    }
  }
`;
