import react from '@vitejs/plugin-react';

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
    // 'storybook-addon-gatsby',
    './addons/google-analytics/register',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {legacyRootApi: true},
  },
  features: {
    interactionsDebugger: true,
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

  docs: {
    docsPage: 'automatic',
    defaultName: 'Docs',
  },

  async viteFinal(config, {configType}) {
    return {
      ...config,
      plugins: config.plugins?.map((plugin) => {
        if (plugin?.[0]?.name === 'vite:react-babel') return react({jsxRuntime: 'classic'});
        return plugin;
      }),
      build: {
        ...config.build,
        rollupOptions: {
          ...config.build.rollupOptions,
          external: [...config.build.rollupOptions.external, 'react/jsx-runtime'],
        },
        commonjsOptions: {
          ...config.build.commonjsOptions,
          include: [/node_modules/],
          requireReturnsDefault: 'auto',
        },
      },
    };
  },
};
