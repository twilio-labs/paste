import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Theme } from '@twilio-paste/theme';
import { Box } from '@twilio-paste/box';
import { CustomizationProvider } from '@twilio-paste/customization';
import { ProductFlexIcon } from '@twilio-paste/icons/esm/ProductFlexIcon';

import {
  Sidebar,
  SidebarHeader,
  SidebarHeaderLabel,
  SidebarHeaderIconButton,
  SidebarCollapseButton,
  SidebarFooter,
  SidebarPushContentWrapper,
  SidebarOverlayContentWrapper,
  SidebarBetaBadge,
} from '../src';
import type { SidebarProps } from '../src';

const MockPushSidebar = ({
  collapsed,
  variant = 'default',
}: {
  collapsed?: boolean;
  variant?: SidebarProps['variant'];
}): JSX.Element => {
  return (
    <Theme.Provider theme="twilio">
      <Sidebar
        topbarSkipLinkID="topbar"
        mainContentSkipLinkID="main"
        sidebarNavigationSkipLinkID="nav"
        collapsed={collapsed}
        variant={variant}
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="button">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarFooter>
          <SidebarCollapseButton i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
        </SidebarFooter>
      </Sidebar>
      <SidebarPushContentWrapper collapsed={collapsed} variant={variant}>
        <div>Content area</div>
      </SidebarPushContentWrapper>
    </Theme.Provider>
  );
};

const MockOverlaySidebar = ({
  collapsed,
  variant = 'default',
}: {
  collapsed?: boolean;
  variant?: SidebarProps['variant'];
}): JSX.Element => {
  return (
    <Theme.Provider theme="twilio">
      <Sidebar
        topbarSkipLinkID="topbar"
        mainContentSkipLinkID="main"
        sidebarNavigationSkipLinkID="nav"
        collapsed={collapsed}
        variant={variant}
      >
        <SidebarHeader>
          <SidebarHeaderIconButton as="button">
            <ProductFlexIcon size="sizeIcon20" decorative={false} title="Go to Flex product homepage" />
          </SidebarHeaderIconButton>
          <SidebarHeaderLabel>Twilio Flex</SidebarHeaderLabel>
        </SidebarHeader>
        <SidebarFooter>
          <SidebarCollapseButton i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
        </SidebarFooter>
      </Sidebar>
      <SidebarOverlayContentWrapper collapsed={collapsed} variant={variant}>
        <div>Content area</div>
      </SidebarOverlayContentWrapper>
    </Theme.Provider>
  );
};

