import styled from "styled-components";

export default styled.nav`
  ul {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 2rem;
  }
  li > a {
    font-weight: bold;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
  }
  li {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1rem;
  }
`;
