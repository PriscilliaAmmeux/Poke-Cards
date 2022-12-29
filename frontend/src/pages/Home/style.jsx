import styled from "styled-components";

export default styled.section`
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
  height: 100vh;
  display: flex;
  justify-content: right;

  .pokeball {
    height: 20rem;
    width: 20rem;
    animation: bounce 1.5s ease infinite;
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

  .title {
    font-family: "Press Start 2P", cursive;
    font-size: 2rem;
    justify-content: center;
    color: #f1f1f1;
    margin-bottom: 10rem;
  }

  @media screen and (min-width: 601px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 80%;
    }
    li {
      text-align: center;
      color: #f1f1f1;
      border-radius: 2rem;
      margin: 5rem;
      padding: 1rem;
      font-size: 1.5rem;
      background: linear-gradient(white, red);
      padding: 10px 30px;
    }
    li.deck:hover,
    li.collec:hover,
    li.play:hover,
    li.contact:hover {
      padding: 10px 50px;
    }
    .linkbtn {
      list-style: none;
      text-decoration: none;
    }
    .burgerMenu {
      display: none;
    }
  }

  @media screen and (max-width: 600px) {
    .navBar {
      display: none;
    }
    .pokeball {
      height: 10rem;
      width: 10rem;
      text-align: center;
      margin: 20rem 5rem;
      display: flex;
    }
  }
`;
