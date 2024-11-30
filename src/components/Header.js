import React from "react";

const Header = ({ setCurrentPage }) => {
  return (
    <header>
      <nav>
        <ul>
          <li onClick={() => setCurrentPage("Home")}>Home</li>
          <li onClick={() => setCurrentPage("Menu")}>Menu</li>
          <li onClick={() => setCurrentPage("AboutUs")}>About Us</li>
          <li onClick={() => setCurrentPage("Contact")}>Contact</li>
          <li onClick={() => setCurrentPage("Cart")}>Cart</li>
          <li onClick={() => setCurrentPage("Feedback")}>Feedback</li>
          <li onClick={() => setCurrentPage("SignUpLogin")}>Sign Up/Login</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
