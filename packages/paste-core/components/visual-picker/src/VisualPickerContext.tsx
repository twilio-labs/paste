import * as React from 'react';

interface VisualPickerCheckboxContextProps {
  groupIsDisabled: boolean;
  name: string;
  groupHasError: boolean;
  orientation: 'horizontal' | 'vertical';
}

interface VisualPickerRadioContextProps extends VisualPickerCheckboxContextProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const VisualPickerRadioContext = React.createContext<VisualPickerRadioContextProps>({
  groupIsDisabled: false,
  name: '',
  groupHasError: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  value: '',
  orientation: 'vertical',
});

export const VisualPickerCheckboxContext = React.createContext<VisualPickerCheckboxContextProps>({
  groupIsDisabled: false,
  name: '',
  groupHasError: false,
  orientation: 'vertical',
});
