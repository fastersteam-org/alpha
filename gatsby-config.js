module.exports = {
    siteMetadata: {
        title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'M8PQlTYcsoFbLKSu2DoaWZcDrlLla3wzaLPfDdB_p3M',
                spaceId: 'w05unrqtrsj4',
                environment: 'Staging',
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'pages',
                path: './src/pages/',
            },
            __key: 'pages',
        },
    ],
};
