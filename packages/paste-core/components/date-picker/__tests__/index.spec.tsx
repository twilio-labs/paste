import * as React from 'react';
import {render} from '@testing-library/react';
// @ts-ignore typescript doesn't like js imports
import axe from '../../../../../.jest/axe-helper';
import {DatePicker} from '../src';

describe('DatePicker', () => {
  it('should render', () => {
    const {getByText} = render(<DatePicker>test</DatePicker>);
    expect(getByText('test')).toBeDefined();
  });

  // to test: date formatting, onChange,

  describe('Accessibility', () => {
    it('Should have no accessibility violations', async () => {
      const {container} = render(<DatePicker>test</DatePicker>);
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    });
  });
});
