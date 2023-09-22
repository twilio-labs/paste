import * as React from 'react';

interface RadioContextValue {
  name: string;
  value: string;
  disabled: boolean;
  hasError: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RadioContext = React.createContext<RadioContextValue>({
  name: '',
  value: '',
  disabled: false,
  hasError: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
});

export { RadioContext };
