import * as React from 'react';
import {render, screen} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {HorizontalTabs, StateHookTabs} from '../stories/index.stories';
import {Tabs, Tab, TabList, TabPanels, TabPanel} from '../src';

describe('Tabs', () => {
  describe('Render', () => {
    it('relevant html and aria attributes', () => {
      const [tabOneId, tabTwoId, tabThreeId, panelOneId, panelTwoId, panelThreeId] = [...new Array(6)].map(
        (_, i) => `${i}`
      );

      const ManualIdExample: React.FC = () => {
        return (
          <Tabs orientation="horizontal" selectedId={tabOneId} baseId="">
            <TabList aria-label="My tabs">
              <Tab id={tabOneId}>Tab 1 is a long tab name because the server sent a long tab name</Tab>
              <Tab id={tabTwoId}>Tab 2</Tab>
              <Tab id={tabThreeId}>Tab 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel tabId={tabOneId} id={panelOneId}>
                Tab 1
              </TabPanel>
              <TabPanel tabId={tabTwoId} id={panelTwoId}>
                Tab 1
              </TabPanel>
              <TabPanel tabId={tabThreeId} id={panelThreeId}>
                Tab 1
              </TabPanel>
            </TabPanels>
          </Tabs>
        );
      };

      render(<ManualIdExample />);

      const renderedTabList = screen.getByRole('tablist');
      expect(renderedTabList.getAttribute('aria-orientation')).toEqual('horizontal');
      expect(renderedTabList.getAttribute('aria-label')).toEqual('My tabs');

      const [TabOne, TabTwo, TabThree] = screen.queryAllByRole('tab');

      expect(TabOne.getAttribute('aria-controls')).toBe(panelOneId);
      expect(TabOne.getAttribute('aria-selected')).toBe('true');
      expect(TabOne.getAttribute('id')).toBe(tabOneId);
      expect(TabOne.getAttribute('tabindex')).toBe('0');

      expect(TabTwo.getAttribute('aria-controls')).toBe(panelTwoId);
      expect(TabTwo.getAttribute('aria-selected')).toBe('false');
      expect(TabTwo.getAttribute('id')).toBe(tabTwoId);
      expect(TabTwo.getAttribute('tabindex')).toBe('-1');

      expect(TabThree.getAttribute('aria-controls')).toBe(panelThreeId);
      expect(TabThree.getAttribute('aria-selected')).toBe('false');
      expect(TabThree.getAttribute('id')).toBe(tabThreeId);
      expect(TabThree.getAttribute('tabindex')).toBe('-1');

      let activePanel = screen.queryByRole('tabpanel');
      if (activePanel === null) return false;
      expect(activePanel.getAttribute('aria-labelledby')).toBe(tabOneId);
      expect(activePanel.getAttribute('id')).toBe(panelOneId);
      expect(activePanel.getAttribute('tabindex')).toBe('0');

      TabTwo.click();
      activePanel = screen.queryByRole('tabpanel');
      if (activePanel === null) return false;
      expect(activePanel.getAttribute('aria-labelledby')).toBe(tabTwoId);
      expect(activePanel.getAttribute('id')).toBe(panelTwoId);
      expect(activePanel.getAttribute('tabindex')).toBe('0');
    });

    it('should render tabs using the state prop and go to the next tab on button click', () => {
      render(<StateHookTabs />);

      const [ButtonOne] = screen.queryAllByRole('button');

      let activePanel = screen.queryByRole('tabpanel');
      if (activePanel === null) return false;
      expect(activePanel.getAttribute('aria-labelledby')).toBe('state-hook-tab-example-1');
      expect(activePanel.getAttribute('id')).toBe('state-hook-tab-example-3');
      expect(activePanel.getAttribute('tabindex')).toBe('0');

      ButtonOne.click();
      activePanel = screen.queryByRole('tabpanel');
      if (activePanel === null) return false;
      expect(activePanel.getAttribute('aria-labelledby')).toBe('state-hook-tab-example-2');
      expect(activePanel.getAttribute('id')).toBe('state-hook-tab-example-4');
      expect(activePanel.getAttribute('tabindex')).toBe('0');
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<HorizontalTabs />);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
