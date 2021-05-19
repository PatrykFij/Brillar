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
                background_color: `#663399`,
                theme_color: `#663399`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
                shopName: process.env.GATSBY_SHOP_NAME,
                // The storefront access token
                accessToken: process.env.GATSBY_ACCESS_TOKEN,
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
                extensions: ["js"],
                exclude: ["node_modules", ".cache", "public"],

                // Any eslint-webpack-plugin options below
            },
        },
        `gatsby-plugin-gatsby-cloud`,
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
