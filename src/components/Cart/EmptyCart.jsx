import React from "react";

export default function EmptyCart() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-10 mx-auto cart-text">
          <h3>Your Cart is currently empty</h3>
          <img
            src="img/shopping-cart.png"
            alt="empty"
            className="shopping-cart"
          />
        </div>
      </div>
    </div>
  );
}
