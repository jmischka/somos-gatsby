require('dotenv').config()

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `SOMOS HOSPITALITY`,
    description: `Somos Hospitality is a service that...`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'e9ry6f22',
        dataset: 'production',
        watchMode: true,
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
}