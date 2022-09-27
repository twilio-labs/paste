import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {Codeblock} from './codeblock';
import {format as prettyFormat} from 'pretty-format';

export const ThemeObjectDisplay = (): JSX.Element => {
  const theme = useTheme();
  const themeKeys = Object.keys(theme);
  const reducedTheme: {[key: string]: any} = {};
  themeKeys.forEach((key) => {
    reducedTheme[key] = {};
  });
  return (
    <Box as="pre" marginBottom="space70">
      <Codeblock>{prettyFormat(reducedTheme)}</Codeblock>
    </Box>
  );
};
