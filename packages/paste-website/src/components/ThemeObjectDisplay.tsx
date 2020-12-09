import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {Codeblock} from './codeblock';

// not typed correctly
const prettyFormat = require('pretty-format');

export const ThemeObjectDisplay: React.FC = () => {
  const theme = useTheme();
  const themeKeys = Object.keys(theme);
  const reducedTheme = {};
  themeKeys.forEach(key => {
    reducedTheme[key] = {};
  });
  return (
    <Box as="pre" marginBottom="space70">
      <Codeblock>{prettyFormat(reducedTheme)}</Codeblock>
    </Box>
  );
};
