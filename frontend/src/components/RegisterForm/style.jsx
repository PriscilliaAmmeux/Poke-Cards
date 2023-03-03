import styled from "styled-components";
import image from "@assets/backgroundRegister.jpg";

export default styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem;
  .registerform {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 30%;
    padding: 5%;
    border: solid 1px black;
    border-radius: 1rem;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .signupTitle {
    padding-bottom: 1rem;
    font-size: 1.5rem;
  }
  .registerLabel {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .registerinput {
    padding: 0.5rem;
    margin: 2rem;
    background: none;
    border: 1px solid black;
    border-radius: 5em;
  }
  .registerSubmit {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5em;
    cursor: pointer;
    background: linear-gradient(#f1f1f1, red);
  }
`;
