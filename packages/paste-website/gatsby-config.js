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
        ignore: ['**/components/**/*', '**/utilities/**/*'],
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
        name: 'utilities',
        path: `${__dirname}/src/pages/utilities`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'websiteCore',
        path: `${__dirname}/`,
        ignore: ['**/.cache/**', '**/public/**', '**/src/**/*', '**/static/**', '**/types/**'],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1632,
            linkImagesToOriginal: false,
          },
        }, ],
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
        },
        gatsbyRemarkPlugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1632,
            linkImagesToOriginal: false,
          },
        }, ],
      },
    },
    {
      resolve: 'gatsby-transformer-json',
      options: {
        typeName: ({
          node
        }) => {
          if (node.relativePath.startsWith('paste-core/components') && node.relativePath.endsWith('package.json')) {
            return 'PasteComponent';
          }

          if (node.relativePath.startsWith('paste-core/utilities') && node.relativePath.endsWith('package.json')) {
            return 'PasteUtility';
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
        name: `Paste: An Internal Design System for Twilio`,
        short_name: `Paste`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#f22f46`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
  ],
};
