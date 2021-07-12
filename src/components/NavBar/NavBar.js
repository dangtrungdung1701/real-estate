import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import MenuIcon from "@material-ui/icons/Menu";
import DropDownMenu from "../dropDownMenu/DropDownMenu";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img
            src="https://www.prodesigns.com/backend/img/sliders/real-estate/1523883589-04.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="navbar__menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/rentals">Rentals</Link>
        <Link to="/contact">
          <Button content="Contact Us" />
        </Link>
      </div>

      <div
        className="navbar__menu-burger toggle"
        onClick={() => handleOpenMenu()}
      >
        <MenuIcon className="menu-icon" />
      </div>
      <DropDownMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}

export default NavBar;
