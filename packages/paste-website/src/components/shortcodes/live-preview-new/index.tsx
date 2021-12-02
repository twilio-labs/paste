// https://github.com/FormidableLabs/react-live
import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {LiveProvider, LiveEditor, LiveError, LivePreview as ReactLivePreview} from 'react-live';

import {useTheme} from '@twilio-paste/theme';
import {Stack} from '@twilio-paste/stack';
import {useClipboard} from '@twilio-paste/clipboard-copy-library';
import {ShowIcon} from '@twilio-paste/icons/esm/ShowIcon';
import {HideIcon} from '@twilio-paste/icons/esm/HideIcon';
import {CopyIcon} from '@twilio-paste/icons/esm/CopyIcon';
// import {OpenInCodesandboxButton} from './open-in-codesandbox';
import {CodeblockTheme} from './codeBlockTheme';
import {CodeBlockOverlayShadow} from './CodeBlockOverlayShadow';
import type {Language} from '../../codeblock';

interface LivePreviewNewProps {
  children: string;
  scope: {[key: string]: any};
  imports: string;
  language?: Language;
}

const LivePreviewNew: React.FC<LivePreviewNewProps> = ({children, language = 'jsx', scope, imports}) => {
  const [viewCode, setViewCode] = React.useState(false);
  const clipboard = useClipboard({copiedTimeout: 1200});
  const pasteTheme = useTheme();

  const handleCopy = React.useCallback(() => {
    clipboard.copy(children);
  }, [children]);

  // Display different UI if codeblock is small
  const isSmallCodeVariant = (children.match(/\n/g) || '').length + 1 <= 3;

  const handleToggleCodeEditor = (): void => {
    setViewCode(!viewCode);
  };

  return (
    <Box marginBottom="space110" data-cy="live-preview">
      <LiveProvider code={children} scope={scope} language={language} theme={CodeblockTheme} noInline={false} disabled>
        <Box
          padding="space70"
          borderColor="colorBorderWeak"
          borderStyle="solid"
          borderWidth="borderWidth20"
          backgroundColor="colorBackgroundBody"
          borderTopLeftRadius="borderRadius20"
          borderTopRightRadius="borderRadius20"
          position="relative"
        >
          <ReactLivePreview />
        </Box>
        <Box
          backgroundColor="colorBackgroundBodyInverse"
          paddingY="space110"
          paddingX="space70"
          borderBottomLeftRadius="borderRadius20"
          borderBottomRightRadius="borderRadius20"
          borderColor="colorBorderWeak"
          borderStyle="solid"
          borderWidth="borderWidth20"
          borderTopWidth="borderWidth0"
          fontSize="fontSize20"
          position="relative"
          height={isSmallCodeVariant || viewCode ? 'auto' : '112px'}
          overflow="hidden"
        >
          {/* corrects an inbuilt 10px margin style so we can accurately use token values */}
          <LiveEditor
            style={{
              margin: '-10px',
              fontFamily: pasteTheme.fonts.fontFamilyCode,
              backgroundColor: pasteTheme.backgroundColors.colorBackgroundBodyInverse,
            }}
          />
          {isSmallCodeVariant || viewCode ? null : <CodeBlockOverlayShadow />}
          <Box position="absolute" top="space40" right="space40">
            <Stack orientation="horizontal" spacing="space40">
              {isSmallCodeVariant ? null : (
                <Button variant="secondary" size="small" onClick={handleToggleCodeEditor}>
                  {viewCode ? (
                    <>
                      <HideIcon decorative />
                      <span>Hide code</span>
                    </>
                  ) : (
                    <>
                      <ShowIcon decorative />
                      <span>View code</span>
                    </>
                  )}
                </Button>
              )}
              {/* <OpenInCodesandboxButton codeString={children} codeImports={imports} /> */}
            </Stack>
          </Box>
          {isSmallCodeVariant || viewCode ? (
            <Box position="absolute" bottom="space40" right="space40">
              <Button variant="secondary" size="small" onClick={handleCopy}>
                {clipboard.copied ? (
                  <>
                    <CopyIcon decorative />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <CopyIcon decorative />
                    <span>Copy</span>
                  </>
                )}
              </Button>
            </Box>
          ) : null}
        </Box>
        <LiveError />
      </LiveProvider>
    </Box>
  );
};

export {LivePreviewNew};
