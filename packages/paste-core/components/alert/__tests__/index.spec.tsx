import * as React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore
import axe from '../../../../../.jest/axe-helper';
import {Alert} from '../src';

const onDismissMock: jest.Mock = jest.fn();

describe('Alert', () => {
  describe('Dismiss button', () => {
    it('Should add a dismiss button when onDismiss is passed as a function to call', () => {
      const eventHandlerMock: jest.Mock = jest.fn();
      const {getByRole} = render(
        <Alert onDismiss={eventHandlerMock} variant="neutral">
          This is an alert
        </Alert>
      );

      expect(getByRole('button')).toBeInTheDocument();
    });

    it('Should call the onDismiss event handler when close button clicked', () => {
      const eventHandlerMock: jest.Mock = jest.fn();

      const {getByRole} = render(
        <Alert onDismiss={eventHandlerMock} variant="neutral">
          This is an alert
        </Alert>
      );

      const button = getByRole('button');
      userEvent.click(button);
      expect(eventHandlerMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Aria roles', () => {
    it('Should add the role of status to the neutral alert', () => {
      const {getByRole} = render(<Alert variant="neutral">This is an alert</Alert>);
      expect(getByRole('status')).toBeInTheDocument();
    });

    it('Should add the role of alert to the error alert', () => {
      const {getByRole} = render(<Alert variant="error">This is an alert</Alert>);
      expect(getByRole('alert')).toBeInTheDocument();
    });

    it('Should add the role of alert to the warning alert', () => {
      const {getByRole} = render(<Alert variant="warning">This is an alert</Alert>);
      expect(getByRole('alert')).toBeInTheDocument();
    });

    it('Should add the provided role to the alert', () => {
      const {getByRole} = render(
        <Alert role="tab" variant="error">
          This is an alert
        </Alert>
      );
      expect(getByRole('tab')).toBeInTheDocument();
    });
  });

  describe('Variant neutral', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Alert variant="neutral">This is a neutral alert</Alert>
          <Alert onDismiss={onDismissMock} variant="neutral">
            This is a neutral alert
          </Alert>
        </CustomizationProvider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Variant error', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Alert variant="error">This is a error alert</Alert>
          <Alert onDismiss={onDismissMock} variant="error">
            This is a error alert
          </Alert>
        </CustomizationProvider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Variant warning', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Alert variant="warning">This is a warning alert</Alert>
          <Alert onDismiss={onDismissMock} variant="warning">
            This is a warning alert
          </Alert>
        </CustomizationProvider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Customization', () => {
    it('should set default data-paste-element attribute on Alert and customizable Alert children', (): void => {
      render(
        <CustomizationProvider baseTheme="default" theme={TestTheme}>
          <Alert data-testid="alert-customization" variant="neutral" onDismiss={onDismissMock}>
            This is my test alert
          </Alert>
        </CustomizationProvider>
      );

      const alert = screen.getByTestId('alert-customization');
      expect(alert).toHaveAttribute('data-paste-element', 'ALERT');

      expect(alert.querySelector('[data-paste-element="ALERT_ICON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_BUTTON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_ICON"]')).toBeInTheDocument();
    });

    it('should add custom styles to Alert and Alert children', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            ALERT: {
              backgroundColor: 'colorBackground',
            },
            ALERT_ICON: {
              color: 'colorTextIconNeutral',
            },
            ALERT_DISMISS_BUTTON: {
              backgroundColor: 'colorBackgroundBodyInverse',
            },
            ALERT_DISMISS_ICON: {
              color: 'colorTextInverse',
            },
          }}
        >
          <Alert data-testid="alert-customization" variant="neutral" onDismiss={onDismissMock}>
            This is my test alert
          </Alert>
        </CustomizationProvider>
      );

      const alert = screen.getByTestId('alert-customization');

      expect(alert).toHaveStyleRule('background-color', 'rgb(244,244,246)');
      expect(alert.querySelector('[data-paste-element="ALERT_ICON"]')).toHaveStyleRule('color', 'rgb(0,20,137)');
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_BUTTON"]')).toHaveStyleRule(
        'background-color',
        'rgb(18,28,45)'
      );
      expect(alert.querySelector('[data-paste-element="ALERT_DISMISS_ICON"]')).toHaveStyleRule(
        'color',
        'rgb(255,255,255)'
      );
    });

    it('should set custom element name and properly apply styles to Alert and customizable children', (): void => {
      render(
        <CustomizationProvider
          baseTheme="default"
          elements={{
            MYALERT: {
              backgroundColor: 'colorBackground',
            },
            MYALERT_ICON: {
              color: 'colorTextIconNeutral',
            },
            MYALERT_DISMISS_BUTTON: {
              backgroundColor: 'colorBackgroundBodyInverse',
            },
            MYALERT_DISMISS_ICON: {
              color: 'colorTextInverse',
            },
          }}
        >
          <Alert data-testid="alert-customization" element="MYALERT" variant="neutral" onDismiss={onDismissMock}>
            This is my test alert
          </Alert>
        </CustomizationProvider>
      );

      const alert = screen.getByTestId('alert-customization');
      expect(alert).toHaveAttribute('data-paste-element', 'MYALERT');

      expect(alert.querySelector('[data-paste-element="MYALERT_ICON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_BUTTON"]')).toBeInTheDocument();
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_ICON"]')).toBeInTheDocument();

      expect(alert).toHaveStyleRule('background-color', 'rgb(244,244,246)');
      expect(alert.querySelector('[data-paste-element="MYALERT_ICON"]')).toHaveStyleRule('color', 'rgb(0,20,137)');
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_BUTTON"]')).toHaveStyleRule(
        'background-color',
        'rgb(18,28,45)'
      );
      expect(alert.querySelector('[data-paste-element="MYALERT_DISMISS_ICON"]')).toHaveStyleRule(
        'color',
        'rgb(255,255,255)'
      );
    });
  });
});
