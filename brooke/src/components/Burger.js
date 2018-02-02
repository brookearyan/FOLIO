import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { BurgerBars } from './BurgerIcon'

export class Burger extends React.Component {
  render() {
    return (
      <div class="dropdown">
        <button class="burger-button">
          <BurgerBars />
        </button>
        <div class="dropdown-options">
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
