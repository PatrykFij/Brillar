require(`dotenv`).config();

module.exports = {
    siteMetadata: {
        title: `Brillar`,
        description: `Brillar shop`,
        author: `fialek`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `brillar`,
                short_name: `brillar`,
                start_url: `/`,
                background_color: `#d9caa1`,
                theme_color: `#d9caa1`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
            },
        },
        {
            resolve: "gatsby-source-graphql",
            options: {
                // Arbitrary name for the remote schema Query type
                typeName: "SWAPI",
                // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
                fieldName: "cosmetics",
                // Url to query from
                url: process.env.GRAPH_CMS_API,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-vscode`,
                        options: {
                            theme: "Abyss", // Or install your favorite theme from GitHub
                        },
                    },
                ],
            },
        },
        {
            resolve: `gatsby-source-shopify`,
            options: {
                // The domain name of your Shopify shop.
                shopName: `brillar-jewelry`,
                // The storefront access token
                accessToken: process.env.SHOPIFY_ACCESS_TOKEN,
            },
        },
        {
            resolve: `gatsby-plugin-material-ui`,
            options: {
                stylesProvider: {
                    injectFirst: true,
                },
            },
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: "gatsby-plugin-eslint",
            options: {
                stages: ["develop"],
                extensions: ["js", "jsx"],
                exclude: ["node_modules", ".cache", "public"],

                // Any eslint-webpack-plugin options below
            },
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
