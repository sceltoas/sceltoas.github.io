const path = require('path');


module.exports = {
    siteMetadata: {
        title: `Scelto AS - IT-konsulentselskap i Oslo`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-less`,
        `gatsby-plugin-postcss`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.join(__dirname, `src`, `images`),
            },
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`
    ],
    pathPrefix: "/next",
}