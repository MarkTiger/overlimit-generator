import React, { Component } from "react";
import Logo from "../logo.svg";

export class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={Logo} alt="logo" />
        <span>
          Overlimit Generator by <span className="author">Marco</span>
        </span>
      </div>
    );
  }
}

export default Header;
