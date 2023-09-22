import { fireEvent, render, screen } from '@testing-library/react';
import { CustomizationProvider } from '@twilio-paste/customization';
import * as React from 'react';

import { RadioButton, RadioButtonGroup } from '../src';
import type { RadioButtonProps } from '../src';
import { Attached } from '../stories/index.stories';

describe('RadioButton', () => {
  const renderRadioButton = (props: Partial<RadioButtonProps> = {}): ReturnType<typeof render> =>
    // eslint-disable-next-line react/no-children-prop
    render(<RadioButton value="foo" name="foo" children="foo" {...props} />);

  it('assigns attributes as expected', () => {
    renderRadioButton();
    const radio = screen.getByRole('radio', { name: 'foo' });

    expect(radio).toHaveAttribute('id');
    expect(radio).toHaveAttribute('name', 'foo');
    expect(radio).toHaveAttribute('value', 'foo');
  });

  it('renders children visibly into document as an input label', () => {
    renderRadioButton();
    const { labels } = screen.getByRole<HTMLInputElement>('radio', { name: 'foo' });

    expect(labels).toHaveLength(1);
    expect(labels?.[0]).toHaveTextContent('foo');
  });

  it('should assign an id when provided', () => {
    renderRadioButton({ id: 'foo' });
    const radio = screen.getByRole('radio', { name: 'foo' });

    expect(radio).toHaveAttribute('id', 'foo');
  });

  it('renders as invalid', () => {
    renderRadioButton({ hasError: true });
    const radio = screen.getByRole('radio', { name: 'foo' });

    expect(radio).toHaveAttribute('aria-invalid', 'true');
  });

  it('renders as checked (controlled)', () => {
    renderRadioButton({ checked: true, onChange: () => {} });
    const radio = screen.getByRole('radio', { name: 'foo' });

    expect(radio).toBeChecked();
  });

  it('renders as checked (uncontrolled)', () => {
    renderRadioButton({ defaultChecked: true });
    const radio = screen.getByRole('radio', { name: 'foo' });

    expect(radio).toBeChecked();
  });

  it('renders as disabled', () => {
    renderRadioButton({ disabled: true });
    const radio = screen.getByRole('radio', { name: 'foo' });

    expect(radio).toBeDisabled();
  });

  describe('customization', () => {
    it('renders an element data attribute', () => {
      const { container } = renderRadioButton();
      const styledRadioLabel = container.querySelector('label');

      expect(styledRadioLabel).toHaveAttribute('data-paste-element', 'RADIO_BUTTON');
    });

    it('renders a custom element data attribute', () => {
      const { container } = renderRadioButton({ element: 'MY_RADIO_BUTTON' });
      const styledRadioLabel = container.querySelector('label');

      expect(styledRadioLabel).toHaveAttribute('data-paste-element', 'MY_RADIO_BUTTON');
    });

    it('renders custom styling', () => {
      const { container } = render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            RADIO_BUTTON: { backgroundColor: 'colorBackgroundAvailable' },
          }}
        >
          <RadioButton value="foo" name="foo">
            foo
          </RadioButton>
        </CustomizationProvider>,
      );
      const styledRadioLabel = container.querySelector('label');

      expect(styledRadioLabel).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });

    it('renders custom styling to a custom element', () => {
      const { container } = render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            MY_RADIO_BUTTON: { backgroundColor: 'colorBackgroundAvailable' },
          }}
        >
          <RadioButton value="foo" name="foo" element="MY_RADIO_BUTTON">
            foo
          </RadioButton>
        </CustomizationProvider>,
      );
      const styledRadioLabel = container.querySelector('label');

      expect(styledRadioLabel).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });
  });
});

