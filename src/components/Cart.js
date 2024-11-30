import React from "react";
import { useCart } from "./CartContext";  // Import the custom hook for cart context

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();  // Access cartItems and removeFromCart function

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        <div>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "300px", height: "300px", objectFit: "cover" }}
                />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
                <br/>
                <br/>
              </li>
            ))}
          </ul>
          <h2>Total: ₹{cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)), 0).toFixed(2)}</h2>
        </div>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </div>
  );
};

export default Cart;
