import React from 'react';
import NationalBoard from './NationalBoard';
import { FASTER_BOARD } from './People';
import * as classes from './TeamBios.module.css';

const { teamBiographyHeader, teamBiographyContainer } = classes;

const TeamBios = ({ props }) => {

  return (
    <>
      <h2 className={teamBiographyHeader}>FASTER National Board of Directors</h2>
      <div className={teamBiographyContainer}>
        {FASTER_BOARD.map((person, index) => {
          return (
            <>
              <NationalBoard
                Name={person.name}
                image={person.image}
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