describe('RadioButtonGroup', () => {
  it('renders a fieldset group visibly into document', () => {
    render(<Attached />);
    const radioBtnGroup = screen.getByRole('group');

    expect(radioBtnGroup).toBeVisible();
    expect(radioBtnGroup).toBeInstanceOf(HTMLFieldSetElement);
  });

  it('renders a legend visibly into document', () => {
    render(<Attached />);
    const legend = screen.getByRole('group', { name: /This is some legend text/ }).querySelector('legend');

    expect(legend).toBeVisible();
    expect(legend).toBeInstanceOf(HTMLLegendElement);
  });

  it('renders with a required dot when required', () => {
    render(<Attached required />);
    const fieldset = screen.getByRole('group');
    const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

    expect(requiredDot).toBeVisible();
  });

  it('renders with an assigned value', () => {
    render(<Attached value="1" />);
    const radio = screen.getByRole('radio', { name: 'First' });

    expect(radio).toBeChecked();
  });

  it('renders with an assigned name', () => {
    render(<Attached name="lolwut" />);
    const radio = screen.getByRole('radio', { name: 'First' });

    expect(radio).toHaveAttribute('name', 'lolwut');
  });

  it('renders helpText visibly into document', () => {
    render(<Attached helpText="lolwut" />);

    const helpText = screen.getByText('lolwut');
    expect(helpText).toBeVisible();
  });

  it('renders errorText visibly into document', () => {
    render(<Attached errorText="lolwut" />);

    const helpText = screen.getByText('lolwut');
    expect(helpText).toBeVisible();
  });

  describe('i18n', () => {
    it('renders default text for the required dot in the legend', () => {
      render(<Attached required />);
      const fieldset = screen.getByRole('group');
      const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

      expect(requiredDot).toHaveTextContent('(required)');
    });

    it('renders i18nRequiredLabel prop for the required dot in the legend', () => {
      render(<Attached required i18nRequiredLabel="(requis)" />);
      const fieldset = screen.getByRole('group');
      const requiredDot = fieldset.querySelector('[data-paste-element="LEGEND_REQUIRED_DOT"]');

      expect(requiredDot).toHaveTextContent('(requis)');
    });
  });

  describe('event handlers', () => {
    it.each<string[]>([
      ['onChange', 'click'],
      ['onFocus', 'focus'],
      ['onBlur', 'blur'],
    ])('assigns the %s event handler as expected', (propName, eventType) => {
      const spy = jest.fn();
      render(<Attached {...{ [propName]: spy }} />);
      const radio = screen.getByRole('radio', { name: 'First' });
      fireEvent[eventType].call(null, radio);

      expect(spy).toHaveBeenCalledTimes(1);
    });
    it('Should check the selected radio button (controlled)', () => {
      const MockRadioButtonGroup: React.FC = () => {
        const [value, setValue] = React.useState('2');
        return (
          <RadioButtonGroup
            legend="foo"
            id="foo"
            name="foo"
            value={value}
            onChange={(newVal) => {
              setValue(newVal);
            }}
          >
            <RadioButton data-testid="radio-button" value="1" checked>
              first
            </RadioButton>
            <RadioButton data-testid="radio-button1" value="2">
              second
            </RadioButton>
            <RadioButton data-testid="radio-button2" value="3" defaultChecked>
              third
            </RadioButton>
          </RadioButtonGroup>
        );
      };

      const { getByTestId } = render(<MockRadioButtonGroup />);

      expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
      expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(true);
      expect((getByTestId('radio-button2') as HTMLInputElement).checked).toBe(false);
      fireEvent.click(getByTestId('radio-button'));
      expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(true);
      expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(false);
      expect((getByTestId('radio-button2') as HTMLInputElement).checked).toBe(false);
      fireEvent.click(getByTestId('radio-button2'));
      expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
      expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(false);
      expect((getByTestId('radio-button2') as HTMLInputElement).checked).toBe(true);
    });

    it('Should check the selected radio (uncontrolled)', () => {
      const MockRadioButtonGroup: React.FC = () => {
        return (
          <RadioButtonGroup legend="foo" id="foo" name="foo">
            <RadioButton data-testid="radio-button" value="1">
              first
            </RadioButton>
            <RadioButton data-testid="radio-button1" value="2" defaultChecked>
              second
            </RadioButton>
          </RadioButtonGroup>
        );
      };

      const { getByTestId } = render(<MockRadioButtonGroup />);

      expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
      expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(true);
      fireEvent.click(getByTestId('radio-button'));
      expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(true);
      expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(false);
      fireEvent.click(getByTestId('radio-button1'));
      expect((getByTestId('radio-button') as HTMLInputElement).checked).toBe(false);
      expect((getByTestId('radio-button1') as HTMLInputElement).checked).toBe(true);
    });
  });

  describe('customization', () => {
    it('renders an element data attribute', () => {
      render(<Attached />);
      const radioBtnGroup = screen.getByRole('group');

      expect(radioBtnGroup).toHaveAttribute('data-paste-element', 'RADIO_BUTTON_GROUP');
    });

    it('renders a custom element data attribute', () => {
      render(<Attached element="MY_RADIO_BUTTON_GROUP" />);
      const radioBtnGroup = screen.getByRole('group');

      expect(radioBtnGroup).toHaveAttribute('data-paste-element', 'MY_RADIO_BUTTON_GROUP');
    });

    it('renders custom styling', () => {
      render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            RADIO_BUTTON_GROUP: { backgroundColor: 'colorBackgroundAvailable' },
          }}
        >
          <Attached />
        </CustomizationProvider>,
      );
      const radioBtnGroup = screen.getByRole('group');

      expect(radioBtnGroup).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });

    it('renders custom styling to a custom element', () => {
      render(
        <CustomizationProvider
          theme={TestTheme}
          elements={{
            MY_RADIO_BUTTON_GROUP: { backgroundColor: 'colorBackgroundAvailable' },
          }}
        >
          <Attached element="MY_RADIO_BUTTON_GROUP" />
        </CustomizationProvider>,
      );
      const radio = screen.getByRole('group');

      expect(radio).toHaveStyleRule('background-color', 'rgb(20, 176, 83)');
    });
  });
});
