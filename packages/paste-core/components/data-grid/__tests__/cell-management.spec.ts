import {
  delayedSetFocusable,
  getClosestCellFrom,
  isCell,
  updateTabIndexForActionable,
} from '../src/utils/cell-management';

describe('cell-management utils', () => {
  it('update tabIndex for actionable correctly', () => {
    const td = document.createElement('td');
    const input = document.createElement('input');
    const select = document.createElement('select');
    td.append(input);
    td.append(select);

    // Set navigational tabindex
    td.tabIndex = 0;
    input.tabIndex = -1;
    select.tabIndex = -1;

    updateTabIndexForActionable(td, true);
    expect(td.tabIndex).toBe(0); // Composite handles changing this tabindex, not our code
    expect(input.tabIndex).toBe(0);
    expect(select.tabIndex).toBe(0);

    updateTabIndexForActionable(td, false);
    expect(td.tabIndex).toBe(0); // Composite handles changing this tabindex, not our code
    expect(input.tabIndex).toBe(-1);
    expect(select.tabIndex).toBe(-1);
  });

  it('delayedSetFocus fires after a delay', () => {
    const input = document.createElement('input');
    input.tabIndex = -1;
    expect(input.tabIndex).toBe(-1);

    jest.useFakeTimers();
    delayedSetFocusable(input);
    // Fast-forward until all timers have been executed
    jest.runAllTimers();
    // restore jest to using real timers
    jest.useRealTimers();

    expect(input.tabIndex).toBe(0);
  });

  it('isCell correctly detects DataGrid cells', () => {
    const td = document.createElement('td');
    const th = document.createElement('th');
    const div = document.createElement('div');
    const input = document.createElement('input');

    expect(isCell(td)).toBe(true);
    expect(isCell(th)).toBe(true);
    expect(isCell(div)).toBe(false);
    expect(isCell(input)).toBe(false);
  });

  it('getClosestCellFrom fetches the closest parent DataGrid cell from an element correctly', () => {
    const gridId = 'data-grid';
    const grid = document.createElement('div');
    grid.id = gridId;
    const td = document.createElement('td');
    const input = document.createElement('input');
    const select = document.createElement('select');
    const randomInput = document.createElement('input');

    td.append(input);
    td.append(select);
    grid.append(td);

    expect(getClosestCellFrom(td, gridId)).toBe(td);
    expect(getClosestCellFrom(input, gridId)).toBe(td);
    expect(getClosestCellFrom(select, gridId)).toBe(td);
    expect(getClosestCellFrom(randomInput, gridId)).toBe(null);
    // @ts-expect-error for the test
    expect(getClosestCellFrom(null, gridId)).toBe(null);
    // @ts-expect-error for the test
    expect(getClosestCellFrom(input, null)).toBe(null);
  });
});
