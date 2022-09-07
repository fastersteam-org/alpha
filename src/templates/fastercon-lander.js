import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const FasterconLander = ({ pageContext: { landerPageData } }) => {
    return (
        <Layout>
            <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-20 text-center">
                <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-4xl uppercase">
                    WELCOME TO FASTER
                </h2>
                <p className="mt-2.5 sm:mt-3 lg:mt-4 text-xl text-gray-900 sm:text-2xl lg:text-4xl">
                    FILIPINX AMERICANS IN SCIENCE TECHNOLOGY ENGINEERING ARTS
                    AND MATHEMATICS
                </p>
            </div>

            {/* main image Section */}
            <div className="max-w-7xl pt-8 sm:pt-10 lg:pt-14 mx-auto">
                <div className="w-full mx-auto text-center">
                    <GatsbyImage
                        image={landerPageData.heroImage.gatsbyImageData}
                        alt=""
                        layout="fullWidth"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 sm:pt-10 lg:pt-14 px-4 sm:px-6 lg:px-20">
                <h3 className="text-base font-bold text-faster-green sm:text-lg lg:text-xl">
                    About FASTERCON22
                </h3>
                <p className="text-base sm:text-lg lg:text-xl">
                    FASTERCON - Filipinx Americans in Science Technology
                    Engineering Arts and Mathematics Conference is our signature
                    annual convening celebrating Filipinx American HXStory Month
                    (FAHM) in October. Every year, we highlight rising and
                    seasoned professionals who have made significant
                    contributions to the STEAM industry.
                </p>
            </div>

            {/* main image Section */}
            <div className="max-w-7xl pt-8 sm:pt-10 lg:pt-14 mx-auto">
                <div className="w-full mx-auto text-center">
                    <GatsbyImage
                        image={landerPageData.fasterFlyerMain.gatsbyImageData}
                        alt=""
                        layout="fullWidth"
                    />
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-8 sm:pt-10 lg:pt-14 px-4 sm:px-6 lg:px-20 text-center">
                <h2 className="text-xl font-bold text-faster-green sm:text-2xl lg:text-4xl">
                    REGISTER FOR FASTERCON22
                </h2>
            </div>

            <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-20 flex flex-col items-center">
                <a
                    href="https://bit.ly/FASTERCON22D1"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2"
                >
                    Register for FASTERCON DAY 1
                </a>
                <a
                    href="https://bit.ly/FASTERCON22D2"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2 mt-5"
                >
                    Register for FASTERCON DAY 2
                </a>
            </div>

            <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-20"></div>

            {/* schedule */}
            <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-20">
                <h2 className="text-center text-lg font-bold text-faster-green sm:text-xl lg:text-3xl">
                    FASTERCON22 CONFERENCE SCHEDULE
                </h2>
            </div>
            <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-20">
                <h3 className="text-base font-bold text-faster-green sm:text-lg lg:text-2xl">
                    FASTERCON Day 1 - Friday September 30
                </h3>

                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    FASTER Kick-Off Filipinx American History Month (FAHM)
                    5:00PM - 5:30PM PST / 8:00PM - 8:30PM EST / 8:00AM - 8:30AM
                    PHILIPPINE TIME
                </h3>

                <h3 className="text-base sm:text-lg lg:text-2xl font-bold pt-2">
                    FASTER Welcome Keynote Address
                </h3>
                <p className="text-base text-faster-font-grey">
                    &quot;The State of the FilipinX American Community in STEAM
                    Network: Open&quot; by Erin Pangilinan - Salamat Inc.
                    Founder and Chief Technology Officer, FASTER Founder and
                    National Board President
                </p>

                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    5:30PM - 6:30PM PST / 8:30PM - 9:30PM EST / 8:30AM - 9:30AM
                    PHILIPPINE TIME
                </h3>

                <h3 className="text-base sm:text-lg lg:text-2xl font-bold pt-2">
                    FASTER Keynote Panel
                </h3>
                <h3 className="text-base sm:text-lg text-faster-green font-bold">
                    Featured FASTER FRESH Entrepreneurship Keynote Panel
                </h3>
                <p className="text-base text-faster-font-grey">
                    Colin Gotra, Yield Games Guild (YGG), Chief Operations
                    Officer
                    <br />
                    Jen Yu, Yield Games Guild, Head of Design
                </p>

                <h3 className="text-base sm:text-lg font-bold py-2 text-faster-green">
                    Co-Moderated By
                </h3>
                <p className="text-base text-faster-font-grey">
                    Erin Pangilinan (Founder and Chief Technology Officer,
                    FASTER Founder and National Board President)
                    <br />
                    Paul Gadi - OP Games, Co-Founder and Chief Technology
                    Officer
                </p>

                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    6:30PM - 7:30PM PST / 9:30PM - 10:30PM EST / 9:30AM -
                    10:30AM PHILIPPINE TIME
                </h3>
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    Filipinx Americans in Creative Entertainment Technology
                    Startups (FACETS) Networking Breakout
                </h3>
                <h3 className="text-base sm:text-lg font-bold text-faster-green pt-2">
                    Co-Facillitators
                </h3>
                <p className="text-base text-faster-font-grey">
                    Erin Pangilinan (Salamat Inc, Founder and Chief Technology
                    Officer, FASTER Founder and National Board President)
                    <br />
                    Ardees Rabang (Salamat Inc, Founder and Chief Production
                    Officer, FASTER Creative Advisor)
                    <br />
                    Hanna Lorica (FASTER FACETS Operations Coordinator,
                    Chainlink)
                </p>

                <div className="text-center pt-4">
                    <a
                        href="https://bit.ly/FASTERCON22D1"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2"
                    >
                        Register for FASTERCON DAY 1
                    </a>
                </div>
            </div>

            {/* schedule 2 */}
            <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-20">
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    FASTERCON Day 2 - FASTER Community Day Saturday, October 1st
                    9:00AM-12:00PM PST
                </h3>
                <p className="text-base sm:text-lg font-bold text-faster-green py-2">
                    *Filipinx American Fighting COVID19 ft. Filipino Young
                    Leaders Program (FYLPRO) and Council of Young Filipino
                    Americans in Medicine (CYFAM) - Panel
                </p>
                <p className="text-base sm:text-lg font-bold text-faster-green py-2">
                    *Interactive Breakouts for FASTER Community Members in
                    FASTER Components
                </p>

                <p className="text-base text-faster-green font-bold py-2 pl-10">
                    FASTER FUNKTion - Filipinx American Undergraduate Krew -
                    Component for post secondary education FASTER PROS -
                    Professional Employee Component FASTER FRESH - Component for
                    High Tech Startup Entrepreneurs and For FASTER Industry
                    Professional Breakouts - Employees, Founders, Entrepreneurs,
                    Investors, Creative
                </p>
                {/* Button for FASTERCON 2 RSVP */}
                <div className="text-center pt-4">
                    <a
                        href="https://bit.ly/FASTERCON22D2"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2"
                    >
                        Register for FASTERCON DAY 2
                    </a>
                </div>

                {/* Schedule Start */}
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    FASTERCON Day 2 Schedule
                </h3>
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    FASTER Community and Networking Day - 9:30AM-12:00PM PST
                </h3>
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    SATURDAY, OCTOBER 1 PANEL SESSION #1 - 9:30AM-10:00AM PST
                </h3>

                <p className="text-base text-faster-font-grey py-2 pl-8">
                    Filipino Young Leaders Program (FYLPRO) COVID19 Task Force
                    Update on Filipinx COVID19 Vaccine Survey by FASTER Adviser
                    and FYLPRO Vice Chair, COVID19 Task Force Lead - Leezel
                    Tanglao and CYFAM Founder, Dr. Melissa Palma Moderator: Dome
                    Lupac, Formerly, Centers for Disease Control and Prevention
                    (CDC) Foundation
                </p>

                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    SATURDAY, October 1 10:00AM-11:00PM PST - 2:00PM-3:00PM EST
                    NETWORKING BREAKOUT SESSION #2
                </h3>
                <h3 className="text-base sm:text-lg font-bold text-faster-green pl-8 py-2">
                    For post-secondary Filipinx American students.
                </h3>
                <h3 className="text-base sm:text-lg font-bold text-faster-green pl-8 py-2">
                    FASTER Filipinx American Undergraduate Krew (FUNKTion)
                    College Mentorship Breakouts by Role
                </h3>
                <p className="text-base font-bold text-faster-font-grey pl-10 py-2">
                    Track #1 - Filipinx Americans in Life Sciences
                    <br />
                    Track #2 - Filipinx Americans in Engineering (Software,
                    Hardware)
                    <br />
                    Track #3 - Filipinx Americans in Creative/Design
                    <br />
                    Track #4 - Filipinx Americans in Tech Enablement
                    <span className="font-normal">
                        {' '}
                        - Business Development, Marketing, Customer Success,
                        Operations, Sales, IP Law, etc.
                    </span>
                </p>
                <h3 className="text-base sm:text-lg lg:text-2xl font-bold py-2">
                    11:00AM-12:00PM PST - 2:00PM-3:00PM EST - NETWORKING
                    BREAKOUT SESSION #3
                </h3>
                <h3 className="text-base sm:text-lg font-bold py-2 pl-8 text-faster-green">
                    For FASTER Industry Professional Breakouts Filipinx American
                    Employees, Founders, Entrepreneurs, Investors
                </h3>
                <p className="text-base sm:text-lg text-faster-font-grey font-bold py-2 pl-10">
                    Session #3 FOR FASTER WORKING PROFESSIONALS FASTER PROS,
                    FASTER FRESH
                </p>
                <p className="text-base font-bold text-faster-font-grey py-2 pl-12">
                    Track #1 - FASTER PROS
                    <span className="font-normal">
                        {' '}
                        - Fighting for JEDI - Justice, Diversity Equity and
                        Inclusion
                    </span>
                </p>
                <p className="text-base font-bold text-faster-font-grey py-2 pl-12">
                    Track #2 - FASTER FAVES
                    <span className="font-normal">
                        {' '}
                        - FASTER Subgroups by VErtical - Choose Your Own
                        Adventure
                    </span>
                </p>
                <p className="text-base font-bold text-faster-font-grey py-2 pl-12">
                    Track #3 - FASTER FRESH
                    <span className="font-normal">
                        {' '}
                        - Entrepreneurs and Investors
                    </span>
                </p>

                {/* Register for FASTERCON DAY 2 */}
                <div className="text-center pt-4">
                    <a
                        href="https://bit.ly/FASTERCON22D2"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2"
                    >
                        Register for FASTERCON DAY 2
                    </a>
                </div>
            </div>
        </Layout>
    );
};

FasterconLander.propTypes = {
    pageContext: PropTypes.shape({
        landerPageData: PropTypes.shape({
            heroImage: PropTypes.shape({
                gatsbyImageData: PropTypes.shape({}),
            }),
            fasterFlyerMain: PropTypes.shape({
                gatsbyImageData: PropTypes.shape({}),
            }),
        }),
    }),
};

export default FasterconLander;
