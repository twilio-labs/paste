import * as React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {InformationIcon} from '@twilio-paste/icons/esm/InformationIcon';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {useMenuState, Menu, MenuItem, MenuButton, MenuGroup, MenuSeparator} from '../src';
import type {MenuButtonProps} from '../src';

const handleClickMock: jest.Mock = jest.fn();

const PreferencesMenu = React.forwardRef<HTMLButtonElement, MenuButtonProps>(function PreferencesMenu(props, ref) {
  const menu = useMenuState({baseId: 'sub-menu'});

  return (
    <>
      <MenuButton ref={ref} {...menu} {...props} variant="secondary" data-testid="example-submenu-trigger">
        Preferences
      </MenuButton>
      <Menu {...menu} aria-label="Preferences" data-testid="example-submenu">
        <MenuItem {...menu} data-testid="example-submenu-item">
          Settings
        </MenuItem>
        <MenuItem {...menu} disabled data-testid="example-disabled-submenu-item">
          Extensions
        </MenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </Menu>
    </>
  );
});

const GROUP_LABEL_TEXT = 'Search Options';
const MenuMock: React.FC<{groupRef?: React.Ref<HTMLDivElement>}> = ({groupRef}) => {
  const menu = useMenuState({baseId: 'menu-example'});
  return (
    <>
      <MenuButton {...menu} variant="primary">
        Code
      </MenuButton>
      <Menu {...menu} aria-label="Code" data-testid="example-menu">
        <MenuItem {...menu} onClick={handleClickMock} data-testid="example-menu-item">
          About Visual Studio Code
        </MenuItem>
        <MenuItem {...menu}>Check for Updates...</MenuItem>
        <MenuSeparator {...menu} data-testid="example-menu-separator" />
        <MenuItem {...menu} as={PreferencesMenu} />
        <MenuSeparator {...menu} data-testid="example-menu-separator-2" />
        <MenuGroup icon={<InformationIcon decorative />} label={GROUP_LABEL_TEXT} ref={groupRef}>
          <MenuItem {...menu} href="https://google.com" onClick={handleClickMock} data-testid="example-menu-anchor">
            Search with Google
          </MenuItem>
          <MenuItem {...menu} disabled>
            Search with Bing
          </MenuItem>
        </MenuGroup>
      </Menu>
    </>
  );
};

describe('Menu', () => {
  describe('Render', () => {
    it('should render', () => {
      render(<MenuMock />);
      const renderedMenuButton = screen.getByRole('button');
      const renderedMenu = screen.getByTestId('example-menu');
      expect(renderedMenuButton).toBeDefined();
      expect(renderedMenu).toBeDefined();
    });

    it('should render a menu button with aria attributes', () => {
      render(<MenuMock />);
      const renderedMenuButton = screen.getByRole('button');
      expect(renderedMenuButton.getAttribute('aria-haspopup')).toEqual('menu');
      expect(renderedMenuButton.getAttribute('aria-controls')).toEqual('menu-example');
    });

    it('should render a menu', () => {
      render(<MenuMock />);
      const renderedMenu = screen.getByLabelText('Code');
      expect(renderedMenu.getAttribute('role')).toEqual('menu');
      expect(renderedMenu.getAttribute('aria-orientation')).toEqual('vertical');
    });

    it('should render a menu item', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-menu-item');
      expect(renderedMenuItem.getAttribute('role')).toEqual('menuitem');
    });

    it('should render a menu item as a button', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-menu-item');
      expect(renderedMenuItem.tagName).toBe('BUTTON');
    });

    it('should render a menu item as an anchor', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-menu-anchor');
      expect(renderedMenuItem.tagName).toEqual('A');
    });

    it('should render a menu separator', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-menu-separator');
      expect(renderedMenuItem.getAttribute('aria-orientation')).toEqual('horizontal');
      expect(renderedMenuItem.tagName).toEqual('HR');
    });

    it('should render a menu group', () => {
      const groupRef = React.createRef<HTMLDivElement>();
      const {getByText} = render(<MenuMock groupRef={groupRef} />);

      expect(groupRef.current).not.toBeNull();
      // @ts-ignore we're checking it above
      expect(groupRef.current.getAttribute('aria-label')).toEqual(GROUP_LABEL_TEXT);

      const renderedGroupLabel = getByText(GROUP_LABEL_TEXT);
      expect(renderedGroupLabel.getAttribute('role')).toEqual('presentation');
    });

    it('should render a sub menu trigger', () => {
      render(<MenuMock />);
      const renderedSubMenuTrigger = screen.getByTestId('example-submenu-trigger');
      expect(renderedSubMenuTrigger.getAttribute('role')).toEqual('menuitem');
      expect(renderedSubMenuTrigger.getAttribute('aria-haspopup')).toEqual('menu');
      expect(renderedSubMenuTrigger.getAttribute('aria-expanded')).toEqual('false');
    });

    it('should render a submenu', () => {
      render(<MenuMock />);
      const renderedMenu = screen.getByTestId('example-submenu');
      expect(renderedMenu.getAttribute('role')).toEqual('menu');
      expect(renderedMenu.getAttribute('aria-orientation')).toEqual('vertical');
    });

    it('should render a sub menu item', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-submenu-item');
      expect(renderedMenuItem.getAttribute('role')).toEqual('menuitem');
    });

    it('should render a disabled sub menu item', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-disabled-submenu-item');
      expect(renderedMenuItem.getAttribute('role')).toEqual('menuitem');
      expect(renderedMenuItem.getAttribute('aria-disabled')).toEqual('true');
    });

    it('should fire onClick events using for menu item as a button', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-menu-item');
      fireEvent.click(renderedMenuItem);
      expect(handleClickMock).toHaveBeenCalled();
      fireEvent.keyDown(renderedMenuItem, {key: 'Space', code: 'Space'});
      expect(handleClickMock).toHaveBeenCalled();
      fireEvent.keyDown(renderedMenuItem, {key: 'Enter', code: 'Enter'});
      expect(handleClickMock).toHaveBeenCalled();
    });

    it('should fire onClick events using for menu item as an anchor', () => {
      render(<MenuMock />);
      const renderedMenuItem = screen.getByTestId('example-menu-anchor');
      fireEvent.click(renderedMenuItem);
      expect(handleClickMock).toHaveBeenCalled();
      fireEvent.keyDown(renderedMenuItem, {key: 'Space', code: 'Space'});
      expect(handleClickMock).toHaveBeenCalled();
      fireEvent.keyDown(renderedMenuItem, {key: 'Enter', code: 'Enter'});
      expect(handleClickMock).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<MenuMock />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
