import {
  addDecorator,
  addParameters,
  configure
} from '@storybook/react';
import requireContext from 'require-context.macro';
import {
  addReadme
} from 'storybook-readme';
import {
  withA11y
} from '@storybook/addon-a11y';
import withThemeSwitcher from './addons/theme-switcher-addon';

const customViewports = {
  Mobile: {
    name: 'Mobile',
    styles: {
      width: '24rem',
      height: '768px',
    },
  },
  Tablet: {
    name: 'Tablet',
    styles: {
      width: '63rem',
      height: '768px',
    },
  },
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '76rem',
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
    viewports: customViewports
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
