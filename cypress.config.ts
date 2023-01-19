import {defineConfig} from 'cypress';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8000',
    env: {
      USE_CYPRESS_VRT: process.env.USE_CYPRESS_VRT,
    },
    viewportWidth: 1440,
    viewportHeight: 1440,
    projectId: 'pe4h41',
    retries: {
      runMode: 2,
      openMode: 2,
    },
    video: false,
    blockHosts: [
      '*.google-analytics.com',
      '*.codesandbox.io',
      'codesandbox.io',
      '*.loom.com',
      '*.youtube.com',
      '*.github.com',
      '*.googletagmanager.com',
    ],
    specPattern: ['cypress/**/*.spec.ts'],
  },
});
