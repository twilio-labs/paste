import {cardProps} from './index';
import {errorOnBadProps} from './utilities';

describe('errorOnBadProps', () => {
  it('it should error when incorrect props are passed in', (): void => {
    expect(() => {
      errorOnBadProps({stuff: 1}, cardProps);
    }).toThrow;
  });
  it('it should allow aria props', () => {
    expect(errorOnBadProps({'aria-nagrande': 1, 'aria-coolstuff': 1}, cardProps)).toEqual(undefined);
  });
  it('it should allow spacing props', () => {
    expect(errorOnBadProps({'aria-nagrande': 1, 'aria-paddingTop': 1}, cardProps)).toEqual(undefined);
  });
});
