import * as React from 'react';
import {render} from 'react-dom';
import {Theme} from '@twilio-paste/theme';
import {shallow, ReactWrapper, mount} from 'enzyme';
import axe from '../../../../../.jest/axe-helper';
import {Button} from '../src';

const NOOP = (): void => {};
const HREF = 'https://twilio.paste.design';

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
    expect(() => shallow(<Button variant="primary" />)).toThrow();
  });

  it('Throws an error when passing an invalid tabIndex', () => {
    // @ts-ignore we're testing the failure for JS
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
