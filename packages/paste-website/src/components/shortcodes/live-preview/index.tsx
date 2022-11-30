// https://github.com/FormidableLabs/react-live
import * as React from 'react';
import {LiveProvider, LiveEditor, LiveError, LivePreview as ReactLivePreview} from 'react-live';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import {useTheme} from '@twilio-paste/theme';
import {useUID} from '@twilio-paste/uid-library';
import {ShowIcon} from '@twilio-paste/icons/esm/ShowIcon';
import {HideIcon} from '@twilio-paste/icons/esm/HideIcon';

import {CodeblockTheme} from './theme';
import {CodeBlockOverlayShadow} from './CodeBlockOverlayShadow';
import type {Language} from '../../codeblock';
import {CopyButton} from '../../CopyButton';

interface LivePreviewProps {
  children: string;
  scope: {[key: string]: any};
  language?: Language;
  disabled?: boolean;
  noInline?: boolean;
  showOverflow?: boolean;
}

const LivePreview: React.FC<React.PropsWithChildren<LivePreviewProps>> = ({
  children,
  language = 'jsx',
  disabled = false,
  noInline = false,
  showOverflow = false,
  scope,
}) => {
  const [viewCode, setViewCode] = React.useState(false);
  const id = useUID();

  const pasteTheme = useTheme();

  // Display different UI if codeblock is small
  const isSmallCodeVariant = (children.match(/\n/g) || '').length + 1 <= 3;

  const handleToggleCodeEditor = (): void => {
    setViewCode(!viewCode);
  };

  const overflow = showOverflow ? 'visible' : 'auto';

  return (
    <Box marginBottom="space110" data-cy="live-preview">
      <LiveProvider
        code={children}
        scope={scope}
        language={language}
        theme={CodeblockTheme}
        noInline={noInline}
        disabled={disabled}
      >
        <Box
          padding="space70"
          borderColor="colorBorderWeak"
          borderStyle="solid"
          borderWidth="borderWidth20"
          backgroundColor="colorBackgroundBody"
          borderTopLeftRadius="borderRadius20"
          borderTopRightRadius="borderRadius20"
          position="relative"
          overflow={overflow}
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
          {isSmallCodeVariant ? null : (
            <Box position="absolute" top="space40" right="space40" zIndex="zIndex10">
              <Button
                variant="secondary"
                size="small"
                onClick={handleToggleCodeEditor}
                aria-label="View Code"
                aria-expanded={viewCode}
                aria-controls={id}
              >
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
            </Box>
          )}
          {/* corrects an inbuilt 10px margin style so we can accurately use token values */}
          <LiveEditor
            id={id}
            style={{
              margin: '-10px',
              fontFamily: pasteTheme.fonts.fontFamilyCode,
              backgroundColor: pasteTheme.backgroundColors.colorBackgroundBodyInverse,
            }}
          />
          {isSmallCodeVariant || viewCode ? null : <CodeBlockOverlayShadow />}
          {isSmallCodeVariant || viewCode ? (
            <Box position="absolute" bottom="space40" right="space40">
              <CopyButton text={children} />
            </Box>
          ) : null}
        </Box>
        <LiveError />
      </LiveProvider>
    </Box>
  );
};

export {LivePreview};
