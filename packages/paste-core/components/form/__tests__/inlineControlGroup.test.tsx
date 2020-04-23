import * as React from 'react';
import {render as testRender} from '@testing-library/react';
import {InlineControlGroup} from '../src/shared/InlineControlGroup';

const defaultGroupProps = {
  legend: 'This is a group legend',
  name: 'bar',
  value: 'bar',
};

describe('InlineControlGroup', () => {
  it('should render', () => {
    const {container} = testRender(
      <InlineControlGroup {...defaultGroupProps}>
        <div />
      </InlineControlGroup>
    );
    expect(container.querySelector('fieldset')).not.toBeNull();
  });

  it('should render a legend', () => {
    const {getByText} = testRender(
      <InlineControlGroup {...defaultGroupProps}>
        <div />
      </InlineControlGroup>
    );
    expect(getByText('This is a group legend')).not.toBeNull();
  });

  it('should have a required a required dot in the legend', () => {
    const {getByText} = testRender(
      <InlineControlGroup {...defaultGroupProps} required>
        <div />
      </InlineControlGroup>
    );
    expect(getByText('Required:')).not.toBeNull();
  });

  it('renders a helpText message when helpText prop is present', () => {
    const helpText = 'I am a helpText message';
    const {getByText} = testRender(
      <InlineControlGroup {...defaultGroupProps} helpText={helpText}>
        <div />
      </InlineControlGroup>
    );
    expect(getByText(helpText)).toBeDefined();
  });

  it('renders an errorText message when errorText prop is present', () => {
    const errorText = 'I am an errorText message';
    const {getByText} = testRender(
      <InlineControlGroup {...defaultGroupProps} errorText={errorText}>
        <div />
      </InlineControlGroup>
    );
    expect(getByText(errorText)).toBeDefined();
  });
});
