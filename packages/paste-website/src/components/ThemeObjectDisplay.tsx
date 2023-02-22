import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {format as prettyFormat} from 'pretty-format';

import {Codeblock} from './codeblock';

export const ThemeObjectDisplay: React.FC<React.PropsWithChildren<unknown>> = () => {
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
