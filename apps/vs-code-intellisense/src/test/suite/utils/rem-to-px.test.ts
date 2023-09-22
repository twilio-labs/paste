import assert from 'assert';

import { remToPx } from '../../../utils/rem-to-px';

suite('remToPx', () => {
  test("when 'rem' is not found in value, returns unmodified string", () => {
    const value = '0';

    const result = remToPx(value);

    assert.strictEqual(result, value);
  });

  test('converts 0.5rem to 8px', () => {
    const value = '0.5rem';

    const result = remToPx(value);

    assert.strictEqual(result, '0.5rem (8px)');
  });

  test('converts 1rem to 16px', () => {
    const value = '1rem';

    const result = remToPx(value);

    assert.strictEqual(result, '1rem (16px)');
  });

  test('gracefully handles extra whitespace on either side of rem value', () => {
    const value = '   1    rem';

    const result = remToPx(value);

    assert.strictEqual(result, '1rem (16px)');
  });
});
