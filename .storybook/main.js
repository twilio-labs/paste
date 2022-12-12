const path = require('path');

module.exports = {
  stories: [
    '../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../performance-benchmarks/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-addon-gatsby',
    './addons/google-analytics/register',
  ],
  framework: '@storybook/react',
  features: {
    interactionsDebugger: true,
    reactOptions: {legacyRootApi: true},
    storyStoreV7: true,
    babelModeV7: true,
  },
  staticDirs: ['./static'],
  typescript: {
    // enable type checking
    check: true,
    checkOptions: {
      typescript: {
        configFile: 'tsconfig.json',
        configOverwrite: {
          compilerOptions: {isolatedModules: false},
          exclude: [
            'node_modules',
            'docs',
            'dist',
            'lib',
            'bin',
            'public',
            '.cache',
            '.jest-cache',
            '.next',
            '.yarn',
            'cjs',
            'esm',
            '**/__testfixtures__/**/*',
            '**/__fixtures__/**/*',
            'packages/paste-nextjs-template/**/*',
            'packages/paste-website/**/*',
            'packages/paste-cra-template/template/**/*',
            'packages/paste-token-contrast-checker/**/*',
            '**/__tests__/**',
          ],
        },
      },
    },
    // choose react-docgen-typescript to generate the prop tables
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // don't include node_module props as you'll cause the machine to run out of memory on our repo
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  core: {
    builder: 'webpack5',
  },

  webpackFinal: async (config) => {
    // Need to custom alias react-dom and scheduler for component profiling in production
    // mode. Without doing so, no React profiling data can be extracted from stories
    // When they are deployed.
    const customAlias = {
      'react-dom': path.resolve(__dirname, '../node_modules/react-dom/profiling'),
      'scheduler/tracing': 'scheduler/tracing-profiling',
      '@emotion/core': path.resolve(__dirname, '../node_modules/@emotion/react'),
      '@emotion/styled': path.resolve(__dirname, '../node_modules/@emotion/styled'),
      'emotion-theming': path.resolve(__dirname, '../node_modules/@emotion/react'),
    };
    config.resolve.alias = config.resolve.alias == null ? customAlias : {...config.resolve.alias, ...customAlias};

    // FIX: Tell Storybook to look at dev files if available
    config.resolve.mainFields = ['main:dev', 'browser', 'module', 'main'];

    // https://github.com/prismicio-community/storybook-addon-gatsby/issues/7
    config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/];

    return config;
  },
};
