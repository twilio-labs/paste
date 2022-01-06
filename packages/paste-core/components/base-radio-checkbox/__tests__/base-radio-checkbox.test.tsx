import * as React from 'react';

import {render} from '@testing-library/react';
import {CustomizationProvider} from '@twilio-paste/customization';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import {
  BaseRadioCheckboxControl,
  BaseRadioCheckboxLabel,
  BaseRadioCheckboxLabelText,
  BaseRadioCheckboxHelpText,
} from '../src/BaseRadioCheckbox';

describe('Base radio checkbox HTML attributes', () => {
  it('should set element data attribute on base radio checkbox components', () => {
    const screen = render(
      <>
        <BaseRadioCheckboxLabel htmlFor="checkbox" data-testid="label">
          <BaseRadioCheckboxControl data-testid="control">
            <CheckboxCheckIcon decorative={false} title="checked" />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText data-testid="label_text">Label</BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        <BaseRadioCheckboxHelpText helpTextId="help_text">Help Text</BaseRadioCheckboxHelpText>
      </>
    );
    expect(screen.getByTestId('label').getAttribute('data-paste-element')).toEqual('LABEL');
    expect(screen.getByTestId('control').getAttribute('data-paste-element')).toEqual('BASE_RADIO_CHECKBOX_CONTROL');
    expect(screen.getByTestId('label_text').getAttribute('data-paste-element')).toEqual(
      'BASE_RADIO_CHECKBOX_LABEL_TEXT'
    );
    expect(
      screen.container.querySelector('[data-paste-element="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"]')
    ).toBeInTheDocument();
    expect(
      // @ts-ignore object isn't null
      screen.container.querySelector('[data-paste-element="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"]').firstElementChild
    ).toHaveAttribute('data-paste-element', 'HELP_TEXT');
  });

  it('should set element data attribute on base radio checkbox components with custom element prop', () => {
    const screen = render(
      <>
        <BaseRadioCheckboxLabel htmlFor="checkbox" data-testid="label" element="fee">
          <BaseRadioCheckboxControl data-testid="control" element="fi">
            <CheckboxCheckIcon decorative={false} title="checked" />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText data-testid="label_text" element="fo">
            Label
          </BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        <BaseRadioCheckboxHelpText helpTextId="help_text" element="fum">
          Help Text
        </BaseRadioCheckboxHelpText>
      </>
    );
    expect(screen.getByTestId('label').getAttribute('data-paste-element')).toEqual('fee');
    expect(screen.getByTestId('control').getAttribute('data-paste-element')).toEqual('fi');
    expect(screen.getByTestId('label_text').getAttribute('data-paste-element')).toEqual('fo');
    expect(screen.container.querySelector('[data-paste-element="fum"]')).toBeInTheDocument();
    // @ts-ignore object isn't null
    expect(screen.container.querySelector('[data-paste-element="fum"]').firstElementChild).toHaveAttribute(
      'data-paste-element',
      'HELP_TEXT'
    );
  });
});

describe('Base radio checkbox customization', () => {
  it('should add custom styles to base radio checkbox', () => {
    const screen = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          BASE_RADIO_CHECKBOX_CONTROL: {backgroundColor: 'colorBackgroundError'},
          BASE_RADIO_CHECKBOX_LABEL_TEXT: {color: 'colorTextSuccess'},
          BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER: {marginLeft: 'space90'},
        }}
      >
        <BaseRadioCheckboxLabel htmlFor="checkbox" data-testid="label">
          <BaseRadioCheckboxControl data-testid="control">
            <CheckboxCheckIcon decorative={false} title="checked" />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText data-testid="label_text">Label</BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        <BaseRadioCheckboxHelpText helpTextId="help_text">Help Text</BaseRadioCheckboxHelpText>
      </CustomizationProvider>
    );
    expect(screen.getByTestId('control')).toHaveStyleRule('background-color', 'rgb(214,31,31)');
    expect(screen.getByTestId('label_text')).toHaveStyleRule('color', 'rgb(14,124,58)');
    expect(
      screen.container.querySelector('[data-paste-element="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"]')
    ).toHaveStyleRule('margin-left', '2rem');
  });

  it('should add custom styles to base radio checkbox with custom element prop', () => {
    const screen = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          fi: {backgroundColor: 'colorBackgroundError'},
          fo: {color: 'colorTextSuccess'},
          fum: {marginLeft: 'space90'},
        }}
      >
        <BaseRadioCheckboxLabel htmlFor="checkbox" data-testid="label">
          <BaseRadioCheckboxControl data-testid="control" element="fi">
            <CheckboxCheckIcon decorative={false} title="checked" />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText data-testid="label_text" element="fo">
            Label
          </BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        <BaseRadioCheckboxHelpText helpTextId="help_text" element="fum">
          Help Text
        </BaseRadioCheckboxHelpText>
      </CustomizationProvider>
    );
    expect(screen.getByTestId('control')).toHaveStyleRule('background-color', 'rgb(214,31,31)');
    expect(screen.getByTestId('label_text')).toHaveStyleRule('color', 'rgb(14,124,58)');
    expect(screen.container.querySelector('[data-paste-element="fum"]')).toHaveStyleRule('margin-left', '2rem');
  });
});
