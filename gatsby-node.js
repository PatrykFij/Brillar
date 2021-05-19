const path = require(`path`);

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            modules: [path.resolve(__dirname, "src"), "node_modules"],
        },
    });
};

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;
    const { data } = await graphql(`
        query {
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
    `);

    data.allShopifyProduct.edges.forEach(({ node }) => {
        createPage({
            path: `/products/${node.handle}`,
            component: path.resolve(`./src/templates/product.js`),
            context: {
                shopifyProduct: node,
            },
        });
    });
};
