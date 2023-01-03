import styled from "styled-components";

export default styled.section`
  color: white;
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
      height: 70vh;
      padding: 10px;
      width: 50vw;
      opacity: 0.5;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 0 25%;
    }

    label {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 2rem 0;
    }

    .submit {
      max-width: 5vw;
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
