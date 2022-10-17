import React from "react";
import logo from "../../assets/Union_nav.svg";
import logoName from "../../assets/lendsqr_nav.svg";
import "../../styles/Navbar.scss";
import { GoSearch } from "react-icons/go";
import { ReactComponent as Logo } from "../../assets/Vector.svg";
import { ReactComponent as Image } from "../../assets/userImage.svg";
import { ReactComponent as InvertedTrian } from "../../assets/invertedTriangle.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_logoContainer">
        <img src={logo} alt="" className="logo" />
        <img src={logoName} alt="" className="logo_name" />
      </div>
      <div className="navbar_searchContainer">
        <input
          type="text"
          className="input"
          placeholder="Search for anything"
        />
        <div className="search-icon">
          <GoSearch className="icon" />
        </div>
      </div>
      <div className="navbar_userNotification">
        <h4 className="docs">docs</h4>
        <Logo className="bell" />
        <Image className="image" />
        <h4 className="name">Sir Obed</h4>
        <InvertedTrian className="invertedTrian" />
      </div>
    </nav>
  );
};

export default Navbar;
