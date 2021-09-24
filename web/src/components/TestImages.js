import React from 'react';
import { nationalBoard } from './People';

const testImages = (props) => {

  return (
    <>
      <h2>This is a test</h2>
      {nationalBoard.map((person, index) => {
        return (
        <div>
          {person.Name}
          <img src={person.image} />
        </div>)
      })}
    </>
  );
};


export default testImages;