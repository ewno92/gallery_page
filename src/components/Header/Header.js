import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";
import logo from "./logo.png";

const Header = () => {
  return (
    <div className="header">
      {/* <AccountCircle /> */}
      {/* <AccountCircleIcon /> */}
      <IconButton>
        <a href="https://google.com">
          <AccountCircleIcon fontSize="Large" />
        </a>
      </IconButton>

      <div className="">
        <a href="https://google.com">
          <img className="header_logo" src={logo} alt="photo" />
        </a>
      </div>

      <IconButton>
        <a href="https://google.com">
          <MenuIcon fontSize="large" />
        </a>
      </IconButton>
    </div>
  );
};

export default Header;
