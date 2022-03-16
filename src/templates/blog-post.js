import React from 'react';

const BlogPost = ({ pageContext: { blogPost } }) => {
    return (
        <main>
            <h1>{blogPost.title}</h1>
        </main>
    )
}

export default BlogPost;