import React, { Component } from 'react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css"; // import css


export const TaxVideo = () =>
  (
    <Player playsInline>
      <source src="https://www.youtube.com/embed/N3tzsjvKbJw" />
    </Player>
  );
//TAX VIDEO NOT MADE YET
