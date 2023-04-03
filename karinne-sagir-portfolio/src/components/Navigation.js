import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <Router>
      <div className=" row navigation" id="navigation">
        <NavLink to="/about">About </NavLink>
        <NavLink to="/portfolio">Portfolio </NavLink>
        <NavLink to="/contact">Contact </NavLink>
        <NavLink to="/resume">Resume</NavLink>
      </div>
    </Router>
  );
}

export default Navigation;
