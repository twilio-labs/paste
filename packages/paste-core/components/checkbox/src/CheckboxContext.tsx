import * as React from 'react';

interface CheckboxContextValue {
  disabled: boolean;
  name: string | undefined;
  hasError: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxContext = React.createContext<CheckboxContextValue>({
  disabled: false,
  name: undefined,
  hasError: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
});

export { CheckboxContext };
