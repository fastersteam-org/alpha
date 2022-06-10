const fetch = require('node-fetch');

// Create source nodes
exports.sourceNodes = async ({ actions, createNodeId, createContentDigest }) => {
    const { createNode } = actions;

    const NODE_TYPE = 'POKEMON';

    const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=3');
    const json = await response.json();
    const {results = []}  = json;

    results.forEach((node, index) => {
        createNode({
            ...node,
            id: createNodeId(`${NODE_TYPE}-${node.name}-${index}`),
            parent: null,
            children: [],
            internal: {
                type: NODE_TYPE,
                content: JSON.stringify(node),
                contentDigest: createContentDigest(node)
            }
        });
    });
}

//  create pages
exports.createPages = async ({ actions, graphql }) => {
    const { data } = await graphql(`
        query {
            allPokemon {
                edges {
                    node {
                        name
                        id
                    }
                }
            }
        }
    `);

    // data.allContentfulBlogPost.edges.forEach((blogPost) => {
    //     console.log('here is the slug', blogPost.node.slug);
    //     const { title, id, slug } = blogPost.node;
    //     actions.createPage({
    //         path: slug,
    //         context: {
    //             blogPost: blogPost.node,
    //         },
    //         component: require.resolve('./src/templates/blog-post.js'),
    //     })
    // });

    data.allPokemon.edges.forEach((pokemon) => {
        const { name, id } = pokemon.node;
        actions.createPage({
            path: name.replace(/ /g, "-"),
            context: {
                pokemon: pokemon.node,
            },
            component: require.resolve('./src/templates/pokemon.js'),
        })
    });
}