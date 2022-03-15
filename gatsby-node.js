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
        }
    `);

    data.allContentfulBlogPost.edges.forEach((blogPost) => {
        console.log('here is the slug', blogPost.node.slug);
        const { title, id, slug } = blogPost.node;
        actions.createPage({
            path: slug,
            context: {
                blogPost: blogPost.node,
            },
            component: require.resolve('./src/templates/blog-post.js'),
        })
    })
}