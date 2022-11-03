import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
    query MyQuery {
        allShopifyProduct {
            nodes {
                title
                handle
                priceRangeV2 {
                    maxVariantPrice {
                        amount
                    }
                }
                description
                variants {
                    shopifyId
                    image {
                        src
                    }
                }
            }
        }
    }
`;

// eslint-disable-next-line react/prop-types
const Products = ({ data }) => {
    console.log(data);
    return <div></div>;
};

export default Products;
