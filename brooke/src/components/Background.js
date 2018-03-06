import React from 'react';
import { JobTabs } from './JobTabs';

export const Background = () =>
  <div>
    <JobTabs />
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
  </div>
