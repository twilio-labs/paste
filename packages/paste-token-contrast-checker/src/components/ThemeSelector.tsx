import * as React from 'react';
import { useUID } from '@twilio-paste/core/uid-library';
import { Select, Option } from '@twilio-paste/core/select';
import type { SelectProps } from '@twilio-paste/core/select';
import { Label } from '@twilio-paste/core/label';
import { ThemeVariants } from '@twilio-paste/core/theme';

interface ThemeSelectorProps extends Omit<SelectProps, 'children'> {
  themes: [keyof typeof ThemeVariants];
}
export const ThemeSelector: React.FC<React.PropsWithChildren<ThemeSelectorProps>> = ({ onChange, themes, value }) => {
  const selectID = useUID();
  return (
    <>
      <Label htmlFor={selectID}>Selected Theme</Label>
      <Select id={selectID} value={value} onChange={onChange}>
        {themes.map((themeName) => {
          return (
            <Option key={themeName} value={ThemeVariants[themeName]}>
              {ThemeVariants[themeName]}
            </Option>
          );
        })}
      </Select>
    </>
  );
};
