const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  stories: [
    // components
    '../packages/paste-core/components/alert/stories/*.stories.tsx',
    '../packages/paste-core/components/alert-dialog/stories/*.stories.tsx',
    '../packages/paste-core/components/anchor/stories/*.stories.tsx',
    '../packages/paste-core/components/avatar/stories/*.stories.tsx',
    '../packages/paste-core/components/breadcrumb/stories/*.stories.tsx',
    '../packages/paste-core/components/button/stories/*.stories.tsx',
    '../packages/paste-core/components/card/stories/*.stories.tsx',
    '../packages/paste-core/components/checkbox/stories/*.stories.tsx',
    '../packages/paste-core/components/combobox/stories/*.stories.tsx',
    '../packages/paste-core/components/date-picker/stories/*.stories.tsx',
    '../packages/paste-core/components/disclosure/stories/*.stories.tsx',
    '../packages/paste-core/components/heading/stories/*.stories.tsx',
    '../packages/paste-core/components/help-text/stories/*.stories.tsx',
    '../packages/paste-core/components/inline-control-group/stories/*.stories.tsx',
    '../packages/paste-core/components/input/stories/*.stories.tsx',
    '../packages/paste-core/components/input-box/stories/*.stories.tsx',
    '../packages/paste-core/components/label/stories/*.stories.tsx',
    '../packages/paste-core/components/list/stories/*.stories.tsx',
    '../packages/paste-core/components/menu/stories/*.stories.tsx',
    '../packages/paste-core/components/modal/stories/*.stories.tsx',
    '../packages/paste-core/components/pagination/stories/*.stories.tsx',
    '../packages/paste-core/components/paragraph/stories/*.stories.tsx',
    '../packages/paste-core/components/popover/stories/*.stories.tsx',
    '../packages/paste-core/components/radio-group/stories/*.stories.tsx',
    '../packages/paste-core/components/screen-reader-only/stories/*.stories.tsx',
    '../packages/paste-core/components/select/stories/*.stories.tsx',
    '../packages/paste-core/components/separator/stories/*.stories.tsx',
    '../packages/paste-core/components/skeleton-loader/stories/*.stories.tsx',
    '../packages/paste-core/components/spinner/stories/*.stories.tsx',
    '../packages/paste-core/components/table/stories/*.stories.tsx',
    '../packages/paste-core/components/tabs/stories/*.stories.tsx',
    '../packages/paste-core/components/textarea/stories/*.stories.tsx',
    '../packages/paste-core/components/time-picker/stories/*.stories.tsx',
    '../packages/paste-core/components/toast/stories/*.stories.tsx',
    '../packages/paste-core/components/tooltip/stories/*.stories.tsx',
    '../packages/paste-core/components/truncate/stories/*.stories.tsx',
    // layout
    '../packages/paste-core/layout/aspect-ratio/stories/*.stories.tsx',
    '../packages/paste-core/layout/flex/stories/*.stories.tsx',
    '../packages/paste-core/layout/grid/stories/*.stories.tsx',
    '../packages/paste-core/layout/media-object/stories/*.stories.tsx',
    '../packages/paste-core/layout/stack/stories/*.stories.tsx',
    // primitives
    '../packages/paste-core/primitives/box/stories/*.stories.tsx',
    '../packages/paste-core/primitives/combobox/stories/*.stories.tsx',
    '../packages/paste-core/primitives/disclosure/stories/*.stories.tsx',
    '../packages/paste-core/primitives/menu/stories/*.stories.tsx',
    '../packages/paste-core/primitives/modal-dialog/stories/*.stories.tsx',
    '../packages/paste-core/primitives/non-modal-dialog/stories/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    'storybook-addon-performance',
  ],
  typescript: {
    // enable type checking
    check: true,
    checkOptions: {
      // check all ts and tsx files, but not fixtures as they include errors on purpose
      reportFiles: [
        'packages/**/*.{ts,tsx}',
        '!**/__testfixtures__/**/*',
        '!**/__fixtures__/**/*',
        // This has it's own type check
        '!packages/paste-nextjs-template/**/*',
        '!packages/paste-website/**/*',
        // ignore the template files as they don't have dependencies to reference, hence the errors
        '!packages/paste-cra-template/template/**/*',
      ],
    },
    // choose react-docgen-typescript to generate the prop tables
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      // don't include node_module props as you'll cause the machine to run out of memory on our repo
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
    },
  },

  webpackFinal: async (config) => {
    const customPlugins = [
      new DirectoryNamedWebpackPlugin({honorPackage: ['main:dev', 'main'], exclude: /node_modules/}),
    ];

    config.resolve.plugins =
      config.resolve.plugins == null ? customPlugins : [...config.resolve.plugins, ...customPlugins];

    return config;
  },
};
