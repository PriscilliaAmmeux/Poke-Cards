import styled from "styled-components";

export default styled.section`
  background-color: yellowgreen;
  .menuContainer {
    display: none;
  }
  @media (max-width: 600px) {
    .hamburger {
      color: #f1f1f1;
      list-style: none;
      text-decoration: none;
      cursor: pointer;
    }
    .nav-list-burger {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      right: 0;
      height: 15rem;
      width: auto;
    }
    .nav-item-burger {
      cursor: pointer;
      height: 100%;
      transition: 0.4s;
      color: #f1f1f1;
      font-size: 1rem;
    }

    .menuContainer {
      display: flex;
      position: relative;
      z-index: 3;
      justify-content: flex-end;
      margin-top: 1rem;
      margin-right: 3rem;
    }

    .menuContent {
      position: absolute;
      top: 100%;
      transition: 0.3s all ease-in-out;
      left: 50%;
      width: 100vw;
      aspect-ratio: 1;
    }

    .menuContent.open {
      left: -600%;
      opacity: 1;
    }
    .menuContent.closed {
      opacity: 0;
    }
    .nav-links-burger {
      text-decoration: none;
    }
  }
`;
