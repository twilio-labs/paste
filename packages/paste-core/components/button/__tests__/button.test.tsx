import * as React from 'react';
import renderer from 'react-test-renderer';
import {Theme} from '@twilio-paste/theme';
import {shallow, ReactWrapper, mount} from 'enzyme';
import {Button} from '../src';

const NOOP = (): void => {};
const HREF = 'https://twilio.paste.design';

describe('Button Variants', () => {
  it('Has a primary variant', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="primary" type="submit" onClick={NOOP}>
            Submit
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Has a secondary variant', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="secondary" type="button" onClick={NOOP}>
            Submit
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Has a destructive variant', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="destructive" onClick={NOOP}>
            Delete
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Has a destructive_link variant', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="destructive_link" onClick={NOOP}>
            Undo
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Has a link variant', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="link" onClick={NOOP}>
            Go to Paste
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Has a reset variant', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="reset" size="reset" onClick={NOOP}>
            Hello World!
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('Button States', () => {
  it('Has a loading state', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="primary" loading>
            Submit
          </Button>
          <Button variant="secondary" loading>
            Submit
          </Button>
          <Button variant="destructive" loading>
            Submit
          </Button>
          <Button variant="destructive_link" loading>
            Submit
          </Button>
          <Button variant="link" loading>
            Submit
          </Button>
          <Button variant="reset" size="reset" loading>
            Submit
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Has a disabled state', () => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Button variant="primary" disabled>
            Submit
          </Button>
          <Button variant="secondary" disabled>
            Submit
          </Button>
          <Button variant="destructive" disabled>
            Submit
          </Button>
          <Button variant="destructive_link" disabled>
            Submit
          </Button>
          <Button variant="link" disabled>
            Submit
          </Button>
          <Button variant="reset" size="reset" disabled>
            Submit
          </Button>
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
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
    ).toThrowError();
  });

  it('Throws an error when an "a" tag is passed but a href is not', () => {
    expect(() =>
      shallow(
        <Button as="a" variant="primary">
          Go to Paste
        </Button>
      )
    ).toThrowError();
  });

  it('Throws an error when the user should use an Anchor component instead', () => {
    expect(() =>
      shallow(
        <Button as="a" variant="link" href={HREF}>
          Go to Paste
        </Button>
      )
    ).toThrowError();
  });

  it('Throws an error when size=reset is not applied to variant=reset', () => {
    expect(() =>
      shallow(
        <Button variant="reset" size="small">
          Submit
        </Button>
      )
    ).toThrowError();
  });

  it('Throws an error when using fullWidth with an icon sizing', () => {
    expect(() =>
      shallow(
        <Button variant="primary" fullWidth size="icon">
          X
        </Button>
      )
    ).toThrowError();
  });

  it('Throws an error when not passing children', () => {
    expect(() => shallow(<Button variant="primary" />)).toThrowError();
  });

  it('Throws an error when passing an invalid tabIndex', () => {
    expect(() => shallow(<Button variant="primary" tabIndex="-2" />)).toThrowError();
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
