import React from 'react';
import * as classes from './SpeakerProfile.module.css';

const { speakerContainer, speakerInformationFlex, speakerTag, speakerStats } = classes;

// TODO: Needs a parent component, this component will be the one to get iterated over and information passed via props
// TODO: Mobile first, refactor CSS so that desktop is using media query.
const SpeakerProfile = ({ headshot, name, role, organization, education, linkedIn, bio }) => {
  return (
    <section className={speakerContainer}>
      <div className={speakerInformationFlex}>
        <div className={speakerTag}>
          <img src={headshot} alt="Person headshot" />
          <h2>{name}</h2>
        </div>
        <p>
          {bio}
        </p>
      </div>
      <div className={speakerStats}>
        <div>
          <h2>Role</h2>
          <p>{role}</p>
        </div>
        <div>
          <h2>Companies</h2>
          <p>{organization}</p>
        </div>
        <div>
          <h2>Education</h2>
          <p>{education}</p>
        </div>
      </div>
    </section>
  );
};

export default SpeakerProfile;