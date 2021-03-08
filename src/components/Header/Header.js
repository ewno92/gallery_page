import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import "./../style/Header.css";

const Header = () => {
  return (
    <div className="header">
      {/* <AccountCircle /> */}
      {/* <AccountCircleIcon /> */}
      <div className="btn">
        <IconButton>
          <a href="https://google.com">
            <AccountCircleIcon fontSize="large" />
          </a>
        </IconButton>
      </div>

      <div className="logo">
        <a href="https://google.com">
          <b>logo</b>
        </a>
      </div>

      <div className="btn">
        <IconButton>
          <a href="#">
            <MenuIcon fontSize="large" />
          </a>
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
