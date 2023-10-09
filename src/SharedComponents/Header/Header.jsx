import React from "react";
import "./Header.scss";
import logo from "../../assets/Header/xtremeCarsLogo.svg";
import logoText from "../../assets/Header/XtremeCars.svg";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="main-header">
      <div id="img-xtr-logo" onClick={() => navigate("/")}>
        <img src={logo} alt="Logo" />;
        <img src={logoText} alt="xtreme cars" />;
      </div>

      <div className="header-options">
        <div id="lnk-new-cars”">NEW CARS</div>
        <div id="lnk-used-cars”">USED CARS</div>
      </div>

      <div className="my-profile" id="lnk-profile">
        MY PROFILE
      </div>
    </div>
  );
}

export default Header;
