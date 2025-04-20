import styled from "styled-components";

const Wrapper = styled.article`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;

  img {
    width: 5rem;
    height: 5rem;
    object-fit: cover;
  }
  h4 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    letter-spacing: 2px;
  }
  .item-price {
    color: var(--clr-grey-5);
  }
  .remove-btn {
    color: var(--clr-primary);
    letter-spacing: var(--spacing);
    cursor: pointer;
    font-size: 0.85rem;
    background: transparent;
    border: none;
    margin-top: 0.375rem;
    transition: var(--transition);
  }
  .remove-btn:hover {
    color: var(--clr-primary-light);
  }
  .amount-btn {
    width: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
  }
  .amount-btn svg {
    color: var(--clr-primary);
  }
  .amount-btn:hover svg {
    color: var(--clr-primary-light);
  }
  .amount {
    text-align: center;
    margin-bottom: 0;
    font-size: 1.25rem;
    line-height: 1;
  }
  hr {
    background: var(--clr-grey-5);
    border-color: transparent;
    border-width: 0.25px;
  }
`;

export default Wrapper;
