import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import {Box} from '@twilio-paste/box';
import {CustomizationProvider} from '@twilio-paste/customization';

import {Sidebar, PushSidebarContentWrapper, OverlaySidebarContentWrapper} from '../src';
import type {Variants} from '../src';

const MockPushSidebar = ({collapsed, variant = 'default'}: {collapsed?: boolean; variant?: Variants}): JSX.Element => {
  return (
    <Theme.Provider theme="twilio">
      <Sidebar collapsed={collapsed} variant={variant}>
        <Box color="colorTextInverse">Sidebar header</Box>
      </Sidebar>
      <PushSidebarContentWrapper collapsed={collapsed} variant={variant}>
        <div>Content area</div>
      </PushSidebarContentWrapper>
    </Theme.Provider>
  );
};

const MockOverlaySidebar = ({
  collapsed,
  variant = 'default',
}: {
  collapsed?: boolean;
  variant?: Variants;
}): JSX.Element => {
  return (
    <Theme.Provider theme="twilio">
      <Sidebar collapsed={collapsed} variant={variant}>
        <Box color="colorTextInverse">Sidebar header</Box>
      </Sidebar>
      <OverlaySidebarContentWrapper collapsed={collapsed} variant={variant}>
        <div>Content area</div>
      </OverlaySidebarContentWrapper>
    </Theme.Provider>
  );
};

describe('Sidebar', () => {
  /**
   * PUSH
   */
  describe('Push Sidebar', () => {
    it('should render collapsed', async () => {
      render(<MockPushSidebar collapsed />);
      const nav = screen.getByRole('navigation');
      expect(nav.getAttribute('aria-expanded')).toEqual('false');
    });

    it('should render expanded', async () => {
      render(<MockPushSidebar collapsed={false} />);
      const nav = screen.getByRole('navigation');
      expect(nav.getAttribute('aria-expanded')).toEqual('true');
    });

    it('should render expanded by default', async () => {
      render(<MockPushSidebar />);
      const nav = screen.getByRole('navigation');
      expect(nav.getAttribute('aria-expanded')).toEqual('true');
    });

    it('should render compact width', async () => {
      render(<MockPushSidebar collapsed={true} variant="compact" />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('4.75rem');
    });
  });

  /**
   * OVERLAY
   */
  describe('Overlay Sidebar', () => {
    it('should render collapsed', async () => {
      render(<MockOverlaySidebar collapsed />);
      const nav = screen.getByRole('navigation');
      expect(nav.getAttribute('aria-expanded')).toEqual('false');
    });

    it('should render expanded', async () => {
      render(<MockOverlaySidebar collapsed={false} />);
      const nav = screen.getByRole('navigation');
      expect(nav.getAttribute('aria-expanded')).toEqual('true');
    });

    it('should render expanded by default', async () => {
      render(<MockOverlaySidebar />);
      const nav = screen.getByRole('navigation');
      expect(nav.getAttribute('aria-expanded')).toEqual('true');
    });

    it('should render compact width', async () => {
      render(<MockOverlaySidebar collapsed={true} variant="compact" />);
      const nav = screen.getByRole('navigation');
      expect(nav.style.width).toBe('4.75rem');
    });
  });

  /**
   * Customization
   */
  describe('Customization', () => {
    it('should work with default element values', async () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            SIDEBAR: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
            PUSH_SIDEBAR_CONTENT_WRAPPER: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
          }}
        >
          <Sidebar variant="compact" data-testid="aaa">
            <Box color="colorTextInverse">Sidebar header</Box>
          </Sidebar>

          {/* Must wrap content area */}
          <PushSidebarContentWrapper variant="compact" data-testid="contentwrapper">
            <div>Content area</div>
          </PushSidebarContentWrapper>
        </CustomizationProvider>
      );
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveStyleRule('margin', '1rem');
      expect(nav).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const contentWrapper = screen.getByTestId('contentwrapper');
      expect(contentWrapper).toHaveStyleRule('margin', '1rem');
      expect(contentWrapper).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
    });

    it('should work with custom element values', async () => {
      render(
        <CustomizationProvider
          baseTheme="default"
          theme={TestTheme}
          elements={{
            XSIDE: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
            XSIDE_WRAPPER: {backgroundColor: 'colorBackgroundPrimary', margin: 'space50'},
          }}
        >
          <Sidebar variant="compact" element="XSIDE">
            <Box color="colorTextInverse">Sidebar header</Box>
          </Sidebar>

          {/* Must wrap content area */}
          <PushSidebarContentWrapper variant="compact" element="XSIDE_WRAPPER" data-testid="contentwrapper">
            <div>Content area</div>
          </PushSidebarContentWrapper>
        </CustomizationProvider>
      );
      const nav = screen.getByRole('navigation');
      expect(nav).toHaveStyleRule('margin', '1rem');
      expect(nav).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');

      const contentWrapper = screen.getByTestId('contentwrapper');
      expect(contentWrapper).toHaveStyleRule('margin', '1rem');
      expect(contentWrapper).toHaveStyleRule('background-color', 'rgb(2, 99, 224)');
    });
  });
});
