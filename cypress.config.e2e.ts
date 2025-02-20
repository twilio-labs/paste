import { defineConfig } from "cypress";

// eslint-disable-next-line import/no-default-export
// Cypress config to only run the site e2e tests, excluding the VRT tests.
export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    env: {
      USE_CYPRESS_VRT: process.env.USE_CYPRESS_VRT,
      CYPRESS_BASE_URL: process.env.CYPRESS_BASE_URL,
      OPENAI_API_SECRET: process.env.OPENAI_API_SECRET,
    },
    viewportWidth: 1440,
    viewportHeight: 1440,
    projectId: "pe4h41",
    retries: {
      runMode: 2,
      openMode: 2,
    },
    video: false,
    blockHosts: [
      "*.google-analytics.com",
      "*.codesandbox.io",
      "codesandbox.io",
      "*.loom.com",
      "*.youtube.com",
      "*.github.com",
      "*.googletagmanager.com",
    ],
    specPattern: ["cypress/**/*.spec.ts"],
    excludeSpecPattern: ["cypress/integration/sitemap-vrt/**/*"],
    defaultCommandTimeout: 6000,
    numTestsKeptInMemory: 0,
  },
});
