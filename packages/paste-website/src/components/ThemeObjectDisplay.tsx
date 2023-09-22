import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { useTheme } from '@twilio-paste/theme';
import { CodeBlock } from '@twilio-paste/code-block';
import { format as prettyFormat } from 'pretty-format';

export const ThemeObjectDisplay: React.FC<React.PropsWithChildren<unknown>> = () => {
  const theme = useTheme();
  const themeKeys = Object.keys(theme);
  const reducedTheme: { [key: string]: any } = {};
  themeKeys.forEach((key) => {
    reducedTheme[key] = {};
  });
  return (
    <Box marginBottom="space70">
      <CodeBlock code={prettyFormat(reducedTheme)} language="json" />
    </Box>
  );
};
