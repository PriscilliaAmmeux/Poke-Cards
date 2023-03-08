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
  .activeStyle {
    font-size: 1.2rem;
  }
  .item {
    font-weight: bold;
    color: #f1f1f1;
    cursor: pointer;
    font-size: 1rem;
    &:hover {
      font-size: 1.2rem;
    }
  }
`;
