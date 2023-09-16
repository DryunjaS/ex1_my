import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-wrap">
      <div className="nav__logo">
        <Link to="/">
          <img src="/img/logo.jpg" alt="Logo" />
        </Link>
      </div>
      <div className="nav__item">
        <Link to="/about" className="nav-link">
          О нас
        </Link>
        <Link to="/posts" className="nav-link">
          Посты
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
