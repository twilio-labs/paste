import type {StorybookConfig} from '@storybook/react-vite';
import {mergeConfig} from 'vite';

const config: StorybookConfig = {
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
  },
  docs: {
    docsPage: 'automatic',
    defaultName: 'Docs',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@twilio-paste/design-tokens/dist/tokens.generic',
          '@storybook/addon-viewport',
          'chromatic/isChromatic',
        ],
      },
      build: {
        rollupOptions: {
          external: ['gatsby'],
        },
      },
    });
  },
};

export default config;
