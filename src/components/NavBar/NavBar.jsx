import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import { Menu, Wrong } from "../Elements";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const updateMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      return;
    }
    setMenuOpen(true);
  };
  return (
    <nav className="navbar jsb pd-5">
      <div className="title pd-5">Staff</div>

      <div className="items pd-5">
        <ul className="desktopMenu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/staff">Staff</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        {menuOpen ? (
          <Wrong onClick={updateMenu} />
        ) : (
          <Menu onClick={updateMenu} />
        )}
        <ul className={menuOpen ? "mobileMenu" : "hide"}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/staff">Staff</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
