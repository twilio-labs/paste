/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require('dotenv').config();

const gatsbyConfig = {
  siteMetadata: {
    title: 'Paste',
    description: 'Paste: The Design System for building Twilio customer experiences.',
    siteUrl: 'https://paste.twilio.design',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-145457417-1',
        // Anonymizes data sent to google
        anonymize: true,
        // Respects browser do not track (why isn't this default lol)
        respectDNT: true,
      },
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        // grab stuff in packages for indexing like changelogs, package.json, design token compiled files
        name: 'packages',
        path: `${__dirname}/../../packages/`,
        // but ignore all the build artifacts that we don't need so we don't fill graphql with a bunch of random stuff
        ignore: [
          '**/.*',
          '**/.cache/**',
          '**/public/**',
          '**/__snapshots__/**',
          '**/__fixtures__/**',
          '**/__tests__/**',
          '**/paste-website/**/*',
          '**/paste-theme-designer/**/*',
          '**/README.md',
          '**/*.js',
          '**/*.ts',
          '**/*.tsx',
          '**/*.d.ts.map',
          '**/*.build.json',
          '**/tsconfig.json',
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1632,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        defaultLayouts: {
          default: require.resolve('./src/layouts/DefaultLayout.tsx'),
          packages: require.resolve('./src/layouts/ChangelogLayout.tsx'),
          websiteCore: require.resolve('./src/layouts/GenericLayout.tsx'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
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

          if (node.relativePath.startsWith('paste-libraries') && node.relativePath.endsWith('package.json')) {
            return 'PasteLibraries';
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

          if (node.relativePath.endsWith('dist/themes/dark/tokens.gatsby.json')) {
            return 'PasteTokenDark';
          }

          return 'DefaultJson';
        },
      },
    },
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Paste: The Design System for building Twilio customer experiences',
        short_name: 'Paste',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#141c2c',
        display: 'standalone',
        icon: 'static/logo.svg',
      },
    },
    {
      resolve: 'gatsby-source-airtable',
      options: {
        apiKey: process.env.AIRTABLE_APIKEY,
        concurrency: 5,
        tables: [
          {
            baseId: process.env.AIRTABLE_BASEID,
            tableName: 'System',
          },
          {
            baseId: process.env.AIRTABLE_BASEID,
            tableName: 'Roadmap',
          },
          {
            baseId: process.env.AIRTABLE_BASEID,
            tableName: '2021 BPM',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};

module.exports = gatsbyConfig;
