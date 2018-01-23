import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import './App.css';

const Navbar = () =>
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
      technical projects
    </NavLink>
    <div className="spacer-navlinks">
    </div>
  </div>;

const Home = () =>
  <section className="home-content">
    <article className="page-title">
      <h1>Home</h1>
    </article>
  </section>

const Background = () =>
  <section className="background-content">
    <article className="page-title">
      <h1>background</h1>
    </article>
  </section>

const TechProjects = () =>
<section className="project-content">
  <article className="page-title">
    <h1>Technical Projects</h1>
  </article>
</section>

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <h1 className="brooke">brooke a. ryan</h1>
         <Router>
           <div>
             <Navbar />
             <Route exact path="/" render={Home} />
             <Route exact path="/background" render={Background} />
             <Route exact path="/projects" render={TechProjects} />
           </div>
         </Router>
        </header>
      </div>
    );
  }
}

export default App;
