import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CustomizationProvider } from '@twilio-paste/customization';
import { Text } from '@twilio-paste/text';
import { Theme } from '@twilio-paste/theme';
import * as React from 'react';

import { Popover, PopoverButton, PopoverContainer } from '../src';
import { BadgePopover, InitialFocus, PopoverTop, StateHookExample } from '../stories/index.stories';

describe('Popover', () => {
  describe('Render', () => {
    it('should render a popover button with aria attributes', async () => {
      render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>,
      );
      const renderedPopoverButton = screen.getByRole('button');
      const renderedPopover = screen.getByTestId('top-popover');
      expect(renderedPopoverButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedPopoverButton.getAttribute('aria-controls')).toEqual(renderedPopover.id);
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('false');
      expect(renderedPopover).not.toBeVisible();
      await waitFor(() => {
        userEvent.click(renderedPopoverButton);
      });
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('true');
      expect(renderedPopover).toBeVisible();
    });

    it('should render a popover', () => {
      render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>,
      );
      const renderedPopover = screen.getByLabelText('Popover');
      expect(renderedPopover.getAttribute('role')).toEqual('dialog');
    });

    it('should focus the close button when the popover opens', async () => {
      render(
        <Theme.Provider theme="default">
          <PopoverTop />
        </Theme.Provider>,
      );

      const renderedPopoverButton = screen.getByRole('button');

      await waitFor(() => {
        userEvent.click(renderedPopoverButton);
      });

      expect(document.activeElement).toEqual(screen.getByRole('button', { name: 'Close popover' }));
    });

    it('should focus the initialFocusRef when the popver opens', async () => {
      render(
        <Theme.Provider theme="default">
          <InitialFocus />
        </Theme.Provider>,
      );

      const renderedPopoverButton = screen.getByRole('button');

      await waitFor(() => {
        userEvent.click(renderedPopoverButton);
      });

      expect(document.activeElement).toEqual(screen.getByRole('button', { name: 'Click me' }));
    });

    it('should render a popover and show/hide on external button click', async () => {
      render(
        <Theme.Provider theme="default">
          <StateHookExample />
        </Theme.Provider>,
      );

      const ButtonOne = screen.queryByTestId('show-button');
      const ButtonTwo = screen.queryByTestId('hide-button');

      let popover = screen.queryByTestId('state-hook-popover');

      if (ButtonOne === null || ButtonTwo === null || popover === null) {
        return;
      }
      expect(popover.getAttribute('hidden')).toBeDefined();

      await waitFor(() => {
        userEvent.click(ButtonOne);
      });

      popover = screen.queryByTestId('state-hook-popover');
      if (popover === null) {
        return;
      }
      expect(popover).toBeVisible();

      await waitFor(() => {
        userEvent.click(ButtonTwo);
      });
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
        </Theme.Provider>,
      );
      const popoverButton = screen.getByRole('button', { name: 'Open popover' });
      expect(popoverButton).toHaveAttribute('data-paste-element', 'POPOVER_BADGE');
    });

    it('should render a popover badge button with aria attributes', async () => {
      render(
        <Theme.Provider theme="default">
          <BadgePopover />
        </Theme.Provider>,
      );
      const renderedPopoverButton = screen.getByRole('button', { name: 'Open popover' });
      const renderedPopover = screen.getByTestId('badge-popover');
      expect(renderedPopoverButton.getAttribute('aria-haspopup')).toEqual('dialog');
      expect(renderedPopoverButton.getAttribute('aria-controls')).toEqual(renderedPopover.id);
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('false');
      expect(renderedPopover).not.toBeVisible();
      await waitFor(() => {
        userEvent.click(renderedPopoverButton);
      });
      expect(renderedPopoverButton.getAttribute('aria-expanded')).toEqual('true');
      expect(renderedPopover).toBeVisible();
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
        </CustomizationProvider>,
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
        'rgb(244, 244, 246)',
      );
      expect(popoverComp.querySelector('[data-paste-element="POPOVER_CLOSE_BUTTON"]')).toHaveStyleRule(
        'background-color',
        'rgb(18, 28, 45)',
      );
      expect(popoverComp.querySelector('[data-paste-element="POPOVER_CLOSE_ICON"]')).toHaveStyleRule(
        'color',
        'rgb(255, 255, 255)',
      );
      expect(popoverButton).toHaveStyleRule('background-color', 'rgb(6, 3, 58)');
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
        </CustomizationProvider>,
      );

      const popoverComp = screen.getByTestId('popover');
      const popoverButton = screen.getByTestId('popover-button');

      expect(popoverComp.querySelector('[data-paste-element="MYPOPOVER"]')).toHaveStyleRule(
        'background-color',
        'rgb(244, 244, 246)',
      );
      expect(popoverComp.querySelector('[data-paste-element="MYPOPOVER_CLOSE_BUTTON"]')).toHaveStyleRule(
        'background-color',
        'rgb(18, 28, 45)',
      );
      expect(popoverComp.querySelector('[data-paste-element="MYPOPOVER_CLOSE_ICON"]')).toHaveStyleRule(
        'color',
        'rgb(255, 255, 255)',
      );

      expect(popoverButton).toHaveStyleRule('background-color', 'rgb(6, 3, 58)');
    });
  });

  describe('i18n', () => {
    it('should have default dismiss button text', async () => {
      render(
        <Theme.Provider theme="default">
          <PopoverContainer baseId="test-id">
            <PopoverButton variant="primary">Open popover</PopoverButton>
            <Popover aria-label="Popover">Foo</Popover>
          </PopoverContainer>
        </Theme.Provider>,
      );

      const popoverButton = screen.getByRole('button');
      await waitFor(() => {
        userEvent.click(popoverButton);
      });

      const dismissButton = screen.getByRole('button', { name: 'Close popover' });
      expect(dismissButton).toBeDefined();
    });

    it('should use i18nKeyboardControls for dismiss button text', async () => {
      render(
        <Theme.Provider theme="default">
          <PopoverContainer baseId="test-id">
            <PopoverButton variant="primary">Abrir popover</PopoverButton>
            <Popover aria-label="Popover" i18nDismissLabel="Cerrar popover">
              Foo
            </Popover>
          </PopoverContainer>
        </Theme.Provider>,
      );

      const popoverButton = screen.getByRole('button');
      await waitFor(() => {
        userEvent.click(popoverButton);
      });

      const dismissButton = screen.getByRole('button', { name: 'Cerrar popover' });
      expect(dismissButton).toBeDefined();
    });
  });
});
