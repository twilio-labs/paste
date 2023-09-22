import { safelySpreadTextProps } from '../src/SafelySpreadProps';

const badProps = {
  foo: 'bar',
  color: 'textColorSuccess',
};

const goodProps = {
  baz: 'foo',
  'aria-label': 'test',
};

describe('safelySpreadTextProps', () => {
  it('should not filter out good props', () => {
    expect(safelySpreadTextProps(goodProps)).toEqual({
      baz: 'foo',
      'aria-label': 'test',
    });
  });

  it('should filter out bad props', () => {
    expect(safelySpreadTextProps(badProps)).toEqual({
      foo: 'bar',
    });
  });
});
