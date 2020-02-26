import {addDecorator, addParameters, configure} from '@storybook/react';
import requireContext from 'require-context.macro';
import {addReadme} from 'storybook-readme';
import {withA11y} from '@storybook/addon-a11y';
import withThemeSwitcher from './addons/theme-switcher-addon';
import {INITIAL_VIEWPORTS} from '@storybook/addon-viewport';

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
    viewports: INITIAL_VIEWPORTS,
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
