import { graphql, useStaticQuery } from "gatsby";

const AllShopifyProductsQuery = graphql`
    query allShopifyProduct {
        allShopifyProduct(sort: { fields: [title] }) {
            edges {
                node {
                    title
                    images {
                        originalSrc
                    }
                    shopifyId
                    handle
                    description
                    availableForSale
                    priceRange {
                        maxVariantPrice {
                            amount
                        }
                        minVariantPrice {
                            amount
                        }
                    }
                }
            }
        }
    }
`;

export const useStaticGetAllShopifyProductsQuery = () => useStaticQuery(AllShopifyProductsQuery);
