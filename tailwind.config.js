module.exports = {
    content: ['./src/**/*.js'],
    theme: {
        extend: {
            colors: {
                'faster-green': '#1BB39E',
                'faster-grey': '#474E4D',
                'faster-font-grey': '#949494',
                'faster-dark-green': '#118272',
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        // ...
    ],
};
