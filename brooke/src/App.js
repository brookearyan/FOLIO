import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { Home } from './components/Home';
import { TechProjects } from './components/TechProjects';
import { Background } from './components/Background';
import { Navbar } from './components/Navbar'
import { Burger } from './components/Burger'
import './App.css';

export class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Burger />
            <NavLink className="navlink" to="/" exact>
              <h1 className="brooke">brooke a. ryan</h1>
            </NavLink>
          </header>
          <section className="main">
            <Route exact path="/" render={Home} />
            <Route exact path="/background" render={Background} />
            <Route exact path="/projects" render={TechProjects} />
          </section>
        </div>
      </Router>
    );
  }
}

export default App;
