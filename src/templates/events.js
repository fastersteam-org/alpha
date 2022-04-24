import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const Events = ({ pageContext: { title } }) => {
    return (
        <Layout>
            <h1>{title}</h1>
        </Layout>
    );
};

Events.propTypes = {
    pageContext: PropTypes.shape({
        title: PropTypes.string,
    }),
};

export default Events;
