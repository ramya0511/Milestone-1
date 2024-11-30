import React from "react";

const Footer = ({ setCurrentPage }) => {
  return (
    <footer>
      <p>© 2024 Food Website. All rights reserved.</p>
      <ul>
        <li onClick={() => setCurrentPage("Menu")}>Menu</li>
        <li onClick={() => setCurrentPage("Contact")}>Contact</li>
        <li onClick={() => setCurrentPage("AboutUs")}>About Us</li>
      </ul>
    </footer>
  );
};

export default Footer;
