import type {StorybookConfig} from '@storybook/react-vite';
import {mergeConfig} from 'vite';
import turbosnap from 'vite-plugin-turbosnap';
import path from 'path';

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
    './addons/google-analytics/register',
  ],
  framework: {
    name: '@storybook/react-vite',
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
    autodocs: true,
    defaultName: 'Docs',
  },
  async viteFinal(config, {configType}) {
    const isTest = process.env.NODE_ENV === 'test';
    return mergeConfig(config, {
      plugins: configType === 'PRODUCTION' ? [turbosnap({rootDir: config.root ?? process.cwd()})] : [],
      resolve: {
        alias: {
          'next/link': path.resolve(__dirname, './next'),
          'react-dom/client': path.resolve(__dirname, '../node_modules/react-dom/client'),
          'react-dom': path.resolve(__dirname, '../node_modules/react-dom/profiling'),
          'scheduler/tracing': path.resolve(__dirname, '../node_modules/scheduler/tracing-profiling'),
        },
        ...(!isTest && {mainFields: ['main:dev', 'browser', 'module', 'main']}),
      },
      optimizeDeps: {
        include: ['@storybook/addon-viewport', 'chromatic', '@emotion/react/jsx-dev-runtime'],
      },
    });
  },
};

export default config;
