const path = require('path');

module.exports = {
    siteMetadata: {
        title: `Scelto AS - IT-konsulentselskap i Oslo-området`,
        siteUrl: `https://www.scelto.no`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
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
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-58669694-1',
            },
        },
    ],
    pathPrefix: '/next',
};
