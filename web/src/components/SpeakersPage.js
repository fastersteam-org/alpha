import React from 'react';
import SpeakerProfile from './SpeakerProfile';
import * as classes from './SpeakersPage.module.css';
import { FASTERCON21_SPEAKERS } from './People';

const {speakersHeader} = classes;

const SpeakersPage = (props) => {
  return (
    <>
    <div style={{backgroundColor: '#f9f9f9'}}>
      <h2 className={speakersHeader}>FASTERCON21 SPEAKERS</h2>
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