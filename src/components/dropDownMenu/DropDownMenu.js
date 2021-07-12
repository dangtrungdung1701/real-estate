import React, { useRef, useEffect } from "react";
import "./dropdownmenu.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import CloseIcon from "@material-ui/icons/Close";

function DropDownMenu({ isOpen, setIsOpen }) {
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className={`dropdown-menu ${isOpen ? "expand" : ""}`}>
      <div className="dropdown-close">
        <CloseIcon className="close-icon" onClick={() => handleCloseMenu()} />
      </div>
      <div className="dropdown-item">
        <Link className="active" to="/" onClick={() => handleCloseMenu()}>
          Home
        </Link>
        <Link to="/about" onClick={() => handleCloseMenu()}>
          About
        </Link>
        <Link to="/rentals" onClick={() => handleCloseMenu()}>
          Rentals
        </Link>
        <Link to="/contact" onClick={() => handleCloseMenu()}>
          <Button
            content="Contact Us"
            bgColor="--secondary-btn-color"
            bgHoverColor="--secondary-btn-hover-color"
          />
        </Link>
      </div>
    </div>
  );
}

export default DropDownMenu;
