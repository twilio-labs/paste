import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { SyntaxHighlighter } from "@twilio-paste/syntax-highlighter-library";
import type { SnippetLanguages } from "@twilio-paste/syntax-highlighter-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

import { getPasteSyntaxTheme } from "./CodeBlockTheme";
import { CopyButton } from "./CopyButton";
import { ExternalLinkButton } from "./ExternalLinkButton";

type CodeBlockVariants = "multi-line" | "single-line";

export interface CodeBlockProps extends HTMLPasteProps<"div"> {
  children?: never;
  /**
   * The language of the code snipped
   *
   * @type {SnippetLanguages}
   * @memberof CodeBlockProps
   */
  language: SnippetLanguages;
  /**
   * The code snippet to be rendered
   *
   * @type {string}
   * @memberof CodeBlockProps
   */
  code: string;
  /**
   * Variant of code block to render
   *
   * @default "multi-line"
   * @type {CodeBlockVariants}
   * @memberof CodeBlockProps
   */
  variant?: CodeBlockVariants;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CODE_BLOCK"
   * @type {BoxElementProps["element"]}
   * @memberof CodeBlockProps
   */
  element?: BoxProps["element"];
  /**
   *
   * @type {boolean}
   * @memberof CodeBlockProps
   */
  showLineNumbers?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof CodeBlockProps
   */
  wrapLines?: boolean;
  /**
   *
   * @type {number}
   * @memberof CodeBlockProps
   */
  maxLines?: number;
  /**
   *
   * @type {string}
   * @memberof CodeBlockProps
   */
  externalLink?: string;
  /**
   *
   * @type {string}
   * @memberof CodeBlockProps
   */
  i18nCopyLabelBefore?: string;
  /**
   *
   * @type {string}
   * @memberof CodeBlockProps
   */
  i18nCopyLabelAfter?: string;
  /**
   *
   * @type {string}
   * @memberof CodeBlockProps
   */
  i18nLinkLabel?: string;
  /**
   *
   * @memberof CodeBlockProps
   */
  copyTextFormatter?: (code: string) => string;
}

const CodeBlockVariantStyles: Record<CodeBlockVariants, BoxStyleProps> = {
  "single-line": {
    gridTemplateColumns: "1fr auto",
    gridTemplateAreas: '"code-block button-group"',
    columnGap: "space40",
    borderRadius: "borderRadius70",
    paddingY: "space60",
  },
  "multi-line": {
    gridTemplateRows: "auto 1fr",
    gridTemplateAreas: '"button-group" "code-block"',
    rowGap: "space20",
    paddingTop: "space50",
    paddingBottom: "space90",
  },
};

export const CodeBlock = React.forwardRef<HTMLDivElement, CodeBlockProps>(
  (
    {
      element = "CODE_BLOCK",
      language,
      code,
      variant = "multi-line",
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
    ref,
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
          justifyContent={variant === "multi-line" ? "flex-end" : undefined}
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
  },
);

CodeBlock.displayName = "CodeBlock";
