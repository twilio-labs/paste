import {ConsoleTheme, DefaultTheme, SendGridTheme} from '../src';

describe('Default theme', () => {
  it('should match the snapshot', () => {
    expect(Object.keys(DefaultTheme).sort()).toMatchSnapshot();
  });
});
describe('Console theme', () => {
  it('should match the snapshot', () => {
    expect(Object.keys(ConsoleTheme).sort()).toMatchSnapshot();
  });
});
describe('Sendgrid theme', () => {
  it('should match the snapshot', () => {
    expect(Object.keys(SendGridTheme).sort()).toMatchSnapshot();
  });
});
