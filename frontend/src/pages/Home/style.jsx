import styled from "styled-components";

export default styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  li {
    text-align: center;
    color: #fff;
    border-radius: 2rem;
    margin: 5rem;
    padding: 1rem;
    font-size: 1.5rem;
    background: linear-gradient(white, red);
  }
  .linkbtn {
    list-style: none;
    text-decoration: none;
  }
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
`;
