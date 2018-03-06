import React, { Component } from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import { InfoCoalition } from './InfoCoalition';


export const CoalVideo = () =>
  (
    <div className="coal-info">
      <InfoCoalition />
      <div className="videos">
        <iframe className="coalVideo" frameborder="0" height="100%" width="100%"
          src="https://youtube.com/embed/N3tzsjvKbJw?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1">
        </iframe>
      </div>
    </div>
  );
// "https://www.youtube.com/embed/DSLgAsrcpGQ?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1"
