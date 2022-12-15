import styled from "styled-components";

export default styled.nav`
  .navBar {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2rem;
  }
  .link {
    text-decoration: none;
  }
  .item {
    font-weight: bold;
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
    font-size: 1rem;
  }
`;
