// https://github.com/FormidableLabs/react-live
import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {LiveProvider, LiveEditor, LiveError, LivePreview as ReactLivePreview} from 'react-live';
import {CodeblockTheme} from './theme';
import {Language} from '../../codeblock';

interface CodeblockProps {
  children: string;
  scope: {};
  language?: Language;
  disabled?: boolean;
}

// FIXME use tokens for theme and LiveEditor
const LivePreview: React.FC<CodeblockProps> = ({children, language = 'jsx', scope, disabled = false}) => {
  return (
    <Box marginBottom="space110">
      <LiveProvider code={children} scope={scope} language={language} theme={CodeblockTheme} disabled={disabled}>
        <Box
          paddingLeft="space50"
          paddingRight="space50"
          paddingTop="space80"
          paddingBottom="space80"
          backgroundColor="colorBackground"
          borderTopLeftRadius="borderRadius20"
          borderTopRightRadius="borderRadius20"
        >
          <ReactLivePreview />
        </Box>
        <Box
          css={{padding: '2px 10px', backgroundColor: '#011627'}}
          borderBottomLeftRadius="borderRadius20"
          borderBottomRightRadius="borderRadius20"
        >
          <LiveEditor />
        </Box>
        <LiveError />
      </LiveProvider>
    </Box>
  );
};

export {LivePreview};
