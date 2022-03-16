import React from 'react';

const Pokemon = ({ pageContext: { pokemon } }) => {
    return (
        <main>
            <h1>{pokemon.name}</h1>
        </main>
    )
}

export default Pokemon;