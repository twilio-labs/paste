/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Paste',
    description: 'Paste, a design system for Twilio.',
    siteUrl: 'https://paste.twilio.design',
  },
  plugins: [
    `gatsby-plugin-typescript`,
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'packages',
        path: `${__dirname}/../../packages/`,
        ignore: [
          '**/.*',
          '**/.cache/**',
          '**/public/**',
          '**/__snapshots__/**',
          '**/__fixtures__/**',
          '**/__tests__/**',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'components',
        path: `${__dirname}/src/pages/components`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/templates/index.tsx'),
          components: require.resolve('./src/templates/components.tsx'),
        },
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({node}) => {
          if (node.relativePath.startsWith('paste-core/components') && node.relativePath.endsWith('package.json')) {
            return 'PasteComponent';
          }

          if (node.relativePath.startsWith('paste-core/utilities') && node.relativePath.endsWith('package.json')) {
            return 'PasteUtility';
          }

          if (node.relativePath.endsWith('gatsby.json')) {
            return 'PasteToken';
          }

          return 'DefaultJson';
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-xxxxxxx-x',
      },
    },
    'gatsby-plugin-sitemap',
  ],
};
