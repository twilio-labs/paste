// https://github.com/FormidableLabs/react-live
import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {LiveProvider, LiveEditor, LiveError, LivePreview as ReactLivePreview} from 'react-live';
import styled from '@emotion/styled';
import {themeGet} from 'styled-system';
import {CodeblockTheme} from './theme';
import {Language} from '../../codeblock';

interface CodeblockProps {
  children: string;
  scope: {};
  language?: Language;
  disabled?: boolean;
}

const StyledPreviewWrapper = styled.div(props => ({
  marginTop: themeGet('space.space110')(props),
}));

// FIXME use tokens for theme and LiveEditor
const LivePreview: React.FC<CodeblockProps> = ({children, language = 'jsx', scope, disabled = false}) => {
  return (
    <StyledPreviewWrapper>
      <LiveProvider code={children} scope={scope} language={language} theme={CodeblockTheme} disabled={disabled}>
        <Box
          px="space50"
          py="space80"
          backgroundColor="colorBackground"
          borderTopLeftRadius="borderRadius20"
          borderTopRightRadius="borderRadius20"
        >
          <ReactLivePreview />
        </Box>
        <LiveEditor style={{padding: '2px 10px', borderBottomLeftRadius: '4px', borderBottomRightRadius: '4px'}} />
        <LiveError />
      </LiveProvider>
    </StyledPreviewWrapper>
  );
};

export {LivePreview};
