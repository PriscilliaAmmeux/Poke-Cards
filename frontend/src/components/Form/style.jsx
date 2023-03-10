import styled from "styled-components";

export default styled.section`
  color: #f1f1f1;
  height: 100vh;
  width: auto;

  .form {
    background-color: #15172b;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    opacity: 0.7;
  }
  .titleForm {
    font-size: 3rem;
    text-align: center;
    color: #f1f1f1;
    margin-top: 5vh;
  }
  .btn-submit {
    width: max-content;
    display: inline-block;
    color: #f1f1f1;
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 2px solid white;
    border-radius: 10em;
    transition: all 400ms ease;
  }
  .btn-primary {
    background: #fa0a0a;
    color: #0f0e0e;
    font-weight: bold;
  }

  .label {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid white;
    margin: 2vh 0;
  }
  .submit {
    max-width: 20vw;
  }

  @media screen and (min-width: 851px) {
    .form {
      height: 50vh;
      width: 40vw;
      margin: 0 30vw;
    }
    .label {
      width: 15vw;
    }
  }
  @media screen and (max-width: 850px) {
    .titleForm {
      font-size: 2rem;
      text-align: center;
    }

    .form {
      height: 50vh;
      width: 80vw;
      margin: 0 10vw;
    }
    .label {
      width: 50vw;
    }
  }
`;
