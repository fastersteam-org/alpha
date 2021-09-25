import React from 'react';
import * as classes from './SpeakerProfile.module.css';

const { speakerContainer, speakerInformationFlex } = classes;

const SpeakerProfile = (props) => {
  return (
    <section className={speakerContainer}>
      <div className={speakerInformationFlex}>
        <div>
          <img src="#" alt="Person headshot" />
          <h2>firstName lastName</h2>
        </div>
        <p>
          Lorem ipsum
        </p>
      </div>
      <div>
        <h2>Role</h2>
        <p>Role Here</p>
        <h2>Companies</h2>
        <p>Company Here</p>
        <h2>Education</h2>
        <p>Education Here</p>
      </div>
    </section>
  );
};

export default SpeakerProfile;