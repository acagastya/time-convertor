import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <Link className="navbar-brand" to="/">
        <span role="img" aria-label="time convertor">
          🌐
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/help">
              Help
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/future">
              Future
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/from-to">
              From-to
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Header1() {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Dropdown button
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">
          Action
        </a>
        <a className="dropdown-item" href="#">
          Another action
        </a>
        <a className="dropdown-item" href="#">
          Something else here
        </a>
      </div>
    </div>
  );
}

export default Header;
