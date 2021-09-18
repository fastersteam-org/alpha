import React from 'react';
import FasterCon21Flyer from './FasterCon21Flyer.js'

const GoogleCalendar = ({ url }) => {
  return (
    <div>
    <div className="flex justify-center mb-8">
      <iframe src={url} style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no" />
    </div>
    <FasterCon21Flyer/>

    </div>
  );  
};

GoogleCalendar.displayName = 'GoogleCalendar';
export default GoogleCalendar;