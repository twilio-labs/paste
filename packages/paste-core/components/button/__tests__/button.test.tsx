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

describe('Button attributes', () => {
  it('should render aria-expanded attribute', () => {
    const wrapper: ReactWrapper = mount(
      <Button variant="secondary" aria-expanded="true">
        button
      </Button>
    );
    expect(wrapper.exists('[aria-expanded="true"]')).toEqual(true);
  });

  it('should render aria-controls attribute', () => {
    const wrapper: ReactWrapper = mount(
      <Button variant="secondary" aria-controls="some-id">
        button
      </Button>
    );
    expect(wrapper.exists('[aria-controls="some-id"]')).toEqual(true);
  });
});

describe('button event handlers', () => {
  it('should call the onClick handler', () => {
    const onClickMock: jest.Mock = jest.fn();
    const wrapper: ReactWrapper = mount(
      <Button variant="secondary" onClick={onClickMock}>
        button
      </Button>
    );
    wrapper.simulate('click');
    expect(onClickMock).toHaveBeenCalled();
  });
});
