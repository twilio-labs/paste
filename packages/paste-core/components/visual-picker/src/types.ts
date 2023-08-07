import {type BoxProps} from '@twilio-paste/box';
import {type InlineControlGroupProps} from '@twilio-paste/inline-control-group';
import {type RadioProps} from '@twilio-paste/radio-group';
import {type CheckboxProps} from '@twilio-paste/checkbox';

export interface VisualPickerCheckboxGroupProps extends InlineControlGroupProps {
  orientation?: 'horizontal' | 'vertical';
  children: React.ReactNode;
  element?: BoxProps['element'];
  name: string;
  i18nRequiredLabel?: string;
}

export interface VisualPickerRadioGroupProps extends VisualPickerCheckboxGroupProps {
  value: string;
  onChange: (value: string) => void;
}

export interface VisualPickerRadioProps extends Omit<RadioProps, 'helpText' | 'defaultChecked' | 'checked'> {
  labelText: string;
  value: string;
}

export interface VisualPickerCheckboxProps extends Omit<CheckboxProps, 'helpText' | 'required' | 'defaultChecked'> {
  labelText: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
