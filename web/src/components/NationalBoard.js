import React from 'react';
import classes from './NationalBoard.module.css';

const { aboutContainer, teamBiographyLeft, aboutQuickInfoCell, aboutQuickInfoHeader, aboutBlurb } = classes;

const NationalBoard = ({ Name, FASTER_Leadership_Position, Professional_Job_Role,
  Professional_Job_Company, Education, biography }) => {

  return (
    <section key={index} className={aboutContainer}>
      <div className={teamBiographyLeft}>
        {/* <img src={image} className="mr-12" alt={Name} /> */}
        <h3>{Name}</h3>
        <span>{FASTER_Leadership_Position}</span>
        <div className={aboutQuickInfoCell}>
          <h3 className={aboutQuickInfoHeader}>Roles</h3>
          <p className="text-base">{Professional_Job_Role}</p>
        </div>
        <div className={aboutQuickInfoCell}>
          <h3 className={aboutQuickInfoHeader}>Companies</h3>
          <p className="text-base">{Professional_Job_Company}</p>
        </div>
        <div className={aboutQuickInfoCell}>
          <h3 className={aboutQuickInfoHeader}>Education</h3>
          <p className="text-base">{Education}</p>
        </div>
      </div>
      <div className={aboutBlurb}>
        <p><span>{Name}</span> {biography}</p>
      </div>
    </section>
  );
};

export default NationalBoard;