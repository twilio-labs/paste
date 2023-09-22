import { DefaultTheme, SendGridTheme } from '../src';

describe('Default theme', () => {
  it('should match the snapshot', () => {
    expect(Object.keys(DefaultTheme).sort((a, b) => a.localeCompare(b))).toMatchSnapshot();
  });
});
describe('Sendgrid theme', () => {
  it('should match the snapshot', () => {
    expect(Object.keys(SendGridTheme).sort((a, b) => a.localeCompare(b))).toMatchSnapshot();
  });
});
