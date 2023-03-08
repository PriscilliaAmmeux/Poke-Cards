import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  border-radius: 5rem;
  margin: auto;
  padding: 1rem;
  .connectLabel {
    margin: 1rem;
  }
  .connectInput {
    border-radius: 5em;
    border: 1px solid black;
    margin: 0 0.5rem;
    padding: 0.33rem;
    background: none;
  }
  .connectSubmit {
    padding: 0.5rem;
    border: none;
    border-radius: 2rem;
    background: linear-gradient(#f1f1f1, red);
  }
`;
