import React from 'react';
import * as classes from './SpeakerProfile.module.css';

const { speakerContainer, speakerInformationFlex, speakerStats } = classes;

// TODO: Needs a parent component, this component will be the one to get iterated over and information passed via props
// TODO: Mobile first, refactor CSS so that desktop is using media query.
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
      <div className={speakerStats}>
        <div>
          <h2>Role</h2>
          <p>Role Here</p>
        </div>
        <div>
          <h2>Companies</h2>
          <p>Company Here</p>
        </div>
        <div>
          <h2>Education</h2>
          <p>Education Here</p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerProfile;