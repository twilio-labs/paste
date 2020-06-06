import * as React from 'react';
import {axe} from 'jest-axe';
import {render, screen} from '@testing-library/react';
import {HorizontalTabsExample, VerticalTabsExample} from '../stories/index.stories';

describe('Tabs', () => {
  describe('Render', () => {
    it('horizontally and vertically', () => {
      const {asFragment} = render(
        <>
          <HorizontalTabsExample />
          <VerticalTabsExample />
        </>
      );
      expect(asFragment()).toMatchSnapshot();
    });

    it('relevant html and aria attributes', () => {
      render(<HorizontalTabsExample />);

      const renderedTabList = screen.getByRole('tablist');
      expect(renderedTabList.getAttribute('aria-orientation')).toEqual('horizontal');
      expect(renderedTabList.getAttribute('aria-label')).toEqual('My tabs');

      const renderedTabs = screen.queryAllByRole('tab');
      renderedTabs.forEach(renderedTab => {
        expect(renderedTab.getAttribute('aria-controls')).toBeDefined();
        expect(renderedTab.getAttribute('aria-selected')).toBeDefined();
        expect(renderedTab.getAttribute('id')).toBeDefined();
        expect(renderedTab.getAttribute('tabindex')).toBeDefined();
      });

      const renderedTabPanels = screen.queryAllByRole('tabpanel');
      renderedTabPanels.forEach(renderedTabPanel => {
        expect(renderedTabPanel.getAttribute('aria-labelledby')).toBeDefined();
        expect(renderedTabPanel.getAttribute('id')).toBeDefined();
        expect(renderedTabPanel.getAttribute('tabindex')).toBeDefined();
      });
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<HorizontalTabsExample />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
