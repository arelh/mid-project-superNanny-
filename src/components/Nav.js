import React from "react";
import { Link } from "react-router-dom";
import logonew from "./images/logonew.png";

function Nav() {
  return (
    <div className="Nav">
      <img className="logo" src={logonew} alt="Logo"></img>
      <Link to="/" className="link">
        Homepage
      </Link>
      <Link to="/Parents" className="link">
        View
      </Link>
      <Link to="/Babysitter" className="link">
        Add Babysitter
      </Link>
      <span className="material-symbols-outlined">child_care</span>
      <span className="material-symbols-outlined">child_care</span>
      <span className="material-symbols-outlined">child_care</span>
    </div>
  );
}

export default Nav;
