import { fireEvent, render, screen } from '@testing-library/react';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { CustomizationProvider } from '@twilio-paste/customization';
import { MoreIcon } from '@twilio-paste/icons/esm/MoreIcon';
import { ProductContactCenterTasksIcon } from '@twilio-paste/icons/esm/ProductContactCenterTasksIcon';
import { ProductFlexIcon } from '@twilio-paste/icons/esm/ProductFlexIcon';
import { Menu, MenuButton, MenuItem, MenuSeparator, useMenuState } from '@twilio-paste/menu';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import {
  Sidebar,
  SidebarBetaBadge,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarHeader,
  SidebarHeaderIconButton,
  SidebarHeaderLabel,
  SidebarNavigation,
  SidebarNavigationDisclosure,
  SidebarNavigationDisclosureContent,
  SidebarNavigationDisclosureHeading,
  SidebarNavigationDisclosureHeadingWrapper,
  SidebarNavigationItem,
  SidebarPushContentWrapper,
} from '../src';

const MockPushSidebarWithNavigation = ({
  collapsed,
  onClick,
}: {
  collapsed: boolean;
  onClick: () => void;
}): JSX.Element => {
  const menu = useMenuState();

  /* eslint-disable react/jsx-max-depth */
  return (
    <Theme.Provider theme="twilio">
      <Sidebar
        topbarSkipLinkID="topbar"
        mainContentSkipLinkID="main"
        sidebarNavigationSkipLinkID="nav"
        collapsed={collapsed}
        variant="compact"
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="button">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarNavigation aria-label="main">
          <SidebarNavigationItem
            href="https://google.com"
            data-testid="nav-item-button"
            onClick={onClick}
            icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
          >
            This item closes the sidebar
          </SidebarNavigationItem>
          <SidebarNavigationItem
            data-testid="nav-item-anchor"
            href="https://google.com"
            selected
            icon={<ProductContactCenterTasksIcon decorative={false} title="Description of icon" />}
          >
            Go to Google.com
          </SidebarNavigationItem>
          <SidebarNavigationDisclosure data-testid="nav-item-disclosure">
            <SidebarNavigationDisclosureHeadingWrapper>
              <SidebarNavigationDisclosureHeading selected data-testid="nav-item-disclosure-heading">
                <ProductContactCenterTasksIcon decorative={false} title="Description of icon" />
                Heading
              </SidebarNavigationDisclosureHeading>
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                <MenuButton {...menu} variant="inverse_link" size="icon_small">
                  <MoreIcon decorative={false} title="More" />
                </MenuButton>
                <Menu {...menu} aria-label="Preferences">
                  <MenuItem {...menu} onClick={onClick}>
                    Settings
                  </MenuItem>
                  <MenuItem {...menu} href="http://www.google.com" onClick={onClick}>
                    Has a link
                  </MenuItem>
                  <MenuItem {...menu} variant="destructive" href="http://www.google.com" onClick={onClick}>
                    Destructive link
                  </MenuItem>
                  <MenuItem {...menu} disabled>
                    Extensions
                  </MenuItem>
                  <MenuSeparator {...menu} />
                  <MenuItem {...menu} onClick={onClick}>
                    Keyboard shortcuts
                  </MenuItem>
                </Menu>
              </Box>
            </SidebarNavigationDisclosureHeadingWrapper>
            <SidebarNavigationDisclosureContent data-testid="nav-item-disclosure-content">
              <SidebarNavigationDisclosure>
                <SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureHeading selected>
                    <ProductContactCenterTasksIcon decorative={false} title="Description of icon" />
                    Heading
                  </SidebarNavigationDisclosureHeading>
                  <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
                </SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureContent>
                  <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
                  <SidebarNavigationItem href="https://google.com" selected>
                    Navigation Item
                  </SidebarNavigationItem>
                  <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
                </SidebarNavigationDisclosureContent>
              </SidebarNavigationDisclosure>
              <SidebarNavigationItem href="https://google.com" onClick={onClick}>
                Navigation Item
              </SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com" selected>
                Navigation Item
              </SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com">Navigation Item</SidebarNavigationItem>
            </SidebarNavigationDisclosureContent>
          </SidebarNavigationDisclosure>
        </SidebarNavigation>
        <SidebarFooter>
          <SidebarCollapseButton onClick={onClick} i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
        </SidebarFooter>
      </Sidebar>

      {/* Must wrap content area */}
      <SidebarPushContentWrapper collapsed={collapsed} variant="compact">
        <Button variant="primary" onClick={onClick}>
          Toggle Push Sidebar
        </Button>
      </SidebarPushContentWrapper>
    </Theme.Provider>
  );
  /* eslint-enable react/jsx-max-depth */
};