describe('Sidebar', () => {
  /**
   * PUSH
   */
  describe('Push Sidebar', () => {
    it('should have an id', () => {
      render(<MockPushSidebar collapsed />);
      const nav = screen.getByRole('complementary');
      expect(nav).toHaveAttribute('id');
    });

    it('should render expanded', () => {
      render(<MockPushSidebar collapsed={false} />);
      const nav = screen.getByRole('complementary');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render expanded by default', () => {
      render(<MockPushSidebar />);
      const nav = screen.getByRole('complementary');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render compact width', () => {
      render(<MockPushSidebar collapsed={true} variant="compact" />);
      const nav = screen.getByRole('complementary');
      expect(nav.style.width).toBe('4.75rem');
    });
  });

  /**
   * OVERLAY
   */
  describe('Overlay Sidebar', () => {
    it('should have an id', () => {
      render(<MockOverlaySidebar collapsed />);
      const nav = screen.getByRole('complementary');
      expect(nav).toHaveAttribute('id');
    });

    it('should render expanded', () => {
      render(<MockOverlaySidebar collapsed={false} />);
      const nav = screen.getByRole('complementary');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render expanded by default', () => {
      render(<MockOverlaySidebar />);
      const nav = screen.getByRole('complementary');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render compact width', () => {
      render(<MockOverlaySidebar collapsed={true} variant="compact" />);
      const nav = screen.getByRole('complementary');
      expect(nav.style.width).toBe('4.75rem');
    });
  });

  /**
   * SIDEBAR COLLAPSE BUTTON
   */
  describe('Sidebar Collapse Button', () => {
    it('should have aria-expanded and aria-controls set correctly when collapsed', async () => {
      render(<MockOverlaySidebar collapsed />);
      const toggleButton = screen.getAllByRole('button')[1];
      const nav = screen.getByRole('complementary');
      expect(toggleButton.getAttribute('aria-controls')).toEqual(nav.getAttribute('id'));
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false');
      expect(toggleButton.textContent).toBe('Open sidebar');
    });

    it('should have aria-expanded and aria-controls set correctly when expanded', async () => {
      render(<MockOverlaySidebar collapsed={false} />);
      const toggleButton = screen.getAllByRole('button')[1];
      const nav = screen.getByRole('complementary');
      expect(toggleButton.getAttribute('aria-controls')).toEqual(nav.getAttribute('id'));
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(toggleButton.textContent).toBe('Close sidebar');
    });
  });

  /**
   * SIDEBAR HEADER
   */
  describe('Sidebar Header', () => {
    it('hides the text when collapsed', async () => {
      render(<MockOverlaySidebar collapsed />);
      const headerText = screen.getByText('Twilio Flex');
      expect(headerText).toHaveStyleRule('opacity', '0');
    });
  });

  /**
   * SIDEBAR BETA BADGE
   */
  describe('Sidebar Beta Badge', () => {
    it('should set ref to a span element if "as" is "span"', () => {
      const betaBadgeRef = React.createRef<HTMLElement>();
      render(
        <SidebarBetaBadge as="span" ref={betaBadgeRef}>
          Beta
        </SidebarBetaBadge>,
      );
      expect(betaBadgeRef?.current?.tagName).toEqual('SPAN');
    });
    it('should render as button if "as" is "button"', () => {
      const { getByRole } = render(
        <SidebarBetaBadge as="button" onClick={() => null}>
          Button
        </SidebarBetaBadge>,
      );
      expect(getByRole('button')).toBeInTheDocument();
    });

    it('should set ref to a button element if "as" is "button"', () => {
      const betaBadgeRef = React.createRef<HTMLElement>();
      render(
        <SidebarBetaBadge as="button" onClick={() => {}} ref={betaBadgeRef}>
          Beta
        </SidebarBetaBadge>,
      );
      expect(betaBadgeRef?.current?.tagName).toEqual('BUTTON');
    });

    it('should handle onclick event', () => {
      const onClickMock: jest.Mock = jest.fn();
      const { getByRole } = render(
        <SidebarBetaBadge as="button" onClick={onClickMock}>
          Button
        </SidebarBetaBadge>,
      );
      const button = getByRole('button');
      fireEvent.click(button);
      expect(onClickMock).toBeCalledTimes(1);
    });
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
            SIDEBAR: { backgroundColor: 'colorBackgroundPrimary', margin: 'space50' },
            SIDEBAR_COLLAPSE_BUTTON: {
              padding: 'space40',
            },
            SIDEBAR_FOOTER: {
              padding: 'space40',
            },
            SIDEBAR_PUSH_CONTENT_WRAPPER: { backgroundColor: 'colorBackgroundPrimary', margin: 'space50' },
            SIDEBAR_BETA_BADGE: {
              backgroundColor: 'colorBackgroundAvailable',
            },
          }}
        >
          <Sidebar
            topbarSkipLinkID="topbar"
            mainContentSkipLinkID="main"
            sidebarNavigationSkipLinkID="nav"
            variant="compact"
            data-testid="aaa"
          >
            <Box color="colorTextInverse">Sidebar header</Box>
            <SidebarBetaBadge as="span">Beta</SidebarBetaBadge>
            <SidebarFooter data-testid="collapseButtonWrapper">
              <SidebarCollapseButton i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
            </SidebarFooter>
          </Sidebar>

          {/* Must wrap content area */}
          <SidebarPushContentWrapper variant="compact" data-testid="contentwrapper">
            <div>Content area</div>
          </SidebarPushContentWrapper>
        </CustomizationProvider>,
      );
      const nav = screen.getByRole('complementary');
      expect(nav).toHaveStyleRule('margin', '1rem');
      expect(nav).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const sidebarButton = screen.getByRole('button');
      expect(sidebarButton).toHaveStyleRule('padding', '0.75rem');

      const sidebarButtonWrapper = screen.getByTestId('collapseButtonWrapper');
      expect(sidebarButtonWrapper).toHaveStyleRule('padding', '0.75rem');

      const contentWrapper = screen.getByTestId('contentwrapper');
      expect(contentWrapper).toHaveStyleRule('margin', '1rem');
      expect(contentWrapper).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const sidebarBetaBadge = screen.getByText('Beta');
      expect(sidebarBetaBadge).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });

    it('should work with custom element values', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            XSIDE: { backgroundColor: 'colorBackgroundPrimary', margin: 'space50' },
            XSIDE_WRAPPER: { backgroundColor: 'colorBackgroundPrimary', margin: 'space50' },
            XSIDE_COLLAPSE_BUTTON: {
              padding: 'space40',
            },
            XSIDE_COLLAPSE_BUTTON_WRAPPER: {
              padding: 'space40',
            },
            XSIDE_BETA_BADGE: {
              backgroundColor: 'colorBackgroundAvailable',
            },
          }}
        >
          <Sidebar
            topbarSkipLinkID="topbar"
            mainContentSkipLinkID="main"
            sidebarNavigationSkipLinkID="nav"
            variant="compact"
            element="XSIDE"
          >
            <Box color="colorTextInverse">Sidebar header</Box>
            <SidebarBetaBadge as="span" element="XSIDE_BETA_BADGE">
              Beta
            </SidebarBetaBadge>
            <SidebarFooter element="XSIDE_COLLAPSE_BUTTON_WRAPPER" data-testid="collapseButtonWrapper">
              <SidebarCollapseButton
                element="XSIDE_COLLAPSE_BUTTON"
                i18nCollapseLabel="Close sidebar"
                i18nExpandLabel="Open sidebar"
              />
            </SidebarFooter>
          </Sidebar>

          {/* Must wrap content area */}
          <SidebarPushContentWrapper variant="compact" element="XSIDE_WRAPPER" data-testid="contentwrapper">
            <div>Content area</div>
          </SidebarPushContentWrapper>
        </CustomizationProvider>,
      );
      const nav = screen.getByRole('complementary');
      expect(nav).toHaveStyleRule('margin', '1rem');
      expect(nav).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const sidebarButton = screen.getByRole('button');
      expect(sidebarButton).toHaveStyleRule('padding', '0.75rem');

      const sidebarButtonWrapper = screen.getByTestId('collapseButtonWrapper');
      expect(sidebarButtonWrapper).toHaveStyleRule('padding', '0.75rem');

      const contentWrapper = screen.getByTestId('contentwrapper');
      expect(contentWrapper).toHaveStyleRule('margin', '1rem');
      expect(contentWrapper).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const sidebarBetaBadge = screen.getByText('Beta');
      expect(sidebarBetaBadge).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });
  });
});
