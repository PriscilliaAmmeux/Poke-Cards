import styled from "styled-components";

export default styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .pokeball {
    animation: bounce 1.5s ease infinite;
    height: 30vh;
    width: auto;
    text-align: center;
    margin-top: 10rem;
  }
  .home-title {
    width: 80vw;
    height: auto;
  }
  .welcome {
    color: #f1f1f1;
    font-size: 2rem;
    margin: 2rem;
  }

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-150px);
    }
    60% {
      transform: translateY(-100px);
    }
    80% {
      transform: translateY(-50px);
    }
  }

  @media screen and (min-width: 601px) {
  }

  @media screen and (max-width: 600px) {
  }
`;
