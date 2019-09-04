import {addDecorator, addParameters, configure} from '@storybook/react';
import requireContext from 'require-context.macro';
import {addReadme} from 'storybook-readme';
import withThemeSwitcher from './addons/theme-switcher-addon';

addParameters({
  isFullScreen: false,
  showNav: true,
  showPanel: true,
  panelPosition: 'bottom',
  sortStoriesByKind: false,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
  sidebarAnimations: true,
  enableShortcuts: true,
});
addDecorator(withThemeSwitcher);
addDecorator(addReadme);

const req = requireContext('../packages/', true, /\.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
