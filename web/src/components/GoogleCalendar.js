import React from 'react';
import { Link } from "gatsby";
import * as styles from "./GoogleCalendar.module.css";
import Schedule from "./Schedule.js"
import FasterconPrograms from "./FasterconPrograms.js"
import EventsHeader from "./EventsHeader.js";



const GoogleCalendar = ({ url }) => {
  return (
    <div>
      
      
      <body class="bg-gray-500 bg-opacity-30 font-sans leading-normal tracking-normal">
  <EventsHeader/>
  <Schedule/>
</body>

<FasterconPrograms/>





    <div className="flex justify-center mb-8">
      <iframe src={url} style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no" />
    </div>
    </div>
  );  
};

GoogleCalendar.displayName = 'GoogleCalendar';
export default GoogleCalendar;