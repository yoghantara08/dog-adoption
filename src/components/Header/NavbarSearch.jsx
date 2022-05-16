import React from "react";
import Button from "../UI/Button";
import "./NavbarSearch.css";

const NavbarSearch = () => {
  return (
    <div className="navbar-search">
      <i class="fa-solid fa-magnifying-glass"></i>
      <Button className="btn-primary">Sign Up</Button>
    </div>
  );
};

export default NavbarSearch;
