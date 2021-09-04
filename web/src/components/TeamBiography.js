import React from 'react';
import { headshot_Erin, headshot_Charity, headshot_Ian, headshot_Jamie, headshot_Aldrin, headshot_Chris, headshot_Ardees } from '../images/images';
import * as classes from './TeamBiography.module.css';

const { teamBiographyHeader, teamBiographyContainer, teamBiographyLeft, aboutContainer, aboutQuickInfoHeader, aboutQuickInfoCell, aboutBlurb } = classes;

const teamBiography = ({props}) => {
  const MOCK_DATA = [
    {
      Name: 'Erin Pañgilinan',
      FASTER_Leadership_Position: 'FASTER Founder and National Board President',
      image: headshot_Erin,
      Professional_Job_Company: 'FASTER',
      Professional_Job_Role: 'Software Engineer',
      Education: 'UC Berkeley',
      biography: `
       is a software engineer, computational designer hybrid, internationally acclaimed author and award-winning 
      journalist, educator, startup adviser, entrepreneur, investor, and proud UC Berkeley alumnus serving on the first 
      steering committee of its Asian American Pacific Islander Alumni Association. 

      Erin is founder of 501(c)(3) non-profit, FASTER - Filipinx Americans in STEAM - Science Technology Engineering Arts 
      and Math and serves as National Board President.
      
      She works at the intersections AR VR XR, AI, Data Science, High Performance Computing, biotech, and blockchain, 
      cryptocurrency, games, and eSports. Her announcements for new ventures (entrepreneurial and in investing funds) 
      are TBA. 
      
      Erin is also widely known as lead author and editor of the O’Reilly Media book: Creating Augmented + Virtual 
      Realities circulating over 2 dozen countries and translated into Chinese and Korean. 
      
      She was selected as a Diversity Fellow in Oculus Launch Pad and University of San Francisco Deep Learning 
      Program and Data Ethics’ Inaugural Program, and Alley, the diverse entrepreneur program housed at Verizon Ventures. 
      
      Early in her career, Erin worked as official electoral campaign staff for Obama For America (2012) 
      and Ro Khanna (former U.S. Deputy Secretary of Commerce) for Congress (2014). 
      She was also known as a prolific writer, as a journalist for Philippine News, Hyphen magazine, Change.org. 
      Her next creative project to be released this fall is her long-awaited chapbook of poetry, where portions of 
      the proceeds will be donated to the Asian American Journalists Association (AAJA) in memory of her friend, 
      the late Corky Lee, NYC Chinatown photographer, and Kearny Street Workshop. She is currently writing and 
      producing a hip hop documentary television series.
      `
    },
    {
      Name: 'Charity Nicholas',
      FASTER_Leadership_Position: 'FASTER National Board Secretary',
      image: headshot_Charity,
      Professional_Job_Company: 'ERM: Environmental Resources Management',
      Professional_Job_Role: 'Principal EHS Consultant',
      Education: 'UC-Berkeley',
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
      Name: 'Ian Gomez',
      FASTER_Leadership_Position: 'FASTER Marketing Director - Sponsorships',
      image: headshot_Ian,
      Professional_Job_Company: 'Grid.ai',
      Professional_Job_Role: 'Head of Marketing',
      Education: 'UCSB',
      biography: `
      's inspirational story transitioning from a job at Gucci, to HP and scaling marketing at H20.ai to 
      becoming Head of Marketing at Grid.ai proves that raw grit and an unparalleled sense of style and taste, 
      rising to high levels of success in the tech industry is possible. Ian is our main chair for FASTERCON sponsorships. 
      Ian graduated from UCSB and is originally from Union City, California. 
      `
    },
    {
      Name: 'Jamie Cristal',
      FASTER_Leadership_Position: 'FASTER Creative Director',
      image: headshot_Jamie,
      Professional_Job_Company: 'Airbnb',
      Professional_Job_Role: 'Design Leader',
      Education: 'NJIT',
      biography: `
      is a San Francisco based creative focused on inclusive design within the digital technology space. 
      After working at a boutique Los Angeles design studio, she pivoted into tech and has spent majority of her design 
      career working in Silicon Valley trailblazing new roles like being one of Yahoo’s first Design Associates, 
      scaling programs as a Design Operations Manager at Facebook, and driving inclusive design practices as a Design 
      Leader at Airbnb. Jamie continues to blaze new trails in the design industry while honing her craft, lifting her 
      community as she climbs, and working on her eccentric personal projects.
      `
    },
    {
      Name: 'Aldrin Montana',
      FASTER_Leadership_Position: 'FASTER Tech Committee Co-Chair',
      image: headshot_Aldrin,
      Professional_Job_Company: 'Workday',
      Professional_Job_Role: 'Performance Engineer',
      Education: 'PhD Student UCSC',
      biography: `
      is a 3rd year Ph.D. student in computer science at UC Santa Cruz. He works with Peter Alvaro, Carlos Maltzahn, 
      Jeff LeFevre, and Philip Kufeldt  focusing on storage systems and data management in support of scientific 
      applications. Aldrin has graduated with a B.S. and M.S. in computer science from Cal Poly, San Luis Obispo. 
      Before starting his Ph.D. program, Aldrin worked for 3 years at Personalis as a Bioinformatics analyst/engineer, 
      and about a year and a half at Workday as a performance engineer. Aldrin is interested in eventually becoming a 
      teacher, but is also interested in outreach and providing mentorship to anyone interested in computer science or b
      ioinformatics.
      `
    },
    {
      Name: 'Christopher De Leon',
      FASTER_Leadership_Position: 'Tech Committee Co-Chair',
      image: headshot_Chris,
      Professional_Job_Company: 'Forbes',
      Professional_Job_Role: 'Senior Software Engineer',
      Education: 'NJIT',
      biography: `
      is a NYC based Senior Software Engineer at Forbes who values collaborative team culture, enjoys architecting solutions,
      and sets his team up for success. He is an NJIT alumni with both a Computer Science and Biology B.S. degree. 
      Over his 4 year tenure at Forbes, he has worked on a multitude of front end frameworks, such as React.js and Angular, 
      utilizing the best tools for the project at hand. He is currently leading a team of 4 developers on the core 
      forbes.com team, delivering features, architecting solutions for the website, and mentoring his team to excel in 
      their career. Performance optimizations and responsiveness are his latest interests, in which he strives to make
      websites as fast as possible to ensure good user experience and increase user engagement. Outside of his day job, 
      he enjoys playing sports, watching scary movies, and food crawling around NYC or cities he’s traveling to.
      `
    },
    // {
    //   Name: 'Ardees Rabang',
    //   image: headshot_Ardees,
    //   Professional_Job_Company: 'Forbes',
    //   Professional_Job_Role: 'Software Engineer',
    //   Education: 'NJIT',
    //   biography: `
    //    is a production professional with over 20 years experience in the film and television industry. Her expertise spans all areas of production, from pre-production through post-production, marketing and publicity, release to distribution. 
    //   From June 1996 to August 2012, Ardees worked closely with Producer Rick McCallum and Director/Visionary George Lucas at Lucasfilm Ltd on some of the highest grossing movies of all time: the Star Wars Trilogy Special Editions, Star Wars Episode I: The Phantom Menace, Star Wars Episode II: Attack of the Clones, Star Wars Episode III: Revenge of the Sith, and Red Tails. On the television side, she has worked on The Young Indiana Jones Chronicles and the Star Wars live-action television series. 
    //   From August 2012 to June 2015, Ardees oversaw and managed Director/Writer/Producer Brad Bird’s production company. She assisted Mr. Bird in both public and private professional spheres as well as on location during development, pre-production, production, principal photography, and post-production of his film Tomorrowland. 
    //   Since 2015, Ardees is the President of Colorful Media (formerly Infidea Studios) and is a Producer for all of their projects. She oversees their feature films, television production, streaming series and microfilms. Colorful Media’s mission is producing content (films, series and biopic micro-stories) in traditional and new mediums with a global view truly reflective of our world. Ardees’ passion for diversity and minority communities goes back to her days as a UC Berkeley student and seeing the lack of diversity and inclusion in the entertainment industry.  She is the Executive Producer of the series GOOD VIBES, an original comedy series that follows four San Francisco Bay Area cannabis female aficionados who are rooted in their sisterhood, their Filipino communities, and their love for medicinal marijuana. 
    //   From April 2017 to August 2018, Ardees worked as Creative Project Manager in the Media+Marketing Department for Science 37, Inc. and oversaw the delivery of 300+ short form videos.
    //   Since January 2019, Ardees is the Head of Production for Fenix TLS, a language technology and media company based in Hong Kong, and MINEO, a fintech company based in Hong Kong.
    //   Since September 2019, Ardees has been working with Evergrain Studios as an Executive Producer/Producer.
    //   `
    // },
    // {
    //   Name: 'Therese Pamplona',
    //   image: '/',
    //   Professional_Job_Company: 'Forbes',
    //   Professional_Job_Role: 'Software Engineer',
    //   Education: 'NJIT',
    //   biography: `
    //   is a blank year at UC Berkeley who is majoring in Data Science and minor in Computer Science. 
    //   She serves at representative liason to FASTER serving as the External Vice President of undergraduate student organization, 
    //   PASAE - Pilipino Association of Scientists Architects and Engineers.
    //   `
    // },
  ]

  return (
    <>
      <h2 className={teamBiographyHeader}>FASTER National Board of Directors</h2>
      <div className={teamBiographyContainer}>
        {MOCK_DATA.map((person, index) => {
          return (
            <>
              <section key={index} className={aboutContainer}>
                <div className={teamBiographyLeft}>
                  <img src={person.image} className="mr-12" alt={person.Name} />
                  <h3>{person.Name}</h3>
                  <span>{person.FASTER_Leadership_Position}</span>
                  <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Roles</h3>
                    <p className="text-base">{person.Professional_Job_Role}</p>
                  </div>
                  <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Companies</h3>
                    <p className="text-base">{person.Professional_Job_Company}</p>
                  </div>
                  <div className={aboutQuickInfoCell}>
                    <h3 className={aboutQuickInfoHeader}>Education</h3>
                    <p className="text-base">{person.Education}</p>
                  </div>
                </div>
                <div className={aboutBlurb}>
                  <p><span>{person.Name}</span> {person.biography}</p>
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