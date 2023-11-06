import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light top">
        <div className="container-fluid py-2 sim">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavLink className="navbar-brand mx-auto fw-bold logo" to="/">
              {" "}
              <img src="https://media.discordapp.net/attachments/1004356980669952011/1171095992557375488/logo.png?ex=655b6f22&is=6548fa22&hm=2896eadbe62d9c3f926fe63377010b667dd68d9b980492c5fb985a6101c03ab3&=" alt="" width={200} height={100} />{" "}
            </NavLink>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link letra" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link letra" to="/products">
                  Produtos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link letra" to="/about">
                  Sobre
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link letra" to="/contact">
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
