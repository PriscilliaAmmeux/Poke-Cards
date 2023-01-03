import styled from "styled-components";

export default styled.section`
  display: flex;
  flex-direction: row;
  height: 90vh;

  .left,
  .right {
    margin: 2rem;
    width: 50vw;
  }

  .pokecard {
    height: 80vh;
  }

  .pokename {
    font-size: 1.5rem;
    padding: 1rem 0;
  }
`;
