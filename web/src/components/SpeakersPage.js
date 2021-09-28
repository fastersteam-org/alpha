import React from 'react';
import SpeakerProfile from './SpeakerProfile';
import * as classes from './SpeakersPage.module.css';
import { FASTERCON21_SPEAKERS } from './People';

const {speakersHeader} = classes;

//TODO: CSS Line height of font.

const SpeakersPage = (props) => {
  console.log(FASTERCON21_SPEAKERS.length); // check the number of current speakers: 27

  return (
    <>
    <div style={{backgroundColor: '#f9f9f9'}}>
      <h2 className={speakersHeader}>FASTERCON21 SPEAKERS</h2>
      {FASTERCON21_SPEAKERS.map((speaker, idx) => {
        return (
          <SpeakerProfile
            key={idx}
            name={speaker.Name}
            link={speaker.linkedIn}
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