import * as React from 'react';
import {render, screen} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';

import {Sidebar, PushSidebarContentWrapper, OverlaySidebarContentWrapper} from '../src';
import type {Variants} from '../src';

const MockPushSidebar = ({collapsed, variant = 'default'}: {collapsed?: boolean; variant?: Variants}): JSX.Element => {
  return (
    <Theme.Provider theme="twilio">
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={collapsed} variant={variant}>
        <div>Sidebar area</div>
      </Sidebar>

      {/* Must wrap content area */}
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
      {/* Can be placed anywhere - position fixed */}
      <Sidebar collapsed={collapsed} variant={variant}>
        <div>Sidebar area</div>
      </Sidebar>

      {/* Must wrap content area */}
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
});