describe('SidebarNavigation', () => {
  it('renders collapsed SidebarNavigationItems correctly', () => {
    const onClick: jest.Mock = jest.fn(() => {});

    render(<MockPushSidebarWithNavigation collapsed onClick={onClick} />);
    const wrapper = screen.getByRole('navigation');
    const buttonIcon = screen.getByTestId('nav-item-button');
    const anchorIcon = screen.getByTestId('nav-item-anchor');
    const disclosure = screen.getByTestId('nav-item-disclosure');

    /*
     * Check that the sidebar has the correct number of children, including the disclosure
     * We check this so that in the future we don't remove the hidden disclosure
     * on collapsed, because if we do that then we need to manage the state of the
     * disclosure in the collapsed state
     */
    expect(wrapper.children).toHaveLength(3);

    // Button works
    expect(buttonIcon).toBeInTheDocument();
    fireEvent.click(buttonIcon);
    expect(onClick).toBeCalledTimes(1);
    // N.B: 'getByText' fails when element is missing so we use 'queryByText' here
    const buttonByText = screen.queryByText('This item closes the sidebar');
    expect(buttonByText).not.toBeInTheDocument();

    // Anchor works
    expect(anchorIcon).toHaveAttribute('href');

    // Disclosure works
    expect(disclosure).toBeInTheDocument();
    expect(disclosure).not.toBeVisible();
  });

  it('renders expanded SidebarNavigationItems correctly', () => {
    const onClick: jest.Mock = jest.fn(() => {});

    render(<MockPushSidebarWithNavigation collapsed={false} onClick={onClick} />);
    const wrapper = screen.getByRole('navigation');
    const disclosure = screen.getByTestId('nav-item-disclosure');
    const disclosureHeading = screen.getByTestId('nav-item-disclosure-heading');
    const disclosureContent = screen.getByTestId('nav-item-disclosure-content');

    /*
     * Check that the sidebar has the correct number of children, including the disclosure
     * We check this so that in the future we don't remove the hidden disclosure
     * on collapsed, because if we do that then we need to manage the state of the
     * disclosure in the collapsed state
     */
    expect(wrapper.children).toHaveLength(3);

    // SidebarNavigationItem text is rendered
    const buttonByText = screen.getByText('This item closes the sidebar');
    expect(buttonByText).toBeInTheDocument();
    const anchorByText = screen.getByText('Go to Google.com');
    expect(anchorByText).toBeInTheDocument();

    // Disclosure is visible
    expect(disclosure).toBeInTheDocument();
    expect(disclosure).toHaveStyleRule('display', 'block');
    // Disclosure is closed
    expect(disclosureHeading).toHaveAttribute('aria-expanded', 'false');
    expect(disclosureContent.getAttribute('id')).toEqual(disclosureHeading.getAttribute('aria-controls'));
    expect(disclosureContent).not.toBeVisible();
    // Disclosure is open
    fireEvent.click(disclosureHeading);
    expect(disclosureHeading).toHaveAttribute('aria-expanded', 'true');
    expect(disclosureContent).toBeVisible();
  });

  /**
   * Customization
   */
  describe('Customization', () => {
    it('should work with default element values', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            SIDEBAR_NAVIGATION: { margin: 'space100' },
            SIDEBAR_NAVIGATION_ITEM: { margin: 'space100' },
            SIDEBAR_NAVIGATION_DISCLOSURE: { margin: 'space100' },
            SIDEBAR_NAVIGATION_DISCLOSURE_HEADING_WRAPPER: { margin: 'space100' },
            SIDEBAR_NAVIGATION_DISCLOSURE_HEADING: { margin: 'space100' },
            SIDEBAR_NAVIGATION_DISCLOSURE_CONTENT: { margin: 'space100' },
          }}
        >
          <Sidebar
            topbarSkipLinkID="topbar"
            mainContentSkipLinkID="main"
            sidebarNavigationSkipLinkID="nav"
            variant="compact"
            data-testid="aaa"
          >
            <SidebarNavigation aria-label="main">
              <SidebarNavigationItem href="http://www.google.com" selected>
                AnchorItem Selected
              </SidebarNavigationItem>
              <SidebarNavigationItem href="http://www.google.com">AnchorItem</SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com" onClick={() => {}} selected>
                ButtonItem Selected
              </SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com" onClick={() => {}}>
                ButtonItem
              </SidebarNavigationItem>
              <SidebarNavigationDisclosure data-testid="disclosure">
                <SidebarNavigationDisclosureHeadingWrapper>
                  <SidebarNavigationDisclosureHeading>Heading</SidebarNavigationDisclosureHeading>
                </SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureContent data-testid="disclosure-content">
                  <SidebarNavigationItem href="https://google.com" onClick={() => {}}>
                    Content Button Item
                  </SidebarNavigationItem>
                </SidebarNavigationDisclosureContent>
              </SidebarNavigationDisclosure>
            </SidebarNavigation>
          </Sidebar>
        </CustomizationProvider>,
      );
      const nav = screen.getByRole('navigation');
      const disclosure = screen.getByTestId('disclosure');
      const disclosureHeading = screen.getByRole('button', { name: 'Heading' });
      const disclosureHeadingWrapper = disclosureHeading.parentElement;
      const disclosureContent = screen.getByTestId('disclosure-content');
      const buttonItem = screen.getByRole('link', { name: 'ButtonItem' });
      const anchorItem = screen.getByRole('link', { name: 'AnchorItem' });

      expect(nav).toHaveStyleRule('margin', '2.25rem');
      expect(disclosure).toHaveStyleRule('margin', '2.25rem');
      expect(disclosureHeadingWrapper).toHaveStyleRule('margin', '2.25rem');
      expect(disclosureHeading).toHaveStyleRule('margin', '2.25rem');
      expect(disclosureContent).toHaveStyleRule('margin', '2.25rem');
      expect(anchorItem).toHaveStyleRule('margin', '2.25rem');
      expect(buttonItem).toHaveStyleRule('margin', '2.25rem');
    });

    it('should work with custom element values', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            NAVIGATION: { margin: 'space100' },
            NAVIGATION_ITEM: { margin: 'space100' },
            NAVIGATION_ITEM_ANCHOR: { margin: 'space100' },
            NAVIGATION_ITEM_BUTTON: { margin: 'space100' },
            NAVIGATION_DISCLOSURE: { margin: 'space100' },
            NAVIGATION_DISCLOSURE_HEADING_WRAPPER: { margin: 'space100' },
            NAVIGATION_DISCLOSURE_HEADING: { margin: 'space100' },
            NAVIGATION_DISCLOSURE_CONTENT: { margin: 'space100' },
          }}
        >
          <Sidebar
            topbarSkipLinkID="topbar"
            mainContentSkipLinkID="main"
            sidebarNavigationSkipLinkID="nav"
            variant="compact"
            data-testid="aaa"
          >
            <SidebarNavigation aria-label="main" element="NAVIGATION">
              <SidebarNavigationItem element="NAVIGATION_ITEM_ANCHOR" href="http://www.google.com" selected>
                AnchorItem Selected
              </SidebarNavigationItem>
              <SidebarNavigationItem element="NAVIGATION_ITEM_ANCHOR" href="http://www.google.com">
                AnchorItem
              </SidebarNavigationItem>
              <SidebarNavigationItem
                href="https://google.com"
                element="NAVIGATION_ITEM_BUTTON"
                onClick={() => {}}
                selected
              >
                ButtonItem Selected
              </SidebarNavigationItem>
              <SidebarNavigationItem href="https://google.com" element="NAVIGATION_ITEM_BUTTON" onClick={() => {}}>
                ButtonItem
              </SidebarNavigationItem>
              <SidebarNavigationDisclosure element="NAVIGATION_DISCLOSURE" data-testid="disclosure">
                <SidebarNavigationDisclosureHeadingWrapper element="NAVIGATION_DISCLOSURE_HEADING_WRAPPER">
                  <SidebarNavigationDisclosureHeading element="NAVIGATION_DISCLOSURE_HEADING">
                    Heading
                  </SidebarNavigationDisclosureHeading>
                </SidebarNavigationDisclosureHeadingWrapper>
                <SidebarNavigationDisclosureContent
                  element="NAVIGATION_DISCLOSURE_CONTENT"
                  data-testid="disclosure-content"
                >
                  <SidebarNavigationItem href="https://google.com" element="NAVIGATION_ITEM" onClick={() => {}}>
                    Content Button Item
                  </SidebarNavigationItem>
                </SidebarNavigationDisclosureContent>
              </SidebarNavigationDisclosure>
            </SidebarNavigation>
          </Sidebar>
        </CustomizationProvider>,
      );
      const nav = screen.getByRole('navigation');
      const disclosure = screen.getByTestId('disclosure');
      const disclosureHeading = screen.getByRole('button', { name: 'Heading' });
      const disclosureHeadingWrapper = disclosureHeading.parentElement;
      const disclosureContent = screen.getByTestId('disclosure-content');
      const buttonItem = screen.getByRole('link', { name: 'ButtonItem' });
      const anchorItem = screen.getByRole('link', { name: 'AnchorItem' });

      expect(nav).toHaveStyleRule('margin', '2.25rem');
      expect(disclosure).toHaveStyleRule('margin', '2.25rem');
      expect(disclosureHeadingWrapper).toHaveStyleRule('margin', '2.25rem');
      expect(disclosureHeading).toHaveStyleRule('margin', '2.25rem');
      expect(disclosureContent).toHaveStyleRule('margin', '2.25rem');
      expect(buttonItem).toHaveStyleRule('margin', '2.25rem');
      expect(anchorItem).toHaveStyleRule('margin', '2.25rem');
    });
  });
});
