const fetch = require('node-fetch');

// Create source nodes
exports.sourceNodes = async ({
    actions,
    createNodeId,
    createContentDigest,
}) => {
    const { createNode } = actions;

    const NODE_TYPE = 'POKEMON';

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=3');
    const json = await response.json();
    const { results = [] } = json;

    results.forEach((node, index) => {
        createNode({
            ...node,
            id: createNodeId(`${NODE_TYPE}-${node.name}-${index}`),
            parent: null,
            children: [],
            internal: {
                type: NODE_TYPE,
                content: JSON.stringify(node),
                contentDigest: createContentDigest(node),
            },
        });
    });
};

//  create pages
exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            allContentfulBlogPost {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
            allPokemon {
                edges {
                    node {
                        name
                        id
                    }
                }
            }
            allContentfulHomePage {
                edges {
                    node {
                        pageTitle
                        subheader
                        subsections {
                            raw
                        }
                        contentHeader
                        header
                        heroImage {
                            gatsbyImageData(layout: FULL_WIDTH)
                            title
                        }
                        slug
                    }
                }
            }
            allContentfulFasterconLander {
                edges {
                    node {
                        id
                        heroImage {
                            gatsbyImageData
                        }
                        fasterFlyerMain {
                            gatsbyImageData(width: 527)
                        }
                        fasterSpeakers1 {
                            gatsbyImageData(width: 527)
                        }
                    }
                }
            }
            allContentfulAboutPage {
                edges {
                    node {
                        id
                        heroImage {
                            gatsbyImageData
                        }
                    }
                }
            }
        }
    `);

    const { createRedirect } = actions;

    // fastercon redirect
    // createRedirect({
    //     fromPath: '/fastercon',
    //     toPath: 'https://fastersteam.notion.site/fastersteam/FASTERCON21-e0655c8ee9b84c7fa9cf39859f7a2200',
    //     isPermanent: true,
    //     force: true,
    // });

    // redirect for API backend
    createRedirect({
        fromPath: '/api/*',
        toPath: 'http://128.199.9.189/:splat',
        isPermanent: true,
        force: true,
        statusCode: 200,
    });

    data.allContentfulHomePage.edges.forEach((edge) => {
        const { slug } = edge.node;
        actions.createPage({
            path: slug,
            context: {
                pageData: edge.node,
            },
            component: require.resolve('./src/templates/homepage.js'),
        });
    });

    // FASTERCON Lander Render
    const landerPage = data.allContentfulFasterconLander.edges[0];
    actions.createPage({
        path: '/fastercon',
        context: {
            landerPageData: landerPage.node,
        },
        component: require.resolve('./src/templates/fastercon-lander.js'),
    });

    // About Page Render
    const aboutPage = data.allContentfulAboutPage.edges[0];
    actions.createPage({
        path: '/about',
        context: {
            aboutPageData: aboutPage.node,
        },
        component: require.resolve('./src/templates/aboutpage.js'),
    });

    // Team Page Render
    const teamPage = data.allContentfulAboutPage.edges[0];
    actions.createPage({
        path: '/team',
        context: {
            teamPageData: teamPage.node,
        },
        component: require.resolve('./src/templates/teampage.js'),
    });

    // Blog Post Render
    data.allContentfulBlogPost.edges.forEach((blogPost) => {
        const { slug } = blogPost.node;
        actions.createPage({
            path: slug,
            context: {
                blogPost: blogPost.node,
            },
            component: require.resolve('./src/templates/blog-post.js'),
        });
    });

    // Pokemon Page Render
    data.allPokemon.edges.forEach((pokemon) => {
        const { name } = pokemon.node;
        actions.createPage({
            path: name.replace(/ /g, '-'),
            context: {
                pokemon: pokemon.node,
            },
            component: require.resolve('./src/templates/pokemon.js'),
        });
    });
};
