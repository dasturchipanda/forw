import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="head">
            <h3>Logo</h3>
            <ul className="list">
              <li className="list-item">
                <NavLink to={'/'} className="list-link">Page</NavLink>
              </li>
              <li className="list-item">
                <NavLink to={'/'} className="list-link">Page </NavLink>
              </li>
              <li className="list-item">
                <NavLink to={'/'} className="list-link">Page </NavLink>
              </li>
              <li className="list-item">
                <NavLink to={'/'} className="list-link">Page </NavLink>
              </li>
              <li className="list-item">
                <NavLink to={'/'} className="list-link">Page </NavLink>
              </li>
            </ul>
            <div className="login">
              <button className="default-btn">Login</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;