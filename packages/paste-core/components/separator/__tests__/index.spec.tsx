import * as React from 'react';
import {render} from 'react-dom';
import renderer from 'react-test-renderer';
import {render as testRender} from '@testing-library/react';
import {Theme} from '@twilio-paste/theme';
import axe from '../../../../../.jest/axe-helper';
import {Separator} from '../src';

describe('Separator', () => {
  it('should render', () => {
    const {getByRole} = testRender(<Separator orientation="horizontal" />);
    expect(getByRole('separator')).not.toBeNull();
  });
  it('should render set horizontal orientation', () => {
    const {getByRole} = testRender(<Separator orientation="horizontal" />);
    expect(getByRole('separator').getAttribute('aria-orientation')).toBe('horizontal');
  });
  it('should render set vertical orientation', () => {
    const {getByRole} = testRender(<Separator orientation="vertical" />);
    expect(getByRole('separator').getAttribute('aria-orientation')).toBe('vertical');
  });
  it('should set horizontal margins', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Separator orientation="horizontal" horizontalSpacing="space50" />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should set vertical margins', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Separator orientation="vertical" verticalSpacing="space100" />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should set responsive horizontal margins', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Separator orientation="horizontal" horizontalSpacing={['space20', 'space100', 'space190']} />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should set responsive vertical margins', (): void => {
    const tree = renderer
      .create(
        <Theme.Provider>
          <Separator orientation="vertical" verticalSpacing={['space20', 'space100', 'space190']} />
        </Theme.Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should have no accessibility violations', async () => {
    const container = document.createElement('div');
    document.body.append(container);
    render(
      <>
        <Separator orientation="horizontal" />
        <Separator orientation="vertical" />
      </>,
      container
    );
    const results = await axe(document.body);
    expect(results).toHaveNoViolations();
  });
});
