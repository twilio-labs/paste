import {addDecorator, addParameters, configure} from '@storybook/react';
import requireContext from 'require-context.macro';
import {addReadme} from 'storybook-readme';
import {withA11y} from '@storybook/addon-a11y';
import withThemeSwitcher from './addons/theme-switcher-addon';
import {DefaultTheme} from '@twilio-paste/theme-tokens';

const mobileArray = DefaultTheme.breakpoints[0].split(/([0-9]+)/);
const mobileSize = mobileArray[1];

const tabletArray = DefaultTheme.breakpoints[1].split(/([0-9]+)/);
const tabletSize = tabletArray[1];

const desktopArray = DefaultTheme.breakpoints[2].split(/([0-9]+)/);
const desktopSize = desktopArray[1];

const customViewports = {
  Mobile: {
    name: 'Mobile',
    styles: {
      width: mobileSize - 1 + 'rem',
      height: '768px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: tabletSize - 1 + 'rem',
      height: '768px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: desktopSize - 1 + 'rem',
      height: '768px',
    },
  },
};

addParameters({
  isFullScreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'right',
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: true,
  enableShortcuts: true,
  viewport: {
    viewports: customViewports,
  },
});
addDecorator(withThemeSwitcher);
addDecorator(addReadme);
addDecorator(withA11y);

const req = requireContext('../packages/', true, /\.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
