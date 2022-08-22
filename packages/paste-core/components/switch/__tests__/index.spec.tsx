import * as React from 'react';
import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Default, Disabled, On} from '../stories/index.stories';

describe('Switch', () => {
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
  it('should add aria-checked when switch is "on"', () => {
    const {getByRole} = render(<On />);
    expect(getByRole('switch').getAttribute('aria-checked')).toBe('true');
  });
  it('should set aria-labelledby to the label id', () => {
    const {getByRole, container} = render(<Default />);
    const labelId = getByRole('switch').getAttribute('aria-labelledby');
    expect(container.querySelector('[data-paste-element="SWITCH_LABEL_TEXT_WRAPPER"]')?.getAttribute('id')).toEqual(
      labelId
    );
  });
});

describe('Switch customization', () => {
  it('should set an element data attribute on Switch', () => {
    const {getByRole, container} = render(<On />);
    expect(getByRole('switch').dataset.pasteElement).toEqual('SWITCH');
    expect(getByRole('switch').firstChild?.firstChild).toHaveAttribute('data-paste-element', 'SWITCH_KNOB');
    expect(getByRole('switch').querySelector('[data-paste-element="SWITCH_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_LABEL_TEXT_WRAPPER"]')).toBeInTheDocument();
  });
  it('should set custom element data attributes on Switch', () => {
    const {getByRole, container} = render(<On element="MY_SWITCH" />);
    expect(getByRole('switch').dataset.pasteElement).toEqual('MY_SWITCH');
    expect(getByRole('switch').firstChild?.firstChild).toHaveAttribute('data-paste-element', 'MY_SWITCH_KNOB');
    expect(getByRole('switch').querySelector('[data-paste-element="MY_SWITCH_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_SWITCH_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_SWITCH_LABEL_TEXT_WRAPPER"]')).toBeInTheDocument();
  });
  it('should add custom styling to Switch', () => {
    const {getByRole, container} = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          SWITCH: {height: '30px', width: '52'},
          SWITCH_KNOB: {height: '26px', width: '26px'},
          SWITCH_HELP_TEXT_WRAPPER: {backgroundColor: 'colorBackgroundAvailable'},
          SWITCH_LABEL_TEXT_WRAPPER: {backgroundColor: 'colorBackgroundBrandStrong'},
        }}
      >
        <On />
      </CustomizationProvider>
    );
    const theSwitch = getByRole('switch');
    const switchKnob = getByRole('switch').firstChild?.firstChild;
    const switchLabel = container.querySelector('[data-paste-element="SWITCH_LABEL_TEXT_WRAPPER"]');
    const switchHelpText = container.querySelector('[data-paste-element="SWITCH_HELP_TEXT_WRAPPER"]');
    expect(theSwitch).toHaveStyleRule('height', '30px');
    expect(switchKnob).toHaveStyleRule('height', '26px');
    expect(switchLabel).toHaveStyleRule('background-color', 'rgb(3, 11, 93)');
    expect(switchHelpText).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
  });
  it('should add custom styling to a custom named Switch', () => {
    const {getByRole, container} = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          MY_SWITCH: {height: '30px', width: '52'},
          MY_SWITCH_KNOB: {height: '26px', width: '26px'},
          MY_SWITCH_HELP_TEXT_WRAPPER: {backgroundColor: 'colorBackgroundAvailable'},
          MY_SWITCH_LABEL_TEXT_WRAPPER: {backgroundColor: 'colorBackgroundBrandStrong'},
        }}
      >
        <On element="MY_SWITCH" />
      </CustomizationProvider>
    );
    const toggle = getByRole('switch');
    const toggleKnob = getByRole('switch').firstChild?.firstChild;
    const toggleLabel = container.querySelector('[data-paste-element="MY_SWITCH_LABEL_TEXT_WRAPPER"]');
    const toggleHelpText = container.querySelector('[data-paste-element="MY_SWITCH_HELP_TEXT_WRAPPER"]');
    expect(toggle).toHaveStyleRule('height', '30px');
    expect(toggleKnob).toHaveStyleRule('height', '26px');
    expect(toggleLabel).toHaveStyleRule('background-color', 'rgb(3, 11, 93)');
    expect(toggleHelpText).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
  });
});
