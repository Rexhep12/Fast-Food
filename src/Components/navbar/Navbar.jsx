import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">FastFood</div>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className="navbar-link">Menu</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
