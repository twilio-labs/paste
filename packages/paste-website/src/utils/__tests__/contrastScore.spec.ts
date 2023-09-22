/* eslint-env jest */

import { contrastScore } from '../contrastScore';

describe('contrastScore', (): void => {
  it('should return a failing score on a failing color combo', (): void => {
    expect(contrastScore('#fff', '#eee')).toEqual('Fail');
  });

  it('should return a AA conditional score on a "AA conditional" color combo', (): void => {
    expect(contrastScore('#fff', '#919191')).toEqual('AA Conditional');
  });

  it('should return a AA score on a AA color combo', (): void => {
    expect(contrastScore('#fff', '#6B6B6B')).toEqual('AA');
  });

  it('should return a AAA score on a AAA color combo', (): void => {
    expect(contrastScore('#fff', '#000')).toEqual('AAA');
  });
});
