import React from 'react';
import { teamBio_chris, teamBio_Ardees, teamBio_Aldrin, teamBio_Charity, teamBio_Erin, teamBio_Ian, teamBio_Jamie } from '../images/images';
import * as classes from './TeamBiography.module.css';

const { teamBiographyHeader, teamBiographyContainer, teamBiographyLeft, aboutContainer, aboutQuickInfoHeader, aboutQuickInfo, aboutQuickInfoCell, aboutBlurb } = classes;

const teamBiography = (props) => {
  const MOCK_DATA = [
    {
      fullName: 'Christopher De Leon',
      image: teamBio_chris,
      role: 'Software Engineer',
      company: 'Forbes',
      education: 'NJIT',
      biography: `
       is a NYC based Senior Software Engineer at Forbes who values collaborative team culture, enjoys architecting 
      solutions, and sets his team up for success. He is an NJIT alumni with both a Computer Science and Biology B.S. degree. 
      Over his 4 year tenure at Forbes, he has worked on a multitude of front end frameworks, such as React.js and Angular, utilizing 
      the best tools for the project at hand. He is currently leading a team of 4 developers on the core forbes.com team, delivering 
      features, architecting solutions for the website, and mentoring his team to excel in their career. Performance optimizations 
      and responsiveness are his latest interests, in which he strives to make websites as fast as possible to ensure 
      good user experience and increase user engagement. Outside of his day job, he enjoys playing sports, watching scary movies, 
      and food crawling around NYC or cities he’s traveling to.
      `
    },
    {
      fullName: 'Erin Pañgilinan',
      image: teamBio_Erin,
      role: 'Software Engineer',
      company: 'FASTER',
      education: 'UC Berkeley',
      biography: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt dui non purus pretium,
      et euismod urna gravida. Donec vitae ipsum nisl. Phasellus turpis quam, ornare ut quam ac, lacinia
      accumsan augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse congue metus
      et aliquam hendrerit. Maecenas vel vestibulum metus, a iaculis turpis. Duis non enim sed mi ornare
      sodales. Sed sed tristique dui, in maximus mi. Ut interdum tincidunt mauris at luctus. Fusce tempus
      finibus metus, nec vestibulum ipsum laoreet nec.
      `
    },
    {
      fullName: 'Ardees Rabang',
      image: teamBio_Ardees,
      role: 'Software Engineer',
      company: 'Forbes',
      education: 'NJIT',
      biography: `
      Ardees Rabang Ardees Rabang is a production professional with over 20 years experience in the film and television industry. Her expertise spans all areas of production, from pre-production through post-production, marketing and publicity, release to distribution. 
      From June 1996 to August 2012, Ardees worked closely with Producer Rick McCallum and Director/Visionary George Lucas at Lucasfilm Ltd on some of the highest grossing movies of all time: the Star Wars Trilogy Special Editions, Star Wars Episode I: The Phantom Menace, Star Wars Episode II: Attack of the Clones, Star Wars Episode III: Revenge of the Sith, and Red Tails. On the television side, she has worked on The Young Indiana Jones Chronicles and the Star Wars live-action television series. 
      From August 2012 to June 2015, Ardees oversaw and managed Director/Writer/Producer Brad Bird’s production company. She assisted Mr. Bird in both public and private professional spheres as well as on location during development, pre-production, production, principal photography, and post-production of his film Tomorrowland. 
      Since 2015, Ardees is the President of Colorful Media (formerly Infidea Studios) and is a Producer for all of their projects. She oversees their feature films, television production, streaming series and microfilms. Colorful Media’s mission is producing content (films, series and biopic micro-stories) in traditional and new mediums with a global view truly reflective of our world. Ardees’ passion for diversity and minority communities goes back to her days as a UC Berkeley student and seeing the lack of diversity and inclusion in the entertainment industry.  She is the Executive Producer of the series GOOD VIBES, an original comedy series that follows four San Francisco Bay Area cannabis female aficionados who are rooted in their sisterhood, their Filipino communities, and their love for medicinal marijuana. 
      From April 2017 to August 2018, Ardees worked as Creative Project Manager in the Media+Marketing Department for Science 37, Inc. and oversaw the delivery of 300+ short form videos.
      Since January 2019, Ardees is the Head of Production for Fenix TLS, a language technology and media company based in Hong Kong, and MINEO, a fintech company based in Hong Kong.
      Since September 2019, Ardees has been working with Evergrain Studios as an Executive Producer/Producer.
      `
    },
    {
      fullName: 'Charity Nicholas',
      image: teamBio_Charity,
      role: 'Software Engineer',
      company: 'Forbes',
      education: 'NJIT',
      biography: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt dui non purus pretium,
      et euismod urna gravida. Donec vitae ipsum nisl. Phasellus turpis quam, ornare ut quam ac, lacinia
      accumsan augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse congue metus
      et aliquam hendrerit. Maecenas vel vestibulum metus, a iaculis turpis. Duis non enim sed mi ornare
      sodales. Sed sed tristique dui, in maximus mi. Ut interdum tincidunt mauris at luctus. Fusce tempus
      finibus metus, nec vestibulum ipsum laoreet nec.
      `
    },
    {
      fullName: 'Ian Gomez',
      image: teamBio_Ian,
      role: 'Software Engineer',
      company: 'Forbes',
      education: 'NJIT',
      biography: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt dui non purus pretium,
      et euismod urna gravida. Donec vitae ipsum nisl. Phasellus turpis quam, ornare ut quam ac, lacinia
      accumsan augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse congue metus
      et aliquam hendrerit. Maecenas vel vestibulum metus, a iaculis turpis. Duis non enim sed mi ornare
      sodales. Sed sed tristique dui, in maximus mi. Ut interdum tincidunt mauris at luctus. Fusce tempus
      finibus metus, nec vestibulum ipsum laoreet nec.
      `
    },
    {
      fullName: 'Jamie Cristal',
      image: teamBio_Jamie,
      role: 'Software Engineer',
      company: 'Forbes',
      education: 'NJIT',
      biography: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt dui non purus pretium,
      et euismod urna gravida. Donec vitae ipsum nisl. Phasellus turpis quam, ornare ut quam ac, lacinia
      accumsan augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse congue metus
      et aliquam hendrerit. Maecenas vel vestibulum metus, a iaculis turpis. Duis non enim sed mi ornare
      sodales. Sed sed tristique dui, in maximus mi. Ut interdum tincidunt mauris at luctus. Fusce tempus
      finibus metus, nec vestibulum ipsum laoreet nec.
      `
    },
    {
      fullName: 'Aldrin',
      image: teamBio_Aldrin,
      role: 'Software Engineer',
      company: 'Forbes',
      education: 'NJIT',
      biography: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt dui non purus pretium,
      et euismod urna gravida. Donec vitae ipsum nisl. Phasellus turpis quam, ornare ut quam ac, lacinia
      accumsan augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse congue metus
      et aliquam hendrerit. Maecenas vel vestibulum metus, a iaculis turpis. Duis non enim sed mi ornare
      sodales. Sed sed tristique dui, in maximus mi. Ut interdum tincidunt mauris at luctus. Fusce tempus
      finibus metus, nec vestibulum ipsum laoreet nec.
      `
    },
  ]

  return (
    <>
      <h2 className={teamBiographyHeader}>FASTER National Board of Directors</h2>
      <div className={teamBiographyContainer}>
        {MOCK_DATA.map((person, index) => {
          return (
            <>
              <section className={aboutContainer}>
                <div className={teamBiographyLeft}>
                  <img src={person.image} alt="headshot image of {person.name}" />
                  <h3>{person.fullName}</h3>
                  <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Roles</h3>
                    <p className={aboutQuickInfo}>{person.role}</p>
                  </div>
                  <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Companies</h3>
                    <p className={aboutQuickInfo}>{person.company}</p>
                  </div>
                  <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Education</h3>
                    <p className={aboutQuickInfo}>{person.education}</p>
                  </div>
                </div>
                <div className={aboutBlurb}>
                  <p><b>{person.fullName}</b> {person.biography}</p>
                </div>
              </section>
            </>
          )
        })}
      </div>
    </>
  );
};

export default teamBiography;