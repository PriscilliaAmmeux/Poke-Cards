import styled from "styled-components";

export default styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;

  .filter {
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
  }

  .filterradio {
    height: 3rem;
    width: 3rem;
  }
`;
