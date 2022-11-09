import React from 'react';
import { graphql } from 'gatsby';
import ProductCard from '../components/ProductCard';

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
    const { nodes } = data.allShopifyProduct;
    return (
        <div>
            {nodes?.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    );
};

export default Products;
