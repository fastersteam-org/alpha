import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BLOCKS } from '@contentful/rich-text-types';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import Layout from '../components/Layout';

// Render logic for homepage content model blocks
const richTextOptions = {
    renderNode: {
        [BLOCKS.HEADING_3]: (node, children) => (
            <h3 className="mt-8 sm:mt-10 lg:mt-14 text-base font-bold text-faster-green sm:text-lg lg:text-xl">
                {children}
            </h3>
        ),
        [BLOCKS.PARAGRAPH]: (node, children) => (
            <p className="mb-4 text-base sm:text-lg lg:text-xl">{children}</p>
        ),
    },
};

const convertPageTitle = (pageTitle, pageMap) => {
    console.log(pageMap['education']);
    if (pageTitle.toLowerCase() === 'home page') return pageMap['home'];
    if (pageTitle.toLowerCase() === 'education page')
        return pageMap['education'];
};

const pageButtonsMap = {
    education: {
        buttons: [
            {
                link: '/join',
                buttonText: 'FASTERCON22 MENTOR SIGN UP',
                type: 'internal',
            },
            {
                link: '/join',
                buttonText: 'FASTERCON22 MENTOR SIGN UP',
                type: 'internal',
            },
        ],
    },
    home: {
        buttons: [
            {
                link: 'https://bit.ly/FASTERCON22D1',
                buttonText: 'Register for FASTERCON DAY 1',
                type: 'external',
            },
            {
                link: 'https://bit.ly/FASTERCON22D2',
                buttonText: 'Register for FASTERCON DAY 2',
                type: 'external',
            },
        ],
    },
};

const renderPageButtons = (pageName) => {
    console.log('here is the page name', pageName);
    return (
        <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-20 flex flex-col items-center">
            {pageName.buttons.map((button, index) => {
                if (button.type === 'internal') {
                    return (
                        <Link
                            key={`${pageName}-button-${index}`}
                            to={button.link}
                            className={`inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2 ${
                                index > 0 ? 'mt-5' : ''
                            }`}
                        >
                            {button.buttonText}
                        </Link>
                    );
                }

                if (button.type === 'external') {
                    return (
                        <a
                            key={`${pageName}-button-${index}`}
                            href={button.link}
                            target="_blank"
                            rel="noreferrer"
                            className={`inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2 ${
                                index > 0 ? 'mt-5' : ''
                            }`}
                        >
                            {button.buttonText}
                        </a>
                    );
                }
            })}
            {/* <a
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
            </a> */}
        </div>
    );
};

const HomePage = ({ pageContext: { pageData } }) => (
    <Layout>
        <div className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-20 text-center">
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl lg:text-4xl uppercase">
                {pageData.header}
            </h2>
            <p className="mt-2.5 sm:mt-3 lg:mt-4 text-xl text-gray-900 sm:text-2xl lg:text-4xl">
                {pageData.subheader}
            </p>
        </div>

        {/* main image Section */}
        <div className="max-w-7xl pt-8 sm:pt-10 lg:pt-14 w-screen lg:w-auto -ml-4 sm:-ml-6 lg:ml-0 mx-auto">
            <div className="w-full mx-auto">
                <GatsbyImage
                    image={pageData.heroImage.gatsbyImageData}
                    alt=""
                />
            </div>
        </div>

        {/* Landing Content Header */}
        <div className="max-w-7xl mx-auto pt-8 sm:pt-10 lg:pt-14 px-4 sm:px-6 lg:px-20">
            <h2 className="text-xl font-bold text-faster-green sm:text-2xl lg:text-4xl">
                {pageData.contentHeader}
            </h2>
        </div>

        {/* About us Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
            {renderRichText(pageData.subsections, richTextOptions)}
        </div>

        {renderPageButtons(
            convertPageTitle(pageData.pageTitle, pageButtonsMap)
        )}

        {/* <div className="max-w-7xl mx-auto pt-4 px-4 sm:px-6 lg:px-20 flex flex-col items-center">
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
        </div> */}
    </Layout>
);

HomePage.propTypes = {
    pageContext: PropTypes.shape({
        pageData: PropTypes.shape({
            pageTitle: PropTypes.string.isRequired,
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
