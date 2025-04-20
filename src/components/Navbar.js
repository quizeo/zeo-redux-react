import { CartIcon } from "../icons";
import { useSelector } from "react-redux";
import Wrapper from "../assets/wrapper/NavbarCss";

import React from "react";

const Navbar = () => {
  const { amount } = useSelector((store) => store.cart);

  return (
    <Wrapper>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />

          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
