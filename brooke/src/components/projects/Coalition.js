import React from 'react';
import './coalition.mp4';

export const Coalition = () =>
  <div className="tabcontent">
    <h3>Coalition</h3>
    <video autoplay muted loop id="myVideo">
      <source src="./coalition.mp4" type="video/mp4"/>
    </video>  </div>




export default Coalition;
