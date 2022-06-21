import {isDeprecatedTheme} from '../src/utils/isDeprecatedTheme';

describe('isDeprecatedTheme', () => {
  it('throws an error if a theme has a deprecation message', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    isDeprecatedTheme('console');

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0]).toBe(
      'Paste: console is a deprecated theme. It was removed in the 2022.02.04 release of Paste.'
    );

    spy.mockRestore();
  });

  it('does not throw an error if an theme does not have a deprecation message', () => {
    const spy = jest.spyOn(console, 'error').mockImplementation(() => {});

    isDeprecatedTheme('foo');

    expect(console.error).toHaveBeenCalledTimes(0);

    spy.mockRestore();
  });
});
