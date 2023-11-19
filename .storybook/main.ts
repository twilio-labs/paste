import path from "path";
import type { StorybookConfig } from "@storybook/react-vite";
import { mergeConfig } from "vite";
import turbosnap from "vite-plugin-turbosnap";
const config: StorybookConfig = {
  stories: [
    "../packages/**/*.stories.@(js|jsx|ts|tsx|mdx)",
    "../performance-benchmarks/**/*.stories.@(js|jsx|ts|tsx|mdx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "./addons/google-analytics/register",
    "@storybook/addon-mdx-gfm",
  ],
  framework: "@storybook/react-vite",
  features: {
    interactionsDebugger: true,
  },
  staticDirs: ["./static"],
  typescript: {
    // enable type checking
    check: true,
  },
  async viteFinal(config, { configType }) {
    const isTest = process.env.NODE_ENV === "test";
    return mergeConfig(config, {
      plugins:
        configType === "PRODUCTION"
          ? [
              turbosnap({
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
      resolve: {
        alias: {
          "next/link": path.resolve(__dirname, "./next"),
          "react-dom/client": path.resolve(__dirname, "../node_modules/react-dom/client"),
          "react-dom": path.resolve(__dirname, "../node_modules/react-dom/profiling"),
          "scheduler/tracing": path.resolve(__dirname, "../node_modules/scheduler/tracing-profiling"),
          // Avoid initial render issues for code blocks in prod build
          "react-syntax-highlighter/dist/esm": path.resolve(
            __dirname,
            "../node_modules/react-syntax-highlighter/dist/cjs",
          ),
          "react-syntax-highlighter": path.resolve(__dirname, "../node_modules/react-syntax-highlighter/dist/cjs"),
        },
        // Use source files for HMR and TurboSnap dependency map
        ...(!isTest && {
          mainFields: ["main:dev", "browser", "module", "main"],
        }),
      },
      optimizeDeps: {
        include: ["@storybook/addon-viewport", "chromatic", "@emotion/react/jsx-dev-runtime"],
      },
    });
  },
};
export default config;
