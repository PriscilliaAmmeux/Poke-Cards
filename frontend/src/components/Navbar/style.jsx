import styled from "styled-components";

export default styled.nav`
  .navBar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 2rem;
    background-color: black;
  }
  .link {
    text-decoration: none;
    &:hover {
      font-weight: bold;
    }
  }
  .activeStyle {
    color: #f1f1f1;
  }
  .item {
    display: flex;
    justify-content: space-between;
    font-weight: bold;
    color: #fa0a0a;
    font-size: 1.5rem;
    cursor: pointer;
  }
  .item {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 850px) {
    .navBar {
      background-color: black;
      opacity: 0.9;
      border-radius: 0;
      padding: 0;
      border: 0;
      bottom: 0;
      gap: 0;
      position: fixed;
      height: 6vh;
      min-width: 97vw;
    }
    .nav-mobile {
      display: none;
    }
  }
  @media screen and (min-width: 851px) {
    .navBar {
      height: 4vh;
      opacity: 0.5;
      margin-bottom: 2vh;
    }
    .nav-mobile {
      font-size: 1.5rem;
    }
  }
`;
