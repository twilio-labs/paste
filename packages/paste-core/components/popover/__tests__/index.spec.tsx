import * as React from 'react';
import {render, screen, waitFor} from '@testing-library/react';

import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Text} from '@twilio-paste/text';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {PopoverTop, StateHookExample, BadgePopover} from '../stories/index.stories';
import {Popover, PopoverContainer, PopoverButton} from '../src';

describe('Popover', () => {
  describe('Render', () => {
    it('should render a popover button with aria attributes', async () => {
      render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>
      );
      const renderedPopoverButton = screen.getByRole('button');
      const renderedPopover = screen.getByTestId('top-popover');
      expect(renderedPopoverButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedPopoverButton.getAttribute('aria-controls')).toEqual('test-id');
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('false');
      expect(renderedPopover).not.toBeVisible();
      renderedPopoverButton.click();
      await waitFor(() => expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('true'));
      await waitFor(() => expect(renderedPopover).toBeVisible());
    });

    it('should render a popover', () => {
      render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>
      );
      const renderedPopover = screen.getByLabelText('Popover');
      expect(renderedPopover.getAttribute('role')).toEqual('dialog');
    });

    it('should render a popover and show/hide on external button click', () => {
      render(
        <Theme.Provider theme="default">
          <StateHookExample />
        </Theme.Provider>
      );

      const ButtonOne = screen.queryByTestId('show-button');
      const ButtonTwo = screen.queryByTestId('hide-button');

      let popover = screen.queryByTestId('state-hook-popover');

      if (ButtonOne === null || ButtonTwo === null || popover === null) {
        return;
      }
      expect(popover.getAttribute('hidden')).toBeDefined();

      ButtonOne.click();
      popover = screen.queryByTestId('state-hook-popover');
      if (popover === null) {
        return;
      }
      expect(popover).toBeVisible();

      ButtonTwo.click();
      popover = screen.queryByTestId('state-hook-popover');
      if (popover === null) {
        return;
      }
      expect(popover).not.toBeVisible();
    });
  });

  describe('PopoverBadge', () => {
    it('renders PopoverBadgeButton as a Badge', () => {
      render(
        <Theme.Provider theme="default">
          <BadgePopover />
        </Theme.Provider>
      );
      const popoverButton = screen.getByRole('button', {name: 'Open popover'});
      expect(popoverButton).toHaveAttribute('data-paste-element', 'BUTTON');

      expect(popoverButton.querySelector('[data-paste-element="POPOVER_BADGE"]')).toBeInTheDocument();
    });

    it('should render a popover badge button with aria attributes', async () => {
      render(
        <Theme.Provider theme="default">
          <BadgePopover />
        </Theme.Provider>
      );
      const renderedPopoverButton = screen.getByRole('button', {name: 'Open popover'});
      const renderedPopover = screen.getByTestId('badge-popover');
      expect(renderedPopoverButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedPopoverButton.getAttribute('aria-controls')).toEqual('test-id');
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('false');
      expect(renderedPopover).not.toBeVisible();
      renderedPopoverButton.click();
      await waitFor(() => expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('true'));
      await waitFor(() => expect(renderedPopover).toBeVisible());
    });
  });

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Customization', () => {
    it('should set default data-paste-element attribute on Popover and customizable children and respect custom styles', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            POPOVER: {
              backgroundColor: 'colorBackground',
            },
            POPOVER_BUTTON: {
              backgroundColor: 'colorBackgroundBrandStronger',
            },
            POPOVER_CLOSE_BUTTON: {
              backgroundColor: 'colorBackgroundBodyInverse',
            },
            POPOVER_CLOSE_ICON: {
              color: 'colorTextInverse',
            },
          }}
        >
          <PopoverContainer baseId="test-id">
            <PopoverButton variant="primary" data-testid="popover-button">
              Open popover
            </PopoverButton>
            <Popover aria-label="Popover" data-testid="popover">
              <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
            </Popover>
          </PopoverContainer>
        </CustomizationProvider>
      );

      const popoverComp = screen.getByTestId('popover');
      const popoverButton = screen.getByTestId('popover-button');

      // presence of popover hooks
      expect(popoverComp.querySelector('[data-paste-element="POPOVER"]')).toBeInTheDocument();
      expect(popoverComp.querySelector('[data-paste-element="POPOVER_CLOSE_BUTTON"]')).toBeInTheDocument();
      expect(popoverComp.querySelector('[data-paste-element="POPOVER_CLOSE_ICON"]')).toBeInTheDocument();
      expect(popoverButton).toHaveAttribute('data-paste-element', 'POPOVER_BUTTON');

      // applied style rules
      expect(popoverComp.querySelector('[data-paste-element="POPOVER"]')).toHaveStyleRule(
        'background-color',
        'rgb(244,244,246)'
      );
      expect(popoverComp.querySelector('[data-paste-element="POPOVER_CLOSE_BUTTON"]')).toHaveStyleRule(
        'background-color',
        'rgb(18,28,45)'
      );
      expect(popoverComp.querySelector('[data-paste-element="POPOVER_CLOSE_ICON"]')).toHaveStyleRule(
        'color',
        'rgb(255,255,255)'
      );
      expect(popoverButton).toHaveStyleRule('background-color', 'rgb(6,3,58)');
    });

    it('should set a custom element name and properly apply styles to Popover and customizable children', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            MYPOPOVER: {
              backgroundColor: 'colorBackground',
            },
            MYPOPOVER_BUTTON: {
              backgroundColor: 'colorBackgroundBrandStronger',
            },
            MYPOPOVER_CLOSE_BUTTON: {
              backgroundColor: 'colorBackgroundBodyInverse',
            },
            MYPOPOVER_CLOSE_ICON: {
              color: 'colorTextInverse',
            },
          }}
        >
          <PopoverContainer baseId="test-id">
            <PopoverButton element="MYPOPOVER_BUTTON" variant="primary" data-testid="popover-button">
              Open popover
            </PopoverButton>
            <Popover element="MYPOPOVER" aria-label="Popover" data-testid="popover">
              <Text as="span">This is the Twilio styled popover that you can use in all your applications.</Text>
            </Popover>
          </PopoverContainer>
        </CustomizationProvider>
      );

      const popoverComp = screen.getByTestId('popover');
      const popoverButton = screen.getByTestId('popover-button');

      expect(popoverComp.querySelector('[data-paste-element="MYPOPOVER"]')).toHaveStyleRule(
        'background-color',
        'rgb(244,244,246)'
      );
      expect(popoverComp.querySelector('[data-paste-element="MYPOPOVER_CLOSE_BUTTON"]')).toHaveStyleRule(
        'background-color',
        'rgb(18,28,45)'
      );
      expect(popoverComp.querySelector('[data-paste-element="MYPOPOVER_CLOSE_ICON"]')).toHaveStyleRule(
        'color',
        'rgb(255,255,255)'
      );

      expect(popoverButton).toHaveStyleRule('background-color', 'rgb(6,3,58)');
    });
  });

  describe('i18n', () => {
    it('should have default dismiss button text', () => {
      render(
        <Theme.Provider theme="default">
          <PopoverContainer baseId="test-id" visible>
            <PopoverButton variant="primary">Open popover</PopoverButton>
            <Popover aria-label="Popover">Foo</Popover>
          </PopoverContainer>
        </Theme.Provider>
      );

      const dismissButton = screen.getByRole('button', {name: 'Close popover'});
      expect(dismissButton).toBeDefined();
    });

    it('should use i18nKeyboardControls for dismiss button text', () => {
      render(
        <Theme.Provider theme="default">
          <PopoverContainer baseId="test-id" visible>
            <PopoverButton variant="primary">Abrir popover</PopoverButton>
            <Popover aria-label="Popover" i18nDismissLabel="Cerrar popover">
              Foo
            </Popover>
          </PopoverContainer>
        </Theme.Provider>
      );

      const dismissButton = screen.getByRole('button', {name: 'Cerrar popover'});
      expect(dismissButton).toBeDefined();
    });
  });
});
