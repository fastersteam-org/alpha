import React from 'react';

import * as classes from './About.module.css';

const { aboutSection, informationSlice } = classes;

const About = (props) => {
  return (
    <section className={aboutSection}>
      <div className={informationSlice}>
        <h3>About Us</h3>
        <p>
          Established in 2015, FASTER is the only multi-stakeholder national 501(c)(3) non-partisan
          non-profit organization dedicated to advancing excellence, equality, and justice primarily serving
          the FilipinX American community in the U.S. tech ecosystem.
        </p>
      </div>
      <div className={informationSlice}>
        <h3>Our Story</h3>
        <p>
          FASTER was founded in 2015 by Erin Pangilinan through hosting its signature annual conference,
          FASTERCON at the University of California, Berkeley (UC Berkeley), her alma mater starting with
          celebrating the Silicon Valley’s history of Filipinx American contributions during
          Filipinx American HXStory Month in October. Working closely witth FASTER National Board Secretary,
          past president of the Cal Pilipino American Alumni Chapter (CalPAAC), Charity Nicolas and other local
          universities, our organization has grown into a one time event and annual conference, to a non-profit
          serving Filipinx Americans from all walks of life, across backgrounds, ages and a growing number of
          sectors where Filipinx Americans are representing, pioneering, and liberating our communities.
          FASTER helps illuminate the stories of the Filipinx American community and their contributions to
          technology and continues to grow with its various components in education, professional development,
          and innovation. Our membership reaches New York, Los Angeles, Chicago, San Diego, Florida, Boston, S
          eattle and growing.
        </p>
      </div>
      <div className={informationSlice}>
        <h3>Our Mission</h3>
        <p>
          We are create, connect, cultivate a multigenerational movement of Filipinx Americans in the Science
          Technology Engineering Arts and Mathematics working in the science and technology ecosystem
          (inclusive of intersection of arts, entertainment, media industries across all verticals) that continues
          to build upon the legacy of historical contribution our ethnic community in the United States and beyond.
        </p>
      </div>
      <div className={informationSlice}>
        <h3>Our Strategy</h3>
        <p>
          We spearhead strategic initiatives ranging from our education component (FASTER Education),
          Filipinx American Undergraduate Krew - FUNKTion and in partnership with Tech-In-Color K-12 outreach to
          students of color program founded by FASTER National Board Secretary, Charity Nicolas, and
          Kollective Hustle Program under ABS-CBN, professional development (FASTER PROS) component for independent
          and tech company Employee Resource Group (ERG) leaders and members),  and innovation component,
          (FASTER FRESH) for high tech startup entrepreneurs and investing and community
          building within the industry, we seek to attract, advance, and excel the network of Filipino Americans
          talent in tech companies. FASTER-Silicon Valley is the founding chapter of FASTER and includes
          areas located in the San Francisco Bay Area inclusive of all parts of the Bay, SF, East Bay, South Bay,
          and Peninsula. On terminology for the naming of FASTER. (see Notes below)
        </p>
      </div>
      <div className={informationSlice}>
        <h3>FASTER Philosophy and Vision </h3>
      </div>
      <div className={informationSlice}>
        <h3>Inspire</h3>
        <p>
          We seek to increase visibility and celebrate the contributions of Filipinx Americans in tech,
          those who inspire leadership across professions in the industry.
        </p>
      </div>
      <div className={informationSlice}>
        <h3>Organize</h3>
        <p>
          We seek to empower our community by making information on Filipinx Americans in tech more accessible
          with a community platform of Filipinx Americans in various professions in tech.
        </p>
      </div>
      <div className={informationSlice}>
        <h3>Give and Invest</h3>
        <p>
          Silicon Valley’s rich history of Asian American contributions is significant. FASTER helps illuminate the
          stories of the Filipinx American community and their contributions to technology. Through investing in each other,
          both nurturing early stage startups and donating back to our local communities impacting in tech, we seek to
          strengthen our Filipinx American community as a whole.
        </p>
        <p>
          In identifying our Filipinx Americans in STEAM throughout the U.S., educating, organizing, and investing in each other,
          we are able to target key areas where our community needs the most in tackling racial and ethnic disparities by
          building a strategic pipeline to recruit, retain, promote our community’s representation across all verticals/subsectors
          (FASTER FAVES - Filipinx Americans in Verticals) and roles.
        </p>
      </div>
      <div className={informationSlice}>
        <h3>Our Values</h3>
        <p>
          FASTER is committed to JEDI - Justice Equity Diversity and Inclusion - we strive to advance excellence and
          equality in our profession, increasing accountability for racial and ethnic equity, representation, and
          belonging in our partnerships, advancing equality and excellence in our profession. Read more in our <a href="faster-steam.org/FAQ">FAQ</a>, our Code of
          Conduct <a href="https://bit.ly/FASTERCodeofConduct">here</a> which is informed by our values, commitment
          to JEDI. From our own respective professions as a collective, releasing human centered products
          (our own directory, database, website, store, and in native mobile app (coming soon),
          we are consciously working towards maintaining a standard in ethics and privacy (HIPAA compliant)
          for communities of color as they are developed by and for the community.
        </p>
      </div>
      <div className={informationSlice}>
        <h3 style={{ color: 'black' }}>Notes</h3>
        <p>
          FASTER was originally named Filipinx Americans in Silicon Valley Tech, and as we expanded nationally was
          rebranded to Filipinx Americans in STEAM.  FilipinX, the “X” for gender neutral terms. While there is no “F” in the
          PilipinX language and UC Berkeley and SFSU often use the letter “P” to name their organizational affiliations
          (no "F" in our actual PilipinX language, there is no "P" as we would be pronounced “pastor” and does not sound as
          cool as FASTER “F” that also encourages speed/efficiency (engineering thinking). We define “ER” as one who is -ER FAST
          (the acronym above). STEAM - includes “A” acronym, to represents the arts often left out of STEM.
        </p>
      </div>
      <div className={informationSlice}>
        <h3>Our Team</h3>
        <p>
          FASTER operates under the leadership and direction of our National Board of Directors, Advisors, Committee
          Members, and in partnership with select community partners at the local, state, and national level to continue
          to address the dynamic needs of the Filipinx American community in the science and technology ecosystem.
          New leadership will be filled on an ongoing basis as our organization scales and <a href="faster-steam.org/team">grows.</a>
        </p>
      </div>
    </section>
  );
};

export default About;