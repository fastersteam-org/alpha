import React from 'react';
import NationalBoard from './NationalBoard';
import { nationalBoard } from './People';
import * as classes from './TeamBios.module.css';

const { teamBiographyHeader, teamBiographyContainer } = classes;

const TeamBios = ({ props }) => {

/*
PROBLEM: When passing it to NationalBoard component as
props. This works fine if omit NationalBoard and just
have person.Name etc.
*/
  return (
    <>
      <h2 className={teamBiographyHeader}>FASTER National Board of Directors</h2>
      <div className={teamBiographyContainer}>
        {nationalBoard.map((person, index) => {
          return (
            <>
              <NationalBoard
                Name={person.name}
                FASTER_Leadership_Position={person.FASTER_Leadership_Position}
                Professional_Job_Role={person.Professional_Job_Role}
                Professional_Job_Company={person.Professional_Job_Role}
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