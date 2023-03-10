import styled from "styled-components";
import image from "@assets/games.png";

export default styled.section`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  color: #f1f1f1;
  height: 100vh;

  label {
    display: flex;
    margin: 3rem 0;
    font-size: 1.5rem;
  }
  img {
    width: 33vw;
    margin: 1vh 0;
  }

  @media (min-width: 851px) {
    label {
      flex-direction: column;
    }
  }

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    text-align: center;
    label {
      flex-direction: column;
    }
  }
`;
