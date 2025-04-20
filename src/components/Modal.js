import React from "react";
import Wrapper from "../assets/wrapper/modalCss";
import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal">
        <h4>Remove all items from your shopping cart?</h4>
        <div className="btn-container">
          <button
            onClick={() => {
              dispatch(clearCart());
              dispatch(closeModal());
              return;
            }}
            type="button"
            className="btn confirm-btn"
          >
            confirm
          </button>
          <button
            onClick={() => dispatch(closeModal())}
            type="button"
            className="btn clear-btn"
          >
            cancel
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Modal;
