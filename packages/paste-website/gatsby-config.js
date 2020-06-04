/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

// const queries = require('./src/utils/algolia');

require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Paste',
    description: 'Paste: The Design System for building Twilio customer experiences.',
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
          '**/paste-website/**/*',
          '**/README.md',
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
        ignore: ['**/components/**/*', '**/primitives/**/*', '**/layout/**/*', '**/x-ray-spex/**/*'],
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'primitives',
        path: `${__dirname}/src/pages/primitives`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'layout',
        path: `${__dirname}/src/pages/layout`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'xRaySpex',
        path: `${__dirname}/src/pages/x-ray-spex`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: ' ',
        path: `${__dirname}/`,
        ignore: ['**/.cache/**', '**/public/**', '**/src/**/*', '**/static/**', '**/types/**'],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1632,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          default: require.resolve('./src/layouts/DefaultLayout.tsx'),
          packages: require.resolve('./src/layouts/GenericLayout.tsx'),
          websiteCore: require.resolve('./src/layouts/GenericLayout.tsx'),
          xRaySpex: require.resolve('./src/layouts/XRaySpex.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1632,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({node}) => {
          if (node.relativePath.startsWith('paste-core/components') && node.relativePath.endsWith('package.json')) {
            return 'PasteComponent';
          }

          if (node.relativePath.startsWith('paste-core/primitives') && node.relativePath.endsWith('package.json')) {
            return 'PastePrimitive';
          }

          if (node.relativePath.startsWith('paste-core/layout') && node.relativePath.endsWith('package.json')) {
            return 'PasteLayout';
          }

          if (node.relativePath.startsWith('paste-theme') && node.relativePath.endsWith('package.json')) {
            return 'PasteThemePackage';
          }

          if (node.relativePath.startsWith('paste-design-tokens') && node.relativePath.endsWith('package.json')) {
            return 'PasteDesignTokensPackage';
          }

          if (node.relativePath.endsWith('dist/tokens.gatsby.json')) {
            return 'PasteTokenDefault';
          }

          if (node.relativePath.endsWith('dist/themes/sendgrid/tokens.gatsby.json')) {
            return 'PasteTokenSendGrid';
          }

          if (node.relativePath.endsWith('dist/themes/console/tokens.gatsby.json')) {
            return 'PasteTokenConsole';
          }

          return 'DefaultJson';
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-145457417-1',
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Paste: The Design System for building Twilio customer experiences`,
        short_name: `Paste`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f22f46`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.AIRTABLE_APIKEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASEID,
            tableName: `System`,
            tableView: `Roadmap`,
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.GATSBY_ALGOLIA_APP_ID,
    //     apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
    //     indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    //     queries,
    //     chunkSize: 10000,
    //   },
    // },
  ],
};
