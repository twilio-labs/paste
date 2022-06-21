import darkThemeTokens from '@twilio-paste/design-tokens/dist/themes/dark/tokens.generic';
import defaultThemeTokens from '@twilio-paste/design-tokens/dist/tokens.generic';

import {annotate} from '../../utils/token-decorator';
import {sentenceCase} from './utils';

export const TOKENS_BY_THEME = {
  dark: annotate(darkThemeTokens),
  default: annotate(defaultThemeTokens),
};

// Note: this assumes that token categories are the same for all themes.
// Currently this is the case, a potential betterment to make this more resilient would be to:
// - compare the categories in the theme shapes
// - add handling for the case where they are not the same
export const TOKEN_CATEGORIES = Object.keys(TOKENS_BY_THEME.dark);

export const pageAsideHeadings = TOKEN_CATEGORIES.map((value) => ({value: sentenceCase(value), depth: 2}));
export const pageAsideData = {
  fileAbsolutePath: '',
  frontmatter: {slug: '/tokens/list', title: 'Design tokens'},
  headings: pageAsideHeadings,
};

export type CategoryDescriptionMeta = {
  paragraph: {
    text: string;
    anchor?:
      | {
          text: string;
          href: string;
        }
      | undefined;
  };
  callout?:
    | {
        title: string;
        text: string;
        variant: 'info' | 'warning';
      }
    | undefined;
};
export const CATEGORY_DESCRIPTIONS: Record<string, CategoryDescriptionMeta> = {
  'background-colors': {
    paragraph: {
      text: 'Background color tokens define the background color of a container.',
      anchor: {
        text: 'Read the color guidelines',
        href: '',
      },
    },
  },
  'border-colors': {
    paragraph: {
      text: 'Border color tokens define the border color of a container.',
      anchor: {text: 'Read the color guidelines', href: ''},
    },
  },
  'border-widths': {paragraph: {text: 'Border widths define the thickness of a border around a container.'}},
  'box-shadows': {
    paragraph: {
      text: 'Box shadows are used in a number of ways: some are true shadows that are used to create depth and demonstrate the} hierarchy of layered elements; other box shadow tokens are duplicates of border tokens and are used to visually add a border without affecting the height of the component; box shadow tokens are also used for focus states on components.',
    },
    callout: {
      title: 'Did you know?',
      text: 'Borders add height to an element, but box shadows do not. It’s why we need to use box shadows on some components and not others.',
      variant: 'info',
    },
  },
  colors: {
    paragraph: {
      text: 'Colors are tokens that do not have a defined usage in the system and can be used in custom compositions.',
      anchor: {
        text: 'Read the color guidelines',
        href: '',
      },
    },
  },
  fonts: {
    paragraph: {
      text: 'Fonts define the different font families.',
      anchor: {text: 'Read the typography guidelines (TBA)', href: ''},
    },
  },
  'font-sizes': {
    paragraph: {
      text: 'Font sizes define the size of text. 1 rem unit = 16 pixels in Paste.',
      anchor: {
        text: 'Read the typography guidelines (TBA)',
        href: '',
      },
    },
    callout: {
      text: "Paste's font size tokens use rem values. Unlike em values which are relative to their parent element, rem values are relative to the html element.\nIf you aren't using the Theme.Provider component, you must set font-size: 100% on your page's html tag for the font-sizes to be sized correctly as 1rem=16px.",
      title: 'Heads up about font sizes',
      variant: 'info',
    },
  },
  'font-weights': {
    paragraph: {
      text: 'Font sizes define the weight of text.',
      anchor: {
        text: 'Read the typography guidelines (TBA)',
        href: '',
      },
    },
  },
  'line-heights': {
    paragraph: {
      text: 'Line heights define the height of a line of text. 1 rem unit = 16 pixels in Paste.',
      anchor: {
        text: 'Read the typography guidelines (TBA)',
        href: '',
      },
    },
  },
  radii: {
    paragraph: {
      text: 'Radii define the border radius of a container.',
    },
  },
  sizings: {
    paragraph: {
      text: 'Sizings define the size of UI elements.',
      anchor: {
        text: 'Read the spacing and layout guidelines (TBA)',
        href: '',
      },
    },
  },
  spacings: {paragraph: {text: 'Spacings define the spacing between UI elements.'}},
  'text-colors': {
    paragraph: {
      text: 'Text colors define text and icon colors. We specifically have `color-text-*` and `color-text-icon-*` tokens, since icons have lower contrast requirements than text. This means that text color tokens can be used for icons, but icon color tokens cannot be used for text. Read the color guidelines',
    },
    callout: {
      text: 'The contrast scores shown here are for each text color on the single background color that’s shown. Always be sure your color choices are accessible. Learn more about accessible color usage and recommended color pairings.',
      title: 'Text contrast requirements',
      variant: 'info',
    },
  },
  'z-indices': {paragraph: {text: 'Z indices define the vertical stacking order of UI elements that overlap.'}},
};
