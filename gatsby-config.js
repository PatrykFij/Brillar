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
            resolve: "gatsby-source-graphql",
            options: {
                // Arbitrary name for the remote schema Query type
                typeName: "SWAPI",
                // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
                fieldName: "cosmetics",
                // Url to query from
                url: "https://api-eu-central-1.graphcms.com/v2/cko70jj73xjcl01xt84pda944/master",
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
                accessToken: `5b45cc441a2b3bf0d835d3084d804180`,
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
