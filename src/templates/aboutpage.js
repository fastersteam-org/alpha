import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
// import { BLOCKS } from '@contentful/rich-text-types';
// import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';

// Render logic for homepage content model blocks
// const richTextOptions = {
//     renderNode: {
//         [BLOCKS.HEADING_3]: (node, children) => (
//             <h3 className="pt-8 sm:pt-10 lg:pt-14 text-base font-bold text-faster-green sm:text-lg lg:text-xl">
//                 {children}
//             </h3>
//         ),
//         [BLOCKS.PARAGRAPH]: (node, children) => (
//             <p className="text-base sm:text-lg lg:text-xl">{children}</p>
//         ),
//     },
// };

const AboutPage = ({ pageContext: { aboutPageData } }) => (
    <Layout>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-20 text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-4xl uppercase"></h2>
            <p className="mt-2.5 sm:mt-3 lg:mt-4 text-xl text-gray-900 sm:text-2xl lg:text-4xl"></p>
        </div>

        {/* main image Section */}
        <div className="max-w-7xl pt-8 sm:pt-10 lg:pt-14 w-screen mx-auto">
            <div className="w-full mx-auto relative pb-[56.25%] bg-indigo-600">
                <GatsbyImage
                    className="h-full w-full absolute top-0 left-0"
                    image={aboutPageData.heroImage.gatsbyImageData}
                />
            </div>
        </div>

        {/* Landing Content Header */}
        <div className="max-w-7xl mx-auto pt-8 sm:pt-10 lg:pt-14 px-4 sm:px-6 lg:px-20">
            <h2 className="text-xl font-bold text-faster-green sm:text-2xl lg:text-4xl"></h2>
        </div>

        {/* About us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-20"></div>
    </Layout>
);

AboutPage.propTypes = {
    pageContext: PropTypes.shape({
        aboutPageData: PropTypes.shape({
            header: PropTypes.string.isRequired,
            contentHeader: PropTypes.string.isRequired,
            subheader: PropTypes.string.isRequired,
            heroImage: PropTypes.shape({
                gatsbyImageData: PropTypes.shape({}),
            }),
            subsections: PropTypes.shape({
                raw: PropTypes.string.isRequired,
            }),
        }),
    }),
};

export default AboutPage;
