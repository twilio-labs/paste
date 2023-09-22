/*
 * Copied from Reakit and modified to work in Paste
 * https://github.com/reakit/reakit/blob/a211d94da9f3b683182568a56479b91afb1b85ae/packages/reakit-utils/src/__tests__/hasFocus-test.tsx
 */
import * as React from 'react';
import { render, screen } from '@testing-library/react';

import { hasFocus } from '../src/utils/reakit/reakit-hasFocus';

const TestComponent = (): JSX.Element => {
  return (
    <>
      <div aria-label="item1">
        <button type="button" aria-label="item1-1" />
      </div>
      <button type="button" aria-label="item2" />
      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex */}
      <div aria-label="item3" tabIndex={0} aria-activedescendant="item3-1">
        <div aria-label="item3-1" id="item3-1" />
      </div>
    </>
  );
};

test('hasFocus', () => {
  render(<TestComponent />);
  const item1 = screen.getByLabelText('item1');
  expect(hasFocus(item1)).toBe(false);

  item1.focus();
  expect(hasFocus(screen.getByLabelText('item1'))).toBe(false);
  expect(hasFocus(screen.getByLabelText('item1-1'))).toBe(false);

  const item11 = screen.getByLabelText('item1-1');
  item11.focus();
  expect(hasFocus(screen.getByLabelText('item1-1'))).toBe(true);

  const item2 = screen.getByLabelText('item2');
  item2.focus();
  expect(hasFocus(screen.getByLabelText('item2'))).toBe(true);
  expect(hasFocus(screen.getByLabelText('item3-1'))).toBe(false);

  const item3 = screen.getByLabelText('item3');
  item3.focus();
  expect(hasFocus(screen.getByLabelText('item3'))).toBe(true);
  expect(hasFocus(screen.getByLabelText('item3-1'))).toBe(true);
});
