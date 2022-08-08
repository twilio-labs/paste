import * as React from 'react';
import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Default, Disabled, On} from '../stories/index.stories';

describe('Toggle', () => {
  it('should render as role="switch"', () => {
    const {getByRole} = render(<Default />);
    expect(getByRole('switch')).not.toBeNull();
  });
  it('should render as disabled', () => {
    const {getByRole} = render(<Disabled />);
    expect(getByRole('switch').getAttribute('aria-disabled')).toBe('true');
  });
  it('should default to aria-checked="false"', () => {
    const {getByRole} = render(<Default />);
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('false');
  });
  it('should add aria-checked when toggle is "on"', () => {
    const {getByRole} = render(<On />);
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('true');
  });
});

describe('Toggle customization', () => {
  it('should set an element data attribute on Toggle', () => {
    const {getByRole} = render(<On />);
    expect(getByRole('switch').dataset.pasteElement).toEqual('TOGGLE');
    expect(getByRole('switch').firstChild).toHaveAttribute('data-paste-element', 'TOGGLE_KNOB');
    expect(getByRole('switch').querySelector('[data-paste-element="TOGGLE_ICON"]')).toBeInTheDocument();
  });
  it('should set custom element data attributes on Toggle', () => {
    const {getByRole} = render(<On element="MY_TOGGLE" />);
    expect(getByRole('switch').dataset.pasteElement).toEqual('MY_TOGGLE');
    expect(getByRole('switch').firstChild).toHaveAttribute('data-paste-element', 'MY_TOGGLE_KNOB');
    expect(getByRole('switch').querySelector('[data-paste-element="MY_TOGGLE_ICON"]')).toBeInTheDocument();
  });
  it('should add custom styling to Toggle', () => {
    const {getByRole} = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          TOGGLE: {height: '30px', width: '52'},
          TOGGLE_KNOB: {height: '26px', width: '26px'},
          TOGGLE_ICON: {color: 'colorIcon'},
        }}
      >
        <On />
      </CustomizationProvider>
    );
    const toggle = getByRole('switch');
    const toggleKnob = getByRole('switch').firstChild;
    const toggleIcon = getByRole('switch').querySelector('[data-paste-element="TOGGLE_ICON"]');
    expect(toggle).toHaveStyleRule('height', '30px');
    expect(toggleKnob).toHaveStyleRule('height', '26px');
    expect(toggleIcon).toHaveStyleRule('color', 'colorIcon');
  });
  it('should add custom styling to a custom named Toggle', () => {
    const {getByRole} = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          MY_TOGGLE: {height: '30px', width: '52'},
          MY_TOGGLE_KNOB: {height: '26px', width: '26px'},
          MY_TOGGLE_ICON: {color: 'colorIcon'},
        }}
      >
        <On element="MY_TOGGLE" />
      </CustomizationProvider>
    );
    const toggle = getByRole('switch');
    const toggleKnob = getByRole('switch').firstChild;
    const toggleIcon = getByRole('switch').querySelector('[data-paste-element="MY_TOGGLE_ICON"]');
    expect(toggle).toHaveStyleRule('height', '30px');
    expect(toggleKnob).toHaveStyleRule('height', '26px');
    expect(toggleIcon).toHaveStyleRule('color', 'colorIcon');
  });
});
