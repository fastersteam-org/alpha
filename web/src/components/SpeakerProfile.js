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
          <div>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer">
              <svg data-icon="linkedin" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
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