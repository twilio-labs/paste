import * as React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';

import {
  Sidebar,
  SidebarCollapseButton,
  SidebarCollapseButtonWrapper,
  SidebarPushContentWrapper,
  SidebarOverlayContentWrapper,
} from '../src';
import type {SidebarProps} from '../src';

const MockPushSidebar = ({
  collapsed,
  variant = 'default',
}: {
  collapsed?: boolean;
  variant?: SidebarProps['variant'];
}): JSX.Element => {
  return (
    <Theme.Provider theme="twilio">
      <Sidebar aria-label="main" collapsed={collapsed} variant={variant}>
        <Box color="colorTextInverse">Sidebar header</Box>
        <SidebarCollapseButtonWrapper>
          <SidebarCollapseButton i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
        </SidebarCollapseButtonWrapper>
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
      <Sidebar aria-label="main" collapsed={collapsed} variant={variant}>
        <Box color="colorTextInverse">Sidebar header</Box>
        <SidebarCollapseButtonWrapper>
          <SidebarCollapseButton i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
        </SidebarCollapseButtonWrapper>
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
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('id');
    });

    it('should render expanded', () => {
      render(<MockPushSidebar collapsed={false} />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render expanded by default', () => {
      render(<MockPushSidebar />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render compact width', () => {
      render(<MockPushSidebar collapsed={true} variant="compact" />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('4.75rem');
    });
  });

  /**
   * OVERLAY
   */
  describe('Overlay Sidebar', () => {
    it('should have an id', () => {
      render(<MockOverlaySidebar collapsed />);
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('id');
    });

    it('should render expanded', () => {
      render(<MockOverlaySidebar collapsed={false} />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render expanded by default', () => {
      render(<MockOverlaySidebar />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('15rem');
    });

    it('should render compact width', () => {
      render(<MockOverlaySidebar collapsed={true} variant="compact" />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('4.75rem');
    });
  });

  /**
   * SIDEBAR COLLAPSE BUTTON
   */
  describe('Sidebar Collapse Button', () => {
    it('should have aria-expanded and aria-controls set correctly when collapsed', async () => {
      render(<MockOverlaySidebar collapsed />);
      const toggleButton = screen.getByRole('button');
      const nav = screen.getByRole('navigation');
      expect(toggleButton.getAttribute('aria-controls')).toEqual(nav.getAttribute('id'));
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('false');
      expect(toggleButton.textContent).toBe('Open sidebar');
    });

    it('should have aria-expanded and aria-controls set correctly when expanded', async () => {
      render(<MockOverlaySidebar collapsed={false} />);
      const toggleButton = screen.getByRole('button');
      const nav = screen.getByRole('navigation');
      expect(toggleButton.getAttribute('aria-controls')).toEqual(nav.getAttribute('id'));
      expect(toggleButton.getAttribute('aria-expanded')).toEqual('true');
      expect(toggleButton.textContent).toBe('Close sidebar');
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
            SIDEBAR: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
            SIDEBAR_COLLAPSE_BUTTON: {
              padding: 'space40',
            },
            SIDEBAR_COLLAPSE_BUTTON_WRAPPER: {
              padding: 'space40',
            },
            SIDEBAR_PUSH_CONTENT_WRAPPER: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
          }}
        >
          <Sidebar aria-label="main" variant="compact" data-testid="aaa">
            <Box color="colorTextInverse">Sidebar header</Box>
            <SidebarCollapseButtonWrapper data-testid="collapseButtonWrapper">
              <SidebarCollapseButton i18nCollapseLabel="Close sidebar" i18nExpandLabel="Open sidebar" />
            </SidebarCollapseButtonWrapper>
          </Sidebar>

          {/* Must wrap content area */}
          <SidebarPushContentWrapper variant="compact" data-testid="contentwrapper">
            <div>Content area</div>
          </SidebarPushContentWrapper>
        </CustomizationProvider>
      );
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveStyleRule('margin', '1rem');
      expect(nav).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const sidebarButton = screen.getByRole('button');
      expect(sidebarButton).toHaveStyleRule('padding', '0.75rem');

      const sidebarButtonWrapper = screen.getByTestId('collapseButtonWrapper');
      expect(sidebarButtonWrapper).toHaveStyleRule('padding', '0.75rem');

      const contentWrapper = screen.getByTestId('contentwrapper');
      expect(contentWrapper).toHaveStyleRule('margin', '1rem');
      expect(contentWrapper).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
    });

    it('should work with custom element values', () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            XSIDE: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
            XSIDE_WRAPPER: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
            XSIDE_COLLAPSE_BUTTON: {
              padding: 'space40',
            },
            XSIDE_COLLAPSE_BUTTON_WRAPPER: {
              padding: 'space40',
            },
          }}
        >
          <Sidebar aria-label="main" variant="compact" element="XSIDE">
            <Box color="colorTextInverse">Sidebar header</Box>
            <SidebarCollapseButtonWrapper element="XSIDE_COLLAPSE_BUTTON_WRAPPER" data-testid="collapseButtonWrapper">
              <SidebarCollapseButton
                element="XSIDE_COLLAPSE_BUTTON"
                i18nCollapseLabel="Close sidebar"
                i18nExpandLabel="Open sidebar"
              />
            </SidebarCollapseButtonWrapper>
          </Sidebar>

          {/* Must wrap content area */}
          <SidebarPushContentWrapper variant="compact" element="XSIDE_WRAPPER" data-testid="contentwrapper">
            <div>Content area</div>
          </SidebarPushContentWrapper>
        </CustomizationProvider>
      );
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveStyleRule('margin', '1rem');
      expect(nav).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const sidebarButton = screen.getByRole('button');
      expect(sidebarButton).toHaveStyleRule('padding', '0.75rem');

      const sidebarButtonWrapper = screen.getByTestId('collapseButtonWrapper');
      expect(sidebarButtonWrapper).toHaveStyleRule('padding', '0.75rem');

      const contentWrapper = screen.getByTestId('contentwrapper');
      expect(contentWrapper).toHaveStyleRule('margin', '1rem');
      expect(contentWrapper).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
    });
  });
});
