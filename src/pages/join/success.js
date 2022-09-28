import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Layout from '../../components/Layout';

const JoinSuccessPage = () => (
    <Layout>
        <p>
            Thank you for submitting your membership profile information to
            FASTER.
        </p>
        <p className="mt-5">
            This information will be used to inform our community component
            programs for students, professionals, entrepreneurs, and investors.
        </p>
        <Link
            to="/"
            className={
                'inline-flex items-center rounded-md border border-transparent bg-faster-dark-green px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-faster-green focus:outline-none focus:ring-2 focus:ring-faster-green focus:ring-offset-2 mt-5'
            }
        >
            Go to Home
        </Link>
    </Layout>
);

JoinSuccessPage.propTypes = {};

export default JoinSuccessPage;
