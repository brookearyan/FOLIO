import React, { Component } from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css
import { InfoMyBudg } from './InfoMyBudg';

export const MyBudgVideo = () =>
(
  <div className="videos">
    <iframe frameborder="0" height="100%" width="100%"
      src="https://youtube.com/embed/KI5Ajrzfn7E?autoplay=1&controls=0&loop=1&rel=0&showinfo=0&autohide=1&wmode=transparent&hd=1">
    </iframe>
    <InfoMyBudg />
  </div>
);
