import {addDecorator, addParameters, configure} from '@storybook/react';
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
addDecorator(withA11y);

configure(require.context('../packages/', true, /\.stories\.tsx$/), module);
