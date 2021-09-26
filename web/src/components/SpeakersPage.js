import React from 'react';
import SpeakerProfile from './SpeakerProfile';
import { FASTERCON21_SPEAKERS } from './People';

const SpeakersPage = (props) => {
  return (
    <>
    <div style={{backgroundColor: '#f9f9f9'}}>
      {FASTERCON21_SPEAKERS.map((speaker, idx) => {
        return (
          <SpeakerProfile
            name={speaker.Name}
            headshot={speaker.headshot}
            role={speaker.Roles}
            organization={speaker.Organization}
            education={speaker.Education}
            linkedIn={speaker.linkedIn}
            bio={speaker.biography}
          />
        )
      })}
    </div>
    </>
  );
};

export default SpeakersPage;