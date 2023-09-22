import * as React from "react";

interface SwitchContextValue {
  disabled: boolean;
  name: string | undefined;
  hasError: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SwitchContext = React.createContext<SwitchContextValue>({
  disabled: false,
  name: undefined,
  hasError: undefined,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onChange: () => {},
});

export { SwitchContext };
