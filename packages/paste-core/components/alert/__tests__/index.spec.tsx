import * as React from 'react';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react';
import {ReactWrapper, mount} from 'enzyme';
import {matchers} from 'jest-emotion';
import {Theme} from '@twilio-paste/theme';
import {CustomizationProvider} from '@twilio-paste/customization';
// @ts-ignore
import axe from '../../../../../.jest/axe-helper';
import {Alert} from '../src';

expect.extend(matchers);

const onDismissMock: jest.Mock = jest.fn();

describe('Alert', () => {
  describe('Dismiss button', () => {
    it('Should add a dismiss button when onDismiss is passed as a function to call', () => {
      const eventHandlerMock: jest.Mock = jest.fn();
      const wrapper: ReactWrapper = mount(
        <Alert onDismiss={eventHandlerMock} variant="neutral">
          This is an alert
        </Alert>
      );
      expect(wrapper.find('button').length).toEqual(1);
    });

    it('Should call the onDismiss event handler when close button clicked', () => {
      const eventHandlerMock: jest.Mock = jest.fn();
      const wrapper: ReactWrapper = mount(
        <Alert onDismiss={eventHandlerMock} variant="neutral">
          This is an alert
        </Alert>
      );
      wrapper.find('button').simulate('click');
      expect(eventHandlerMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('Aria roles', () => {
    it('Should add the role of status to the neutral alert', () => {
      const wrapper: ReactWrapper = mount(<Alert variant="neutral">This is an alert</Alert>);
      expect(wrapper.exists('[role="status"]')).toEqual(true);
    });

    it('Should add the role of alert to the error alert', () => {
      const wrapper: ReactWrapper = mount(<Alert variant="error">This is an alert</Alert>);
      expect(wrapper.exists('[role="alert"]')).toEqual(true);
    });

    it('Should add the role of alert to the warning alert', () => {
      const wrapper: ReactWrapper = mount(<Alert variant="warning">This is an alert</Alert>);
      expect(wrapper.exists('[role="alert"]')).toEqual(true);
    });

    it('Should add the provided role to the alert', () => {
      const wrapper: ReactWrapper = mount(
        <Alert role="tab" variant="error">
          This is an alert
        </Alert>
      );
      expect(wrapper.exists('[role="tab"]')).toEqual(true);
    });
  });

  describe('Variant neutral', () => {
    it('Should render a neutral alert', (): void => {
      const tree = renderer
        .create(
          <Theme.Provider theme="console">
            <Alert variant="neutral">This is an alert</Alert>
          </Theme.Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should render a neutral alert with dismiss button', (): void => {
      const tree = renderer
        .create(
          <Theme.Provider theme="console">
            <Alert onDismiss={onDismissMock} variant="neutral">
              This is an alert
            </Alert>
          </Theme.Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Theme.Provider theme="console">
          <Alert variant="neutral">This is a neutral alert</Alert>
          <Alert onDismiss={onDismissMock} variant="neutral">
            This is a neutral alert
          </Alert>
        </Theme.Provider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Variant error', () => {
    it('Should render an error alert', (): void => {
      const tree = renderer
        .create(
          <Theme.Provider theme="console">
            <Alert variant="error">This is an error alert</Alert>
          </Theme.Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should render an error alert with dismiss button', (): void => {
      const tree = renderer
        .create(
          <Theme.Provider theme="console">
            <Alert onDismiss={onDismissMock} variant="error">
              This is an error alert
            </Alert>
          </Theme.Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Theme.Provider theme="console">
          <Alert variant="error">This is a error alert</Alert>
          <Alert onDismiss={onDismissMock} variant="error">
            This is a error alert
          </Alert>
        </Theme.Provider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Variant warning', () => {
    it('Should render an warning alert', (): void => {
      const tree = renderer
        .create(
          <Theme.Provider theme="console">
            <Alert variant="warning">This is an warning alert</Alert>
          </Theme.Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should render an warning alert with dismiss button', (): void => {
      const tree = renderer
        .create(
          <Theme.Provider theme="console">
            <Alert onDismiss={onDismissMock} variant="warning">
              This is an warning alert
            </Alert>
          </Theme.Provider>
        )
        .toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Should have no accessibility violations', async () => {
      const {container} = render(
        <Theme.Provider theme="console">
          <Alert variant="warning">This is a warning alert</Alert>
          <Alert onDismiss={onDismissMock} variant="warning">
            This is a warning alert
          </Alert>
        </Theme.Provider>
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Customization', () => {
    it('should set default data-paste-element attribute on Alert and customizable Alert children', (): void => {
      render(
        <CustomizationProvider baseTheme="default">
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
