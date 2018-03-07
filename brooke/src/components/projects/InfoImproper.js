import React from 'react';

export class InfoImproper extends React.Component {


  render() {
    return (
      <div className="accordian">
        <a href="https://www.youtube.com/watch?v=sFLP6w70XwI">
          <h2 className="info-title">
            improperNouns
            <a href="https://github.com/brookearyan/new_improper">
              <img className="proj-git-img" src="http://image.flaticon.com/icons/svg/23/23957.svg"/>
            </a>
          </h2>
        </a>
        <p className="info-stack">
          RUBY ON RAILS | JAVASCRIPT | REACT | REDUX | CUSTOM CSS
        </p>
        <p className="info-desc"><br />
          a social-media web application offering users a chance to exchange cheeky haikus, using one-time aliases
        </p><br />
      </div>
    );
  }
}

export default InfoImproper;
