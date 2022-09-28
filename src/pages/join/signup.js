import React from 'react';
import PropTypes from 'prop-types';
import querystring from 'query-string';
import Layout from '../../components/Layout';
import JoinForm from '../../components/JoinForm';

const SignUpPage = ({ location }) => (
    <Layout>
        <JoinForm referrer={querystring.parse(location.search)['ref'] || ''} />
    </Layout>
);

SignUpPage.propTypes = {
    location: PropTypes.shape({
        search: PropTypes.string,
    }),
};

export default SignUpPage;
