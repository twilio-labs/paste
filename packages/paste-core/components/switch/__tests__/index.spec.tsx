import * as React from 'react';
import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {Default, Disabled, On, Required} from '../stories/index.stories';

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
    expect(container.querySelector('[data-paste-element="SWITCH_CONTAINER_LABEL"]')?.getAttribute('id')).toEqual(
      labelId
    );
  });
  it('should set aria-describedby to the help text id when past', () => {
    const {getByRole, container} = render(<Default />);
    const describedbyId = getByRole('switch').getAttribute('aria-describedby');
    expect(container.querySelector('[data-paste-element="SWITCH_CONTAINER_HELP_TEXT"]')?.getAttribute('id')).toEqual(
      describedbyId
    );
  });
});

describe('Switch customization', () => {
  it('should set an element data attribute on Switch', () => {
    const {getByRole, container} = render(<Required />);
    expect(getByRole('switch').dataset.pasteElement).toEqual('SWITCH');
    expect(getByRole('switch').firstChild?.firstChild).toHaveAttribute('data-paste-element', 'SWITCH_KNOB');
    expect(getByRole('switch').querySelector('[data-paste-element="SWITCH_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_CONTAINER_HELP_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="SWITCH_CONTAINER_LABEL"]')).toBeInTheDocument();
  });
  it('should set custom element data attributes on Switch', () => {
    const {getByRole, container} = render(<Required element="MY_SWITCH" />);
    expect(getByRole('switch').dataset.pasteElement).toEqual('MY_SWITCH');
    expect(getByRole('switch').firstChild?.firstChild).toHaveAttribute('data-paste-element', 'MY_SWITCH_KNOB');
    expect(getByRole('switch').querySelector('[data-paste-element="MY_SWITCH_ICON"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_SWITCH_HELP_TEXT"]')).toBeInTheDocument();
    expect(container.querySelector('[data-paste-element="MY_SWITCH_LABEL"]')).toBeInTheDocument();
  });
  it('should add custom styling to Switch', () => {
    const {getByRole, container} = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          SWITCH: {height: '30px', width: '52'},
          SWITCH_KNOB: {height: '26px', width: '26px'},
          SWITCH_CONTAINER_HELP_TEXT: {backgroundColor: 'colorBackgroundAvailable'},
          SWITCH_CONTAINER_LABEL: {backgroundColor: 'colorBackgroundBrandStrong'},
        }}
      >
        <Required />
      </CustomizationProvider>
    );
    const theSwitch = getByRole('switch');
    const switchKnob = getByRole('switch').firstChild?.firstChild;
    const switchLabel = container.querySelector('[data-paste-element="SWITCH_CONTAINER_LABEL"]');
    const switchHelpText = container.querySelector('[data-paste-element="SWITCH_CONTAINER_HELP_TEXT"]');
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
          MY_SWITCH_HELP_TEXT: {backgroundColor: 'colorBackgroundAvailable'},
          MY_SWITCH_LABEL: {backgroundColor: 'colorBackgroundBrandStrong'},
        }}
      >
        <Required element="MY_SWITCH" />
      </CustomizationProvider>
    );
    const toggle = getByRole('switch');
    const toggleKnob = getByRole('switch').firstChild?.firstChild;
    const toggleLabel = container.querySelector('[data-paste-element="MY_SWITCH_LABEL"]');
    const toggleHelpText = container.querySelector('[data-paste-element="MY_SWITCH_HELP_TEXT"]');
    expect(toggle).toHaveStyleRule('height', '30px');
    expect(toggleKnob).toHaveStyleRule('height', '26px');
    expect(toggleLabel).toHaveStyleRule('background-color', 'rgb(3, 11, 93)');
    expect(toggleHelpText).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
  });
});
