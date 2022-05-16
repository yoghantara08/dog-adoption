import React from "react";
import "./Navbar.css";
import NavbarMenu from "./NavbarMenu";
import NavbarSearch from "./NavbarSearch";

const Navbar = () => {
  return (
    <nav className="container">
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>
            <i className="fa-solid fa-paw"></i> PawsForYou
          </h2>
        </div>
        <NavbarMenu />
        <NavbarSearch />
      </div>
    </nav>
  );
};

export default Navbar;
