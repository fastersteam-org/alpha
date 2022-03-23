import React from "react"
import PropTypes from "prop-types"

const BlogPost = ({ pageContext: { blogPost } }) => {
    return (
        <main>
            <h1>{blogPost.title}</h1>
        </main>
    )
}

BlogPost.propTypes = {
    pageContext: PropTypes.shape({
        blogPost: PropTypes.shape({
            title: PropTypes.string.isRequired,
        }),
    }),
}

export default BlogPost
