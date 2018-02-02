import React from 'react';
import Flatiron from './Flatiron'
import KateSpade from './KateSpade'
import CynthiaRowley from './CynthiaRowley'
import CityBakery from './CityBakery'
import JCrew from './JCrew'
import Ralph from './Ralph'
import Saks from './Saks'
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
          <button onClick={this.flatironClick} className="flatiron-tab">
            <h2 className="company">Flatiron School</h2>
          </button>
          <button onClick={this.kateClick} className="kate-tab">
            <h2 className="company">Kate Spade</h2>
          </button>
          <button onClick={this.rowleyClick} className="tablinks">
            <h2 className="company">Cynthia Rowley</h2>
          </button>
          <button onClick={this.bakeryClick} className="tablinks">
            <h2 className="company">City Bakery Brands</h2>
          </button>
          <button onClick={this.crewClick} className="tablinks">
            <h2 className="company">J. Crew</h2>
          </button>
          <button onClick={this.ralphClick} className="tablinks">
            <h2 className="company">Ralph Lauren</h2>
          </button>
          <button onClick={this.saksClick} className="tablinks">
            <h2 className="company">Saks Fifth Avenue</h2>
          </button>
        </article>
        <article id="which-job">
          <Flatiron />
        </article>
      </section>
    )
  }
}
