import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

export const Navbar = () =>
  <div className="navbar">
    <div className="spacer-navlinks">
    </div>
    <NavLink className="navlink" to="/" exact>
      main
    </NavLink>
    <NavLink className="navlink" to="/background" exact>
      background
    </NavLink>
    <NavLink className="navlink" to="/projects" exact>
      projects
    </NavLink>
    <div className="spacer-navlinks">
    </div>
  </div>;

export default Navbar;
