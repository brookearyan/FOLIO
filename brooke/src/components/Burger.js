import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { BurgerBars } from './BurgerIcon'

export class Burger extends React.Component {

  render() {
    return (
      <div class="dropdown">
        <button class="dropbtn">
          <BurgerBars />
        </button>
          <div class="dropdown-content">
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
