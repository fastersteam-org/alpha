require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
    siteMetadata: {
        title: `new`,
        siteUrl: `https://www.faster-steam${
            process.env.NODE_ENV === 'development' ? '-staging' : ''
        }.org`,
    },
    plugins: [
        {
            resolve: 'gatsby-source-contentful',
            options: {
                accessToken: process.env.CONTENTFUL_API_KEY,
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                environment: process.env.CONTENTFUL_ENV,
            },
        },
        {
            resolve: 'gatsby-source-shopify',
            options: {
                storeUrl: process.env.SHOPIFY_STORE_NAME,
                password: process.env.SHOPIFY_ADMIN_ACCESS_TOKEN,
            },
        },
        'gatsby-plugin-postcss',
        'gatsby-plugin-sass',
        'gatsby-plugin-image',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-mdx',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-netlify',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets\/svgs/, // See below to configure properly
                },
            },
        },
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

const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // Query for all products in Shopify
    const result = await graphql(`
        query MyQuery {
            allShopifyProduct {
                edges {
                    node {
                        title
                        handle
                        variants {
                            shopifyId
                            image {
                                src
                            }
                        }
                        priceRangeV2 {
                            maxVariantPrice {
                                amount
                            }
                        }
                        description
                    }
                }
            }
        }
    `);

    // Iterate over all products and create a new page using a template
    // The product "handle" is generated automatically by Shopify
    result.data.allShopifyProduct.edges.forEach(({ node }) => {
        createPage({
            path: `/products/${node.handle}`,
            component: path.resolve(`./src/templates/product.js`),
            context: {
                product: node,
            },
        });
    });
};
