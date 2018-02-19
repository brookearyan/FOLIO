import React from 'react';
import Flatiron from './Flatiron'
import FITab from './img-addresses/FI-img.js'
import KateSpade from './KateSpade'
import KateTab from './img-addresses/Kate-img.js'
import CynthiaRowley from './CynthiaRowley'
import CynthiaTab from './img-addresses/Cynthia-img.js'
import CityBakery from './CityBakery'
import BakeryTab from './img-addresses/Bakery-img.js'
import JCrew from './JCrew'
import JCrewTab from './img-addresses/JCrew-img.js'
import Ralph from './Ralph'
import RalphTab from './img-addresses/Ralph-img.js'
import Saks from './Saks'
import SaksTab from './img-addresses/Saks-img.js'
import ReactDOM from 'react-dom';


export class JobTabs extends React.Component {

  flatironClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <Flatiron />,
      document.getElementById('which-job')
    );
  }
  kateClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <KateSpade />,
      document.getElementById('which-job')
    );
  }
  rowleyClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <CynthiaRowley />,
      document.getElementById('which-job')
    );
  }
  bakeryClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <CityBakery />,
      document.getElementById('which-job')
    );
  }
  crewClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <JCrew />,
      document.getElementById('which-job')
    );
  }
  ralphClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <Ralph />,
      document.getElementById('which-job')
    );
  }
  saksClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <Saks />,
      document.getElementById('which-job')
    );
  }
  render() {
    return (
      <section className="jobs-container">
        <article className="tabs">
          <button onClick={this.flatironClick} className="co-button">
            <div className="company"><FITab /></div>
          </button>
          <button onClick={this.kateClick} className="co-button">
            <div className="company"><KateTab /></div>
          </button>
          <button onClick={this.rowleyClick} className="co-button">
            <div className="company"><CynthiaTab /></div>
          </button>
          <button onClick={this.bakeryClick} className="co-button">
            <div className="company"><BakeryTab /></div>
          </button>
          <button onClick={this.crewClick} className="co-button">
            <div className="company"><JCrewTab /></div>
          </button>
          <button onClick={this.ralphClick} className="co-button">
            <div className="company"><RalphTab /></div>
          </button>
          <button onClick={this.saksClick} className="co-button">
            <div className="company"><SaksTab /></div>
          </button>
        </article>
        <article id="which-job">
          <Flatiron />
        </article>
      </section>
    )
  }
}
