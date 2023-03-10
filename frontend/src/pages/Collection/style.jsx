import styled from "styled-components";

export default styled.section`
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
  .price-collection {
    color: #f1f1f1;
    font-weight: bold;
  }
  .card-collection {
    list-style: none;
    margin: 0.5rem;
  }

  section {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0 2rem;
  }

  .purchase-collection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  .btn-submit {
    width: max-content;
    display: inline-block;
    color: #eee;
    padding: 0.75rem 1rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid white;
    border-radius: 10em;
    transition: all 400ms ease;
    opacity: 0.7;
  }
  .btn-primary {
    background: #fa0a0a;
    color: black;
    font-weight: bold;
  }

  @media (max-width: 850px) {
    .filter {
      flex-direction: column;
    }
  }
`;
