import styled from "styled-components";

export default styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0;
  }

  .submit {
    max-width: 5vw;
  }
`;
