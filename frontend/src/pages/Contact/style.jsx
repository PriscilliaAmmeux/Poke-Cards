import styled from "styled-components";

export default styled.section`
  color: eee;
  height: 100vh;
  width: 100vw;

  @media screen and (min-width: 601px) {
    .titleForm {
      margin: auto;
      font-size: 3rem;
      text-align: center;
      color: #eee;
      font-weight: 600;
      margin-top: 30px;
    }

    .form {
      background-color: #15172b;
      border-radius: 20px;
      box-sizing: border-box;
      height: 60vh;
      width: 40vw;
      opacity: 0.7;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 30vw;
    }

    .label {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 1rem 0;
      width: 15vw;
      border: 2px solid white;
    }

    .btn-submit {
      width: max-content;
      display: inline-block;
      color: #eee;
      padding: 0.75rem 1.2rem;
      border-radius: 0.4rem;
      cursor: pointer;
      border: 2px solid white;
      border-radius: 10em;
      transition: all 400ms ease;
    }
    .btn-primary {
      background: #fa0a0a;
      color: black;
      font-weight: bold;
    }
  }
  @media screen and (max-width: 600px) {
    .titleForm {
      font-size: 2rem;
      text-align: center;
      color: #eee;
      font-weight: 600;
      margin-top: 30px;
    }

    .form {
      background-color: #15172b;
      border-radius: 20px;
      box-sizing: border-box;
      height: 70vh;
      padding: 10px;
      width: 80vw;
      opacity: 0.5;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      margin: 0 10%;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0;
    }

    .submit {
      max-width: 20vw;
    }
  }
`;
