import React from 'react';
import BrookePic from './img-addresses/Brooke-img';
import FIanimation from './img-addresses/FIanimation';

export const Home = () =>
  <section className="home-container">
    <article className="summary-article">
      <article className="brooke">
        <BrookePic />
      </article>
      <p className="summary">
        A versatile full-stack web developer with a focus on back-end development, and a keen understanding of front-end development needs . I bring strong experience in managing large teams, data analytics and sales/financial forecasting. Proven track record of client management & services, strong communication skills, and a dedication to efficiency and logistics.
      </p>
    </article>
    <article className="dev-skills">
      <h3 className="home-h3">
        DEVELOPMENT
      </h3>
      <p className="home-p">
        Ruby | JavaScript | Python | JQuery | SQL | Ruby on Rails | React | Redux | JSAngular
      </p>
      <br /><br />
      <h3 className="home-h3">
        OFFICE PROFICIENCIES
      </h3>
      <p className="home-p">
        Microsoft Office | Advanced Excel | G Suite | ICloud
      </p>
    </article>
    <article className="flatiron-animation">
      <FIanimation />
    </article>
    <div className="footer">
    <a href="https://www.linkedin.com/in/brooke-a-ryan">
      <img className="linkedin" src="https://www.shareicon.net/download/2016/08/01/639809_service.svg"/>
    </a>
    <a href="mailto:brooke.ryan@flatironschool.com">
      <img className="email" src="http://www.free-icons-download.net/images/email-icon-88472.png"/>
    </a>
    <a href="https://github.com/brookearyan">
      <img className="github" src="http://image.flaticon.com/icons/svg/23/23957.svg"/>
    </a>
    <a href="https://medium.com/@brooke.ryan">
      <img className="medium" src="https://s3.amazonaws.com/freebiesupply/large/2x/medium-logo-black-transparent.png"/>
    </a>
    </div>
  </section>


export default Home;
