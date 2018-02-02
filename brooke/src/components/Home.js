import React from 'react';
import BrookePic from './img-addresses/Brooke-img';
import FIanimation from './img-addresses/FIanimation';

export const Home = () =>
  <section className="home-container">
    <article className="brooke">
      <BrookePic />
    </article>
    <article className="summary-article">
      <p className="summary">
        A versatile full-stack web developer with a focus on back-end development, and a keen understanding of front-end development needs . I bring strong experience in managing large teams, data analytics and sales/financial forecasting. Proven track record of client management & services, strong communication skills, and a dedication to efficiency and logistics.
      </p>
    </article>
    <article className="flatiron-animation">
      <FIanimation />
    </article>
    <article className="dev-skills">
      <h3 className="home-h3">
        DEVELOPMENT
      </h3>
      <p className="home-p">
        Ruby | JavaScript | Python | JQuery | SQL | Ruby on Rails | React | Redux | JSAngular
      </p>
    </article>
    <article className="office-related">
      <h3 className="home-h3">
        OFFICE PROFICIENCIES
      </h3>
      <p className="home-p">
        Microsoft Office | Advanced Excel | G Suite | AWS | ICloud
      </p>
    </article>
  </section>


export default Home;
