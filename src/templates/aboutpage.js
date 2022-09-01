import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';

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
        <div className="max-w-7xl pt-8 sm:pt-10 lg:pt-14 w-screen mx-auto">
            <div className="w-full mx-auto">
                <GatsbyImage
                    image={aboutPageData.heroImage.gatsbyImageData}
                    alt=""
                />
            </div>
        </div>

        {/* Team Direction and Goals */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-20">
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
