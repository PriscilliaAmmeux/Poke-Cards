import styled from "styled-components";

export default styled.section`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 0.5rem;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
  }
`;
