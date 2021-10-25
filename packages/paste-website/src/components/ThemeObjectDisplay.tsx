import * as React from 'react-16';
import {Box} from '@twilio-paste/box';
import {useTheme} from '@twilio-paste/theme';
import {Codeblock} from './codeblock';

// not typed correctly
const prettyFormat = require('pretty-format');

export const ThemeObjectDisplay: React.FC = () => {
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
