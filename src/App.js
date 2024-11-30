import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Feedback from "./components/Feedback";
import SignUpLogin from "./components/SignUpLogin";
import { CartProvider } from "./components/CartContext"; // Import CartProvider

const App = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  // Function to render the current page dynamically based on the state
  const renderPage = () => {
    switch (currentPage) {
      case "Home":
        return <Home />;
      case "Menu":
        return <Menu />;
      case "AboutUs":
        return <AboutUs />;
      case "Contact":
        return <Contact />;
      case "Cart":
        return <Cart />;
      case "Feedback":
        return <Feedback />;
      case "SignUpLogin":
        return <SignUpLogin />;
      default:
        return <Home />;
    }
  };

  return (
    // Wrap everything inside CartProvider to share the cart state globally
    <CartProvider>
      <div>
        <Header setCurrentPage={setCurrentPage} />
        <main>{renderPage()}</main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </CartProvider>
  );
};

export default App;
