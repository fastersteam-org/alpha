import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';

const BlogPost = ({ pageContext: { blogPost } }) => {
    return (
        <Layout>
            <h1>{blogPost.title}</h1>
        </Layout>
    );
};

BlogPost.propTypes = {
    pageContext: PropTypes.shape({
        blogPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    }),
};

export default BlogPost;
