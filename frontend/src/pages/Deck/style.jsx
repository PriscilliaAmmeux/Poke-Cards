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
    list-style: none;
    margin: 0.5rem;
  }
`;
