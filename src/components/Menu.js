import React from "react";
import { useCart } from "./CartContext";  // Import the custom hook for cart context

const Menu = () => {
  const { addToCart } = useCart();  // Access the addToCart function

  const menuItems = [
    {
      id: 1,
      name: "Pizza",
      description: "Delicious cheese pizza with fresh toppings.",
      price: "₹150",
      image: "https://cdn.loveandlemons.com/wp-content/uploads/2023/02/vegetarian-pizza-500x500.jpg", // Example image path
    },
    {
      id: 2,
      name: "Burger",
      description: "Juicy burger with a beef patty and fresh veggies.",
      price: "₹200",
      image: "https://img.freepik.com/free-photo/grilled-gourmet-burger-with-cheese-tomato-onion-french-fries-generated-by-artificial-intelligence_25030-63181.jpg", // Example image path
    },
    {
      id: 3,
      name: "Ice Cream",
      description: "Creamy ice cream.",
      price: "₹90",
      image: "https://static.toiimg.com/thumb/msid-112019658,width-1280,height-720,resizemode-4/112019658.jpg", // Example image path
    },
  ];

  return (
    <div>
      <h1>Our Menu</h1>
      <div className="menu-items">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-item">
            <img
              src={item.image}
              alt={item.name}
              className="menu-image"
              style={{ width: "300px", height: "300px", objectFit: "cover" }}
            />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            <br/>
            <br/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
