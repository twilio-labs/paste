const {addDecorator, addParameters, configure} = require('@storybook/react');
const {withThemeProvider} = require('./withThemePovider');
const requireContext = require('require-context.macro');
import {addReadme} from 'storybook-readme';

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
addDecorator(withThemeProvider);
addDecorator(addReadme);

const req = requireContext('../packages/', true, /\.stories.tsx?$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
