import React from "react";
import { useCart } from "../context/Cart";

const Cart = () => {
  const cart = useCart();
  return (
    <div className="cart">
      <h1>Cart</h1>
      {cart.items.length !== 0 ? (
        cart.items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))
      ) : (
        <>
          <p>No items in cart</p>
        </>
      )}

      <h5>
        {cart.items.length !== 0 ? (<>Total: $
                  {cart.items.reduce((total, item) => (total += item.price), 0)}
          </>) : (
          <>
            <p>$0</p>
          </>
        )}
      </h5>
    </div>
  );
};

export default Cart;
