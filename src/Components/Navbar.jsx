import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Navbar">
          Navbar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/Home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Service">
                service
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/Todolist">
                Todolist
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Apifetch">
                Apifetch
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
