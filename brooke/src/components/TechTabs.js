import React from 'react';
import ReactDOM from 'react-dom';
import { Coalition } from './projects/Coalition';
import { ImproperNouns } from './projects/ImproperNouns';
import { MyBudg } from './projects/MyBudg';
import { Taxation } from './projects/Taxation';

export class TechTabs extends React.Component {

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
      <section className="projects">
        <article className="tabs-container">
          <div onClick={this.coalClick} className="project-tab">
            <div className="project">COALITION</div>
          </div>
          <div onClick={this.improperClick} className="project-tab">
            <div className="project">improperNouns</div>
          </div>
          <div onClick={this.budgClick} className="project-tab">
            <div className="project">my_budg</div>
          </div>

        </article>
        <article id="which-project">
          <ImproperNouns />
        </article>
      </section>
    )
  }
}
// <div onClick={this.taxClick} className="project-tab">
//   <div className="project">Taxation</div>
// </div>
