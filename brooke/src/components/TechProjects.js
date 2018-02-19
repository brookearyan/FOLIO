import React from 'react';
import ReactDOM from 'react-dom';
import { Coalition } from './projects/Coalition';
import { ImproperNouns } from './projects/ImproperNouns';
import { MyBudg } from './projects/MyBudg';
import { Taxation } from './projects/Taxation';

export class TechProjects extends React.Component {

  coalClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <Coalition />,
      document.getElementById('which-project')
    );
  }
  improperClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <ImproperNouns />,
      document.getElementById('which-project')
    );
  }
  budgClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <MyBudg />,
      document.getElementById('which-project')
    );
  }
  taxClick(event) {
    event.preventDefault();
    ReactDOM.render(
      <Taxation />,
      document.getElementById('which-project')
    );
  }


  render() {
    return (
      <section className="tabs-container">
        <article className="tabs">
          <button onClick={this.coalClick} className="project-tab">
            <div className="projects"><Coalition /></div>
          </button>
          <button onClick={this.improperClick} className="project-tab">
            <div className="projects"><ImproperNouns /></div>
          </button>
          <button onClick={this.budgClick} className="project-tab">
            <div className="projects"><MyBudg /></div>
          </button>
          <button onClick={this.taxClick} className="project-tab">
            <div className="projects"><Taxation /></div>
          </button>
        </article>
        <article id="which-project">
          <MyBudg />
        </article>
      </section>
    )
  }
}
export default TechProjects;
