import styled from "styled-components";

export default styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

  h1,
  p {
    font-size: 0.75rem;
    color: #fff;
    padding-left: 1rem;
    font-family: "Press Start 2P", cursive;
  }

  h2 {
    color: #fff;
    font-size: 2rem;
    padding-left: 1rem;
    padding-top: 1rem;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .displayDeck {
    margin: 0.5rem;
  }
  .my_free_swiper {
    width: 95vw;
    .swiper-button-next {
      color: #ff2415;
      right: 2%;
    }
    .swiper-button-prev {
      color: #ff2415;

      left: 2%;
    }
  }
`;
