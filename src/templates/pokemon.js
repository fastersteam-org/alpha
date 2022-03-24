import React from 'react';
import PropTypes from 'prop-types';

const Pokemon = ({ pageContext: { pokemon } }) => {
    return (
        <main>
            <h1>{pokemon.name}</h1>
        </main>
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
