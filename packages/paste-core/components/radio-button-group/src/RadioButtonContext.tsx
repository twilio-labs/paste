import * as React from "react";

interface RadioButtonContextValue {
  name: string;
  value: string;
  disabled: boolean;
  hasError: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  attached?: boolean;
}

const RadioButtonContext = React.createContext<RadioButtonContextValue>({
  name: "",
  value: "",
  disabled: false,
  hasError: false,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
  attached: false,
});

export { RadioButtonContext };
