import * as React from 'react';
import PropTypes from 'prop-types';
import {SyntaxHighlighter} from '@twilio-paste/syntax-highlighter-library';
import type {SnippetLanguages} from '@twilio-paste/syntax-highlighter-library';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps, BoxStyleProps} from '@twilio-paste/box';

import {getPasteSyntaxTheme} from './CodeBlockTheme';
import {CopyButton} from './CopyButton';
import {ExternalLinkButton} from './ExternalLinkButton';

type CodeBlockVariants = 'multi-line' | 'single-line';

export interface CodeBlockProps extends Partial<Omit<HTMLDivElement, 'children'>> {
  children?: never;
  language: SnippetLanguages;
  code: string;
  variant?: CodeBlockVariants;
  element?: BoxProps['element'];
  showLineNumbers?: boolean;
  wrapLines?: boolean;
  maxLines?: number;
  externalLink?: string;
  i18nCopyLabelBefore?: string;
  i18nCopyLabelAfter?: string;
  i18nLinkLabel?: string;
  copyTextFormatter?: (code: string) => string;
}

const CodeBlockVariantStyles: Record<CodeBlockVariants, BoxStyleProps> = {
  'single-line': {
    gridTemplateColumns: '1fr auto',
    gridTemplateAreas: '"code-block button-group"',
    columnGap: 'space40',
    borderRadius: 'borderRadius20',
    paddingY: 'space60',
  },
  'multi-line': {
    gridTemplateRows: 'auto 1fr',
    gridTemplateAreas: '"button-group" "code-block"',
    rowGap: 'space20',
    paddingY: 'space50',
  },
};

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      element = 'CODE_BLOCK',
      language,
      code,
      variant = 'multi-line',
      showLineNumbers,
      wrapLines,
      maxLines,
      externalLink,
      i18nCopyLabelAfter,
      i18nCopyLabelBefore,
      i18nLinkLabel,
      copyTextFormatter,
      ...props
    },
    ref
  ) => {
    return (
      <Box
        ref={ref}
        element={element}
        variant={variant}
        {...safelySpreadBoxProps(props)}
        backgroundColor="colorBackgroundBodyInverse"
        paddingX="space70"
        display="grid"
        {...CodeBlockVariantStyles[variant]}
      >
        <Box
          display="flex"
          flexDirection="row"
          alignItems="center"
          columnGap="space40"
          justifyContent={variant === 'multi-line' ? 'flex-end' : undefined}
          gridArea="button-group"
        >
          <Box>
            <CopyButton
              element={`${element}_COPY_BUTTON`}
              text={code}
              i18nCopyLabelAfter={i18nCopyLabelAfter}
              i18nCopyLabelBefore={i18nCopyLabelBefore}
              copyTextFormatter={copyTextFormatter}
            />
          </Box>
          {externalLink && (
            <Box>
              <ExternalLinkButton
                href={externalLink}
                element={`${element}_EXTERNAL_LINK`}
                i18nLinkLabel={i18nLinkLabel}
              />
            </Box>
          )}
        </Box>
        <Box element={`${element}_CONTENT`} display="flex" alignItems="center" overflowX="auto" gridArea="code-block">
          <SyntaxHighlighter
            language={language}
            style={getPasteSyntaxTheme(maxLines) as Record<string, React.CSSProperties>}
            showLineNumbers={showLineNumbers}
            /*
             * the difference between wrapLongLines and wrapLines is detailed here:
             * https://github.com/react-syntax-highlighter/react-syntax-highlighter/pull/309
             */
            wrapLongLines={wrapLines}
            wrapLines={true}
          >
            {code}
          </SyntaxHighlighter>
        </Box>
      </Box>
    );
  }
);

CodeBlock.displayName = 'CodeBlock';

CodeBlock.propTypes = {
  code: PropTypes.string.isRequired,
  element: PropTypes.string,
  language: PropTypes.oneOf([
    'javascript',
    'jsx',
    'csharp',
    'php',
    'ruby',
    'python',
    'java',
    'json',
    'c',
    'bash',
    'shell-session',
    'go',
    'groovy',
  ] as SnippetLanguages[]).isRequired,
  showLineNumbers: PropTypes.bool,
  wrapLines: PropTypes.bool,
  maxLines: PropTypes.number,
  externalLink: PropTypes.string,
  i18nCopyLabelBefore: PropTypes.string,
  i18nCopyLabelAfter: PropTypes.string,
  i18nLinkLabel: PropTypes.string,
  variant: PropTypes.oneOf(['multi-line', 'single-line'] as CodeBlockVariants[]),
  copyTextFormatter: PropTypes.func,
};
