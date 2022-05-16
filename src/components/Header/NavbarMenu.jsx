import React from "react";
import "./NavbarMenu.css";

const NavbarMenu = () => {
  return (
    <ul className="nav-menu">
      <li className="nav-item">
        <a href="/">Find A Dog</a>
      </li>
      <li className="nav-item">
        <a href="/">Adoption</a>
      </li>
      <li className="nav-item">
        <a href="/">Dog Essentials</a>
      </li>
      <li className="nav-item">
        <a href="/">Dog Care</a>
      </li>
    </ul>
  );
};

export default NavbarMenu;
