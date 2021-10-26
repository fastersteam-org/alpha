import React from 'react';
import NationalBoard from './NationalBoard';
import { nationalBoard } from './People';
import * as classes from './TeamBios.module.css';

const { teamBiographyHeader, teamBiographyContainer } = classes;

const TeamBios = ({ props }) => {

  return (
    <>
      <h2 className={teamBiographyHeader}>FASTER National Board of Directors</h2>
      <div className={teamBiographyContainer}>
        {nationalBoard.map((person, index) => {
          return (
            <>
              <NationalBoard
                key={index}
                Name={person.Name}
                image={person.image}
                FASTER_Leadership_Position={person.FASTER_Leadership_Position}
                Professional_Job_Role={person.Professional_Job_Role}
                Professional_Job_Company={person.Professional_Job_Company}
                Education={person.Education}
                biography={person.biography} />
            </>
          )
        })}
      </div>
    </>
  );
};

export default TeamBios;