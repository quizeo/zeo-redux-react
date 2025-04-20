import React from "react";

import { useSelector, useDispatch } from "react-redux";
import Wrapper from "../assets/wrapper/cartCss";
import CartItem from "./CartItem";
import { openModal } from "../features/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { items, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <Wrapper>
        <header>
          <h2>Your Bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {items.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button onClick={() => dispatch(openModal())} className="btn clear-btn">
          clear cart
        </button>
      </footer>
    </Wrapper>
  );
};

export default CartContainer;
