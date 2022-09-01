import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';

// Render logic for homepage content model blocks
const richTextOptions = {
    renderNode: {
        [BLOCKS.HEADING_3]: (node, children) => (
            <h3 className="pt-8 sm:pt-10 lg:pt-14 text-base font-bold text-faster-green sm:text-lg lg:text-xl">
                {children}
            </h3>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="text-base sm:text-lg lg:text-xl">{children}</p>
        ),
    },
};

const HomePage = ({ pageContext: { homePageData } }) => (
    <Layout>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-20 text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-4xl uppercase">
                {homePageData.header}
            </h2>
            <p className="mt-2.5 sm:mt-3 lg:mt-4 text-xl text-gray-900 sm:text-2xl lg:text-4xl">
                {homePageData.subheader}
            </p>
        </div>

        {/* main image Section */}
        <div className="max-w-7xl pt-8 sm:pt-10 lg:pt-14 w-screen mx-auto">
            <div className="w-full mx-auto">
                <GatsbyImage
                    image={homePageData.heroImage.gatsbyImageData}
                    alt=""
                />
            </div>
        </div>

        {/* Landing Content Header */}
        <div className="max-w-7xl mx-auto pt-8 sm:pt-10 lg:pt-14 px-4 sm:px-6 lg:px-20">
            <h2 className="text-xl font-bold text-faster-green sm:text-2xl lg:text-4xl">
                {homePageData.contentHeader}
            </h2>
        </div>

        {/* About us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pb-20">
            {renderRichText(homePageData.subsections, richTextOptions)}
        </div>
    </Layout>
);

HomePage.propTypes = {
    pageContext: PropTypes.shape({
        homePageData: PropTypes.shape({
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

export default HomePage;
