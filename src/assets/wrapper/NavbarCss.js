import styled from "styled-components";

const Wrapper = styled.nav`
  background: var(--clr-primary);
  padding: 1.25rem 2rem;

  .loading {
    text-align: center;
    margin-top: 5rem;
  }

  .nav-center {
    max-width: var(--fixed-width);
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    margin-bottom: 0;
    letter-spacing: 1px;
    color: var(--clr-white);
  }
  .nav-container {
    display: block;
    position: relative;
  }
  svg {
    width: 40px;
    color: var(--clr-white);
  }
  .amount-container {
    position: absolute;
    top: -0.6rem;
    right: -0.6rem;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background: var(--clr-primary-light);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .total-amount {
    color: var(--clr-white);
    margin-bottom: 0;
    font-size: 1.25rem;
  }
`;

export default Wrapper;
