import styled from "styled-components";

export default styled.section`
  display: flex;
  li {
    color: #fff;
    display: flex;
    flex-wrap: wrap;
    border: 1px #fff dotted;
    border-radius: 2rem;
    margin: 5rem;
    padding: 1rem;
    list-style: none;
  }
  img {
    position: relative;
    z-index: -1;
    width: 100vh;
    height: 100vh;
  }
`;
