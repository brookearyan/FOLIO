import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { BurgerBars } from './BurgerIcon'

export class Burger extends React.Component {
  render() {
    return (
      <div className="dropdown">
        <button className="burger-button">
          <BurgerBars />
        </button>
        <div className="dropdown-options">
          <NavLink to="/background" exact>
            background
          </NavLink>
          <NavLink to="/projects" exact>
            projects
          </NavLink>
        </div>
      </div>
    );
  }
}
