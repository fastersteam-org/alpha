module.exports = {
    siteMetadata: {
        title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: 'gOvrgzU11lL72gv9xRt9d27CPm1QrinNfk-mQcqMRzc',
                spaceId: 'mmdje39fg5u0',
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
