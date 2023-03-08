import styled from "styled-components";
import image from "@assets/games.png";

export default styled.section`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  color: white;
  label {
    display: flex;
    flex-direction: column;
    margin: 7rem 0;
  }
  img {
    width: 25vw;
    margin: 1rem 0;
  }
`;
