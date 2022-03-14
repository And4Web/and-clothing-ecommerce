import React from "react";
import "./cart-dropdown.styles.scss";
import CustomButton from "../../components/custom-button/custom-button.component";

const CartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>Go to Checkout</CustomButton>
  </div>
);
export default CartDropdown;