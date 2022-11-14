import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import MemberDescription from '../components/MemberDescription';

const AboutPage = ({ pageContext: { aboutPageData } }) => (
    <Layout>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-20 text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-4xl uppercase">
                FASTER LEADERSHIP TEAM
            </h2>
            <p className="mt-2.5 sm:mt-3 lg:mt-4 text-lg text-gray-900 sm:text-xl lg:text-3xl font-medium">
                FASTER National Board of Directors
            </p>
        </div>

        {/* main image Section */}
        <div className="max-w-7xl pt-8 sm:pt-10 lg:pt-14 w-screen lg:w-auto -ml-4 sm:-ml-6 lg:ml-0 mx-auto">
            <div className="w-full mx-auto">
                <GatsbyImage
                    image={aboutPageData.heroImage.gatsbyImageData}
                    alt=""
                />
            </div>
        </div>

        {/* Team Direction and Goals */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-10 lg:pt-14">
            <p className="text-base sm:text-lg lg:text-xl mb-8">
                FASTER operates under the leadership and direction of our
                National Board of Directors, Advisors, Committee Members, and in
                partnership with select community partners at the local, state,
                and national level to continue to address the dynamic needs of
                the Filipinx American community in the science and technology
                ecosystem. New leadership will be filled on an ongoing basis as
                our organization scales and grows.
            </p>
            <p className="text-base sm:text-lg lg:text-xl">
                Learn more about our FASTER National Board of Directors,
                Advisers, and Committee Members (Tech, Creative).
            </p>
        </div>

        {/* TEAM LISTING */}
        <MemberDescription />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-10 lg:pt-14">
            <h3 className="text-base sm:text-lg lg:text-2xl py-2">
                National Board of Directors
            </h3>
            <p className="text-base py-2">
                Erin Pangilinan - FASTER Founder, National Board President
            </p>
            <p className="text-base py-2">
                Christopher de Leon - Tech Committee Co-Chair (Web Team)
            </p>
            <p className="text-base py-2">
                Stefanie Deo - Tech Committee Co-Chair (Data Team)
            </p>
            <p className="text-base py-2">AJ Sales - FASTER Education</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-10 lg:pt-14">
            <h3 className="text-base sm:text-lg lg:text-2xl py-2">Advisors</h3>
            <p className="text-base py-2">
                Charity Nicolas, FASTER Education - Advisor (past Board
                Secretary, Education Component Director)
            </p>
            <p className="text-base py-2">
                Ian Gomez - FASTER Sponsorships (formerly FASTER Marketing)
            </p>
            <p className="text-base py-2">
                Leezel Tanglao - FASTER Media Adviser
            </p>
            <p className="text-base py-2">Monika Jo - FASTER Media Adviser</p>
            <p className="text-base py-2">
                Aldrin Montana - FASTER Tech Committee Adviser
            </p>
            <p className="text-base py-2">John Morada</p>
            <p className="text-base py-2">
                Fred Madrid - FASTER Creative Adviser and Logo Designer
            </p>
            <p className="text-base py-2">
                Kristian Kabuay - FASTER Creative Adviser
            </p>
            <p className="text-base py-2">
                Ardees Rabang - FASTER Creative Adviser
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-10 lg:pt-14">
            <h3 className="text-base sm:text-lg lg:text-2xl py-2">
                FASTER FRESH Advisors
            </h3>
            <p className="text-base py-2">Earl Martin Valencia</p>
            <p className="text-base py-2">Kendrick Kho</p>
            <p className="text-base py-2">Kenn Daniel So</p>
            <p className="text-base py-2">Christina Laskowski</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-10 lg:pt-14">
            <h3 className="text-base sm:text-lg lg:text-2xl py-2">
                Tech Committee
            </h3>
            <p className="text-base py-2">
                Christopher de Leon, Tech Committee Co-Chair
            </p>
            <p className="text-base py-2">Dan Magsalasang</p>
            <p className="text-base py-2">Yssa Pangilinan</p>
            <p className="text-base py-2">Max Nakpil</p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-8 sm:pt-10 lg:pt-14">
            <h3 className="text-base sm:text-lg lg:text-2xl py-2">
                Past National Leadership
            </h3>
            <p className="text-base py-2">
                Donny Rojo, FASTER Treasurer (formerly Filipinos and Asian
                Americans at Amazon), currently at Meta
            </p>
            <p className="text-base py-2">
                Jamie Cristal, FASTER Creative Director, Filipinos@Airbnb
            </p>
            <p className="text-base py-2">
                Evelyn Obamos, FASTER PROS Co-Chair, Filipinos@Pinterest,
                currently at Stripe
            </p>
            <p className="text-base py-2">
                Corrina Calanoc, FASTER Education - Youth Outreach Liason,
                Beyond 12, Data Engineer
            </p>
            <p className="text-base py-2">
                John Salazar, FASTER Education - Formerly Salesforce, SF and NY,
                now at Linkedin
            </p>
        </div>
    </Layout>
);

AboutPage.propTypes = {
    pageContext: PropTypes.shape({
        aboutPageData: PropTypes.shape({
            heroImage: PropTypes.shape({
                gatsbyImageData: PropTypes.shape({}),
            }),
        }),
    }),
};

export default AboutPage;
