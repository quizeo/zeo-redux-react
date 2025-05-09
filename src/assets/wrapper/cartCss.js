import styled from "styled-components";

const Wrapper = styled.section`
  min-height: calc(100vh - 120px);
  width: 90vw;
  margin: 0 auto;
  margin-top: 40px;
  padding: 2.5rem 0;
  max-width: var(--fixed-width);

  h2 {
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 3rem;
  }
  .empty-cart {
    text-transform: lowercase;
    color: var(--clr-grey-5);
    margin-top: 1rem;
    text-align: center;
  }
  footer {
    margin-top: 4rem;
    text-align: center;
  }
  .cart-total h4 {
    text-transform: capitalize;
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
  }
  .clear-btn,
  .confirm-btn {
    background: transparent;
    padding: 0.5rem 1rem;
    color: var(--clr-red-dark);
    border: 1px solid var(--clr-red-dark);
    margin-top: 2.25rem;
    border-radius: var(--radius);
  }
  .clear-btn:hover {
    background: var(--clr-red-light);
    color: var(--clr-red-dark);
    border-color: var(--clr-red-light);
  }
  .confirm-btn {
    border-color: var(--clr-primary);
    color: var(--clr-primary);
  }
`;

export default Wrapper;
