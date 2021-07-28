export const TWILIO_RED = '#F22F46';
export const TWILIO_BLUE = '#0D122B';
export const PSA_ALERT_HEIGHT = 40;
export const PASTE_THEME_ALERT_HEIGHT = 54;
export const SITE_MASTHEAD_HEIGHT = 76;
/* Note:
 * Changing the mobile breakpoint should be reflected
 * in styles/docSearch.ts
 */
export const SITE_BREAKPOINTS = ['768px', '1024px', '1220px', '1880px'];
export const SITE_CONTENT_MAX_WIDTH = '1440px';

// Used to 'bleed' sections together. GettingStarted+Popular
export const HOMEPAGE_SECTION_OVERFLOW_OFFSET = 150;

export const STICKY_COLUMN_OFFSET = 20 + PSA_ALERT_HEIGHT + SITE_MASTHEAD_HEIGHT;
export const STICKY_SIDEBAR_OFFSET = PSA_ALERT_HEIGHT + SITE_MASTHEAD_HEIGHT;

export const OPENGRAPH_SERVICE_URL = (path: string): string =>
  `https://og-image-test-cyan.vercel.app/api/screenshot?page=${path}`;

export const PASTE_PACKAGE_PREFIX = '@twilio-paste/';
export const STORYBOOK_DOMAIN = 'https://main--5e53448165911c0022e68c74.chromatic.com';

// IDs for skip links
export const PASTE_DOCS_CONTENT_AREA = 'paste-docs-content-area';
export const PASTE_DOCS_SEARCH_INPUT = 'paste-docs-search-input';
export const PASTE_DOCS_SEARCH_INPUT_MOBILE = 'paste-docs-search-input-mobile';

// env variables
export const DATADOG_APPLICATION_ID = process.env.GATSBY_DATADOG_APPLICATION_ID || 'no env variable';
export const DATADOG_CLIENT_TOKEN = process.env.GATSBY_DATADOG_CLIENT_TOKEN || 'no env variable';
export const DOCSEARCH_APIKEY = process.env.GATSBY_DOCSEARCH_APIKEY;
// Netlify provides an environment variable called CONTEXT which reflects their build context https://docs.netlify.com/site-deploys/overview/#deploy-contexts
// We need to use this to know where the Gatsby site is being run for metrics tracking. Gatsby env variables all need
// start with GATSBY_, so GATSBY_ENVIRONMENT_CONTEXT is just a re-implementation of Netlify's $CONTEXT
export type EnvironmentContext = 'production' | 'deploy-preview' | 'branch-deploy' | 'local';
export const ENVIRONMENT_CONTEXT: EnvironmentContext =
  (process.env.GATSBY_ENVIRONMENT_CONTEXT as EnvironmentContext) || 'local';

export const SidebarCategoryRoutes = {
  COMPONENTS: '/components',
  PATTERNS: '/patterns',
  PRIMITIVES: '/primitives',
  LAYOUT: '/layout',
  ICON_SYSTEM: '/icons',
  CONTENT: '/content',
  LIBRARIES: '/libraries',
  GETTING_STARTED: '/getting-started',
  TOKENS: '/tokens',
};

export const PackageStatus = {
  BACKLOG: 'backlog',
  ALPHA: 'alpha',
  BETA: 'beta',
  STABLE: 'stable',
};

export const SiteMetaDefaults = {
  TITLE: 'Paste: The Design System for building Twilio customer experiences',
  DESCRIPTION:
    'Paste is the design system for designing and building consistent experiences at Twilio. It is made up of tokens and components, along with in-depth documentation to assist designers and developers faced with solving our customers’ problems. It is open source and contributions are welcome.',
};
