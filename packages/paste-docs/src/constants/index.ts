export const TWILIO_RED = '#F22F46';
export const TWILIO_BLUE = '#0D122B';
export const PSA_ALERT_HEIGHT = 40;
export const PASTE_THEME_ALERT_HEIGHT = 54;
export const SITE_MASTHEAD_HEIGHT = 76;
/* Note:
 * Changing the mobile breakpoint should be reflected
 * in assets/scss/search.scss
 */
export const SITE_BREAKPOINTS = ['768px', '1024px', '1220px', '1880px'];
export const SITE_CONTENT_MAX_WIDTH = '1440px';

// Used to 'bleed' sections together. GettingStarted+Popular
export const HOMEPAGE_SECTION_OVERFLOW_OFFSET = 150;

export const STICKY_COLUMN_OFFSET = 20 + PSA_ALERT_HEIGHT + SITE_MASTHEAD_HEIGHT;
export const STICKY_SIDEBAR_OFFSET = PSA_ALERT_HEIGHT + SITE_MASTHEAD_HEIGHT;

export const PASTE_PACKAGE_PREFIX = '@twilio-paste/';
export const STORYBOOK_DOMAIN = 'https://main--5e53448165911c0022e68c74.chromatic.com';

// IDs for skip links
export const PASTE_DOCS_CONTENT_AREA = 'paste-docs-content-area';
export const PASTE_DOCS_SEARCH_INPUT = 'paste-docs-search-input';
export const PASTE_DOCS_SEARCH_INPUT_MOBILE = 'paste-docs-search-input-mobile';

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
