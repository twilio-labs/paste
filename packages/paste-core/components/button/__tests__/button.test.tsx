import * as React from 'react';
import {matchers} from 'jest-emotion';
import {render} from 'react-dom';
import {render as testRender} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import type {ReactWrapper} from 'enzyme';
import {shallow, mount} from 'enzyme';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {Button} from '../src';

expect.extend(matchers);

const NOOP = (): void => {};
const HREF = 'https://twilio.paste.design';

describe('Button', () => {
  describe('Button axe checker', () => {
    it('Primary has no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="primary" type="submit" onClick={NOOP}>
            Submit
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('Secondary has no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="secondary" type="button" onClick={NOOP}>
            Submit
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('Destructive has no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="destructive" onClick={NOOP}>
            Delete
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('Destructive_secondary has no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="destructive_secondary" onClick={NOOP}>
            Delete
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('Destructive_link has no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="destructive_link" onClick={NOOP}>
            Undo
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('Link button has no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="link" onClick={NOOP}>
            Go to Paste
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('Loading states have no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="primary" loading>
            Submit
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });

    it('Disabled states have no accessibility violations', async () => {
      const container = document.createElement('div');
      document.body.append(container);
      render(
        <Theme.Provider theme="console">
          <Button variant="destructive" disabled>
            Submit
          </Button>
        </Theme.Provider>,
        container
      );
      const results = await axe(document.body);
      expect(results).toHaveNoViolations();
    });
  });

  describe('Button Errors', () => {
    it('Throws an error when a href is passed but an "a" tag is not', () => {
      expect(() =>
        shallow(
          <Button variant="primary" href={HREF}>
            Go to Paste
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when an "a" tag is passed but a href is not', () => {
      expect(() =>
        shallow(
          <Button as="a" variant="primary">
            Go to Paste
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when the user should use an Anchor component instead', () => {
      expect(() =>
        shallow(
          <Button as="a" variant="link" href={HREF}>
            Go to Paste
          </Button>
        )
      ).toThrow();
      expect(() =>
        shallow(
          <Button as="a" variant="inverse_link" href={HREF}>
            Go to Paste
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when an "a" tag is passed but not using correct variant', () => {
      expect(() =>
        shallow(
          <Button as="a" href="#" variant="destructive">
            Go to Paste
          </Button>
        )
      ).toThrow();
      expect(() =>
        shallow(
          <Button as="a" href="#" variant="destructive_secondary">
            Go to Paste
          </Button>
        )
      ).toThrow();
      expect(() =>
        shallow(
          <Button as="a" href="#" variant="inverse">
            Go to Paste
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when an "a" tag is passed with disabled or loading state', () => {
      expect(() =>
        shallow(
          <Button as="a" href="#" variant="primary" disabled>
            Go to Paste
          </Button>
        )
      ).toThrow();

      expect(() =>
        shallow(
          <Button as="a" href="#" variant="primary" loading>
            Go to Paste
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when size=reset is not applied to variant=reset', () => {
      expect(() =>
        shallow(
          <Button variant="reset" size="small">
            Submit
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when using fullWidth with an icon sizing', () => {
      expect(() =>
        shallow(
          <Button variant="primary" fullWidth size="icon">
            X
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when using fullWidth with an icon_small sizing', () => {
      expect(() =>
        shallow(
          <Button variant="primary" fullWidth size="icon_small">
            X
          </Button>
        )
      ).toThrow();
    });

    it('Throws an error when not passing children', () => {
      // @ts-expect-error
      expect(() => shallow(<Button variant="primary" />)).toThrow();
    });

    it('Throws an error when passing an invalid tabIndex', () => {
      // @ts-expect-error
      expect(() => shallow(<Button variant="primary" tabIndex="-2" />)).toThrow();
    });
  });

  describe('Button aria attributes', () => {
    it('Has an aria-expanded attribute', () => {
      const wrapper: ReactWrapper = mount(
        <Button variant="secondary" aria-expanded="true">
          button
        </Button>
      );
      expect(wrapper.exists('button[aria-expanded="true"]')).toEqual(true);
    });

    it('Has an aria-haspopup attribute', () => {
      const wrapper: ReactWrapper = mount(
        <Button variant="secondary" aria-haspopup="true" onClick={NOOP}>
          button
        </Button>
      );
      expect(wrapper.exists('button[aria-haspopup="true"]')).toEqual(true);
    });

    it('Has an aria-controls attribute', () => {
      const wrapper: ReactWrapper = mount(
        <Button variant="secondary" aria-controls="some-id">
          button
        </Button>
      );
      expect(wrapper.exists('button[aria-controls="some-id"]')).toEqual(true);
    });

    it('Has an aria-busy attribute when loading', () => {
      const wrapper: ReactWrapper = mount(
        <Button variant="secondary" loading>
          button
        </Button>
      );
      expect(wrapper.exists('button[aria-busy="true"]')).toEqual(true);
      expect(wrapper.find('button').props().disabled).toEqual(true);
    });

    it('Has disabled set on HTML when disabled', () => {
      const wrapper: ReactWrapper = mount(
        <Button variant="secondary" disabled>
          button
        </Button>
      );
      expect(wrapper.exists('button[aria-busy="true"]')).toEqual(false);
      expect(wrapper.find('button').props().disabled).toEqual(true);
    });
  });

  describe('Button data attributes', () => {
    it('Has an data-foo attribute', () => {
      const wrapper: ReactWrapper = mount(
        <Button variant="secondary" data-foo="test">
          button
        </Button>
      );
      expect(wrapper.exists('button[data-foo="test"]')).toEqual(true);
    });
  });

  describe('Button render as', () => {
    it('Renders a button as a link', () => {
      const wrapper: ReactWrapper = mount(
        <Button as="a" variant="secondary" href="/tests">
          button
        </Button>
      );
      expect(wrapper.exists('a')).toEqual(true);
    });
  });

  describe('Button margin styles', () => {
    it('Renders a button with margin: space0', () => {
      const {getByTestId} = testRender(
        <Button variant="primary" data-testid="button-margin">
          button
        </Button>
      );
      expect(getByTestId('button-margin')).toHaveStyleRule('margin', 'space0');
    });
  });

  describe('button event handlers', () => {
    it('Should call the appropriate event handlers', () => {
      const onClickMock: jest.Mock = jest.fn();
      const onMouseDownMock: jest.Mock = jest.fn();
      const onMouseUpMock: jest.Mock = jest.fn();
      const onMouseEnterMock: jest.Mock = jest.fn();
      const onMouseLeaveMock: jest.Mock = jest.fn();
      const onFocusMock: jest.Mock = jest.fn();
      const onBlurMock: jest.Mock = jest.fn();

      const wrapper: ReactWrapper = mount(
        <Button
          variant="secondary"
          onClick={onClickMock}
          onMouseDown={onMouseDownMock}
          onMouseUp={onMouseUpMock}
          onMouseEnter={onMouseEnterMock}
          onMouseLeave={onMouseLeaveMock}
          onFocus={onFocusMock}
          onBlur={onBlurMock}
        >
          button
        </Button>
      );

      wrapper.simulate('click');
      expect(onClickMock).toHaveBeenCalledTimes(1);
      wrapper.simulate('mousedown');
      expect(onMouseDownMock).toHaveBeenCalledTimes(1);
      wrapper.simulate('mouseup');
      expect(onMouseUpMock).toHaveBeenCalledTimes(1);
      wrapper.simulate('mouseenter');
      expect(onMouseEnterMock).toHaveBeenCalledTimes(1);
      wrapper.simulate('mouseleave');
      expect(onMouseLeaveMock).toHaveBeenCalledTimes(1);
      wrapper.simulate('focus');
      expect(onFocusMock).toHaveBeenCalledTimes(1);
      wrapper.simulate('blur');
      expect(onBlurMock).toHaveBeenCalledTimes(1);
    });
  });

  describe('button default styles', () => {
    it('should have the correct styles for the primary variant', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="primary" data-testid="primary-styles">
          Primary
        </Button>
      );

      const button = getByTestId('primary-styles');

      expect(button).not.toHaveStyleRule('text-align', 'left');
      expect(button).toHaveStyleRule('color', 'colorTextWeakest');
      expect(button).toHaveStyleRule('background-color', 'colorBackgroundPrimary');
      expect(button).toHaveStyleRule('box-shadow', 'shadowBorderPrimary');

      expect(getByText('Primary')).toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for the secondary variant', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="secondary" data-testid="secondary-styles">
          Secondary
        </Button>
      );

      const button = getByTestId('secondary-styles');

      expect(button).not.toHaveStyleRule('text-align', 'left');
      expect(button).toHaveStyleRule('color', 'colorText');
      expect(button).toHaveStyleRule('background-color', 'colorBackgroundBody');
      expect(button).toHaveStyleRule('box-shadow', 'shadowBorder');

      expect(getByText('Secondary')).toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for the destructive variant', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="destructive" data-testid="destructive-styles">
          Destructive
        </Button>
      );

      const button = getByTestId('destructive-styles');

      expect(button).not.toHaveStyleRule('text-align', 'left');
      expect(button).toHaveStyleRule('color', 'colorTextWeakest');
      expect(button).toHaveStyleRule('background-color', 'colorBackgroundDestructive');
      expect(button).toHaveStyleRule('box-shadow', 'shadowBorderDestructive');

      expect(getByText('Destructive')).toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for the destructive_secondary variant', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="destructive_secondary" data-testid="destructive_secondary-styles">
          Destructive secondary
        </Button>
      );

      const button = getByTestId('destructive_secondary-styles');
      expect(button).not.toHaveStyleRule('text-align', 'left');
      expect(button).toHaveStyleRule('color', 'colorTextLinkDestructive');
      expect(button).toHaveStyleRule('background-color', 'colorBackgroundBody');
      expect(button).toHaveStyleRule('box-shadow', 'shadowBorderDestructive');

      expect(getByText('Destructive secondary')).toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for the destructive_link variant', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="destructive_link" data-testid="destructive_link-styles">
          Destructive link
        </Button>
      );

      const button = getByTestId('destructive_link-styles');

      expect(button).toHaveStyleRule('color', 'colorTextLinkDestructive');
      expect(button).toHaveStyleRule('transition', 'none');
      expect(button).toHaveStyleRule('text-align', 'left');
      expect(getByText('Destructive link')).not.toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for the link variant', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="link" data-testid="link-styles">
          Link
        </Button>
      );

      const button = getByTestId('link-styles');

      expect(button).toHaveStyleRule('text-align', 'left');
      expect(button).toHaveStyleRule('color', 'colorTextLink');
      expect(button).toHaveStyleRule('transition', 'none');

      expect(getByText('Link')).not.toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for the reset variant', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="reset" data-testid="reset-styles">
          Reset
        </Button>
      );

      expect(getByTestId('reset-styles')).not.toHaveStyleRule('text-align', 'left');
      expect(getByText('Reset')).toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for a link button in loading state', () => {
      const {getByTestId, getByText, container} = testRender(
        <Button variant="link" loading data-testid="loading-link-styles">
          Loading link
        </Button>
      );

      const buttonComponent = getByTestId('loading-link-styles');
      const buttonContent = getByText('Loading link');
      const loadingIconWrapper = (container.firstChild as ChildNode).lastChild as ChildNode;

      expect(buttonComponent).toHaveStyleRule('text-align', 'left');
      expect(buttonContent).toHaveAttribute('aria-hidden', 'true');
      expect(buttonContent).toHaveAttribute('opacity', '0');

      expect(loadingIconWrapper).toHaveStyleRule('position', 'absolute');
      expect(loadingIconWrapper).toHaveStyleRule('top', '0');
      expect(loadingIconWrapper).toHaveStyleRule('right', '0');
      expect(loadingIconWrapper).toHaveStyleRule('bottom', '0');
      expect(loadingIconWrapper).toHaveStyleRule('left', '0');
      expect(loadingIconWrapper).toHaveStyleRule('display', 'flex');
      expect(loadingIconWrapper).toHaveStyleRule('align-items', 'center');
      expect(loadingIconWrapper).toHaveStyleRule('justify-content', 'center');
    });

    it('should have the correct styles for the link variant in disabled state', () => {
      const {getByTestId, getByText} = testRender(
        <Button variant="link" disabled data-testid="disabled-link-styles">
          Disabled link
        </Button>
      );

      const buttonComponent = getByTestId('disabled-link-styles');
      const buttonContent = getByText('Disabled link');

      expect(buttonComponent).toHaveStyleRule('color', 'colorTextLinkWeak');
      expect(buttonComponent).toHaveStyleRule('text-align', 'left');
      expect(buttonComponent).toHaveStyleRule('cursor', 'not-allowed');
      expect(buttonContent).toHaveAttribute('aria-hidden', 'false');
    });
  });
});
