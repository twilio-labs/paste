import { render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import { CheckboxCheckIcon } from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import * as React from 'react';

import {
  BaseRadioCheckboxControl,
  BaseRadioCheckboxHelpText,
  BaseRadioCheckboxLabel,
  BaseRadioCheckboxLabelText,
} from '../src/BaseRadioCheckbox';

describe('Base radio checkbox HTML attributes', () => {
  it('should set element data attribute on base radio checkbox components', () => {
    const { container } = render(
      <>
        <BaseRadioCheckboxLabel htmlFor="checkbox" data-testid="label">
          <BaseRadioCheckboxControl data-testid="control">
            <CheckboxCheckIcon decorative={false} title="checked" />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText data-testid="label_text">Label</BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        <BaseRadioCheckboxHelpText helpTextId="help_text">Help Text</BaseRadioCheckboxHelpText>
      </>,
    );
    expect(screen.getByTestId('label').getAttribute('data-paste-element')).toEqual('LABEL');
    expect(screen.getByTestId('control').getAttribute('data-paste-element')).toEqual('BASE_RADIO_CHECKBOX_CONTROL');
    expect(screen.getByTestId('label_text').getAttribute('data-paste-element')).toEqual(
      'BASE_RADIO_CHECKBOX_LABEL_TEXT',
    );
    expect(container.querySelector('[data-paste-element="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"]')).toBeInTheDocument();
    expect(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore object isn't null
      container.querySelector('[data-paste-element="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"]').firstElementChild,
    ).toHaveAttribute('data-paste-element', 'HELP_TEXT');
  });

  it('should set element data attribute on base radio checkbox components with custom element prop', () => {
    const { container } = render(
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
      </>,
    );
    expect(screen.getByTestId('label').getAttribute('data-paste-element')).toEqual('fee');
    expect(screen.getByTestId('control').getAttribute('data-paste-element')).toEqual('fi');
    expect(screen.getByTestId('label_text').getAttribute('data-paste-element')).toEqual('fo');
    expect(container.querySelector('[data-paste-element="fum"]')).toBeInTheDocument();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore object isn't null
    expect(container.querySelector('[data-paste-element="fum"]').firstElementChild).toHaveAttribute(
      'data-paste-element',
      'HELP_TEXT',
    );
  });
});

describe('Base radio checkbox customization', () => {
  it('should add custom styles to base radio checkbox', () => {
    const { container } = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          BASE_RADIO_CHECKBOX_CONTROL: { backgroundColor: 'colorBackgroundError' },
          BASE_RADIO_CHECKBOX_LABEL_TEXT: { color: 'colorTextSuccess' },
          BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER: { marginLeft: 'space90' },
        }}
      >
        <BaseRadioCheckboxLabel htmlFor="checkbox" data-testid="label">
          <BaseRadioCheckboxControl data-testid="control">
            <CheckboxCheckIcon decorative={false} title="checked" />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText data-testid="label_text">Label</BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        <BaseRadioCheckboxHelpText helpTextId="help_text">Help Text</BaseRadioCheckboxHelpText>
      </CustomizationProvider>,
    );

    /*
     * matcher selects the last style rule in the stylesheet, not the last style rule that is currently applied
     * using regex we can instruct the matcher specifically to look at the parent rule, not the rules for sibling input state, label state, etc.
     */
    expect(screen.getByTestId('control')).toHaveStyleRule('background-color', 'rgb(214, 31, 31)', {
      target: new RegExp(`^.${screen.getByTestId('control').getAttribute('class')}$`),
    });
    expect(screen.getByTestId('label_text')).toHaveStyleRule('color', 'rgb(14, 124, 58)');
    expect(container.querySelector('[data-paste-element="BASE_RADIO_CHECKBOX_HELP_TEXT_WRAPPER"]')).toHaveStyleRule(
      'margin-left',
      '2rem',
    );
  });

  it('should add custom styles to base radio checkbox with custom element prop', () => {
    const { container } = render(
      <CustomizationProvider
        theme={TestTheme}
        elements={{
          fi: { backgroundColor: 'colorBackgroundError' },
          fo: { color: 'colorTextSuccess' },
          fum: { marginLeft: 'space90' },
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
      </CustomizationProvider>,
    );
    /*
     * matcher selects the last style rule in the stylesheet, not the last style rule that is currently applied
     * using regex we can instruct the matcher specifically to look at the parent rule, not the rules for sibling input state, label state, etc.
     */
    expect(screen.getByTestId('control')).toHaveStyleRule('background-color', 'rgb(214, 31, 31)', {
      target: new RegExp(`^.${screen.getByTestId('control').getAttribute('class')}$`),
    });
    expect(screen.getByTestId('label_text')).toHaveStyleRule('color', 'rgb(14, 124, 58)');
    expect(container.querySelector('[data-paste-element="fum"]')).toHaveStyleRule('margin-left', '2rem');
  });
});
