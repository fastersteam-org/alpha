import React from 'react';

const GoogleCalendar = ({ url }) => {
  return (
    <div className="flex justify-center mb-8">
      <iframe src={url} style={{border: 0}} width="800" height="600" frameBorder="0" scrolling="no" />
    </div>
  );  
};

GoogleCalendar.displayName = 'GoogleCalendar';
export default GoogleCalendar;