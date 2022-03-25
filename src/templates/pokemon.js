import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const Pokemon = ({ pageContext: { pokemon } }) => {
    return (
        <Layout>
            <h1>{pokemon.name}</h1>
        </Layout>
    );
};

Pokemon.propTypes = {
    pageContext: PropTypes.shape({
        pokemon: PropTypes.shape({
            name: PropTypes.string,
        }),
    }),
};

export default Pokemon;
