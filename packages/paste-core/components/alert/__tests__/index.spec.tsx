import * as React from 'react';
import renderer from 'react-test-renderer';
import {render} from 'react-dom';
import {ReactWrapper, mount} from 'enzyme';
import {Theme} from '@twilio-paste/theme';
import axe from '../../../../../.jest/axe-helper';
import {Alert} from '../src';

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
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Alert variant="neutral">This is a neutral alert</Alert>
          <Alert onDismiss={onDismissMock} variant="neutral">
            This is a neutral alert
          </Alert>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
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
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Alert variant="error">This is a error alert</Alert>
          <Alert onDismiss={onDismissMock} variant="error">
            This is a error alert
          </Alert>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
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
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Alert variant="warning">This is a warning alert</Alert>
          <Alert onDismiss={onDismissMock} variant="warning">
            This is a warning alert
          </Alert>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });
  });
});
