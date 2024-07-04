import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navBar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar-title">
        <Link to="/">E-commerce</Link>
      </h1>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/login">Login</Link>
        </li>
        <li className="navbar-item">
          <Link to="/purchases">Purchases</Link>
        </li>
        <li className="navbar-item">
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
