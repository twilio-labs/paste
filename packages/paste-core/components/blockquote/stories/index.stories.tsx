import type { StoryFn } from "@storybook/react";
import { Box } from "@twilio-paste/box";
import { CustomizationProvider } from "@twilio-paste/customization";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { Blockquote, BlockquoteCitation, BlockquoteContent } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Blockquote",
  component: Blockquote,
};

export const Default: StoryFn = () => (
  <Box maxWidth="600px">
    <Blockquote url="#">
      <BlockquoteContent>
        With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
        human experience as a whole.
      </BlockquoteContent>
      <BlockquoteCitation author="Google" source="People + AI Guidebook" />
    </Blockquote>
  </Box>
);

export const WithoutUrl: StoryFn = () => (
  <Box maxWidth="600px">
    <Blockquote>
      <BlockquoteContent>
        With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
        human experience as a whole.
      </BlockquoteContent>
      <BlockquoteCitation author="Google" source="People + AI Guidebook" />
    </Blockquote>
  </Box>
);

export const WithoutSource: StoryFn = () => (
  <Box maxWidth="600px">
    <Blockquote>
      <BlockquoteContent>
        With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
        human experience as a whole.
      </BlockquoteContent>
      <BlockquoteCitation author="Google" />
    </Blockquote>
  </Box>
);

export const BottomMargin: StoryFn = () => (
  <Box display="flex" flexDirection="column" rowGap="space60">
    <Box maxWidth="600px" borderStyle="solid">
      <Blockquote url="#">
        <BlockquoteContent>
          With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
          human experience as a whole.
        </BlockquoteContent>
        <BlockquoteCitation author="Google" source="People + AI Guidebook" />
      </Blockquote>
    </Box>
    <Box maxWidth="600px" borderStyle="solid">
      <Blockquote url="#" marginBottom="space0">
        <BlockquoteContent>
          With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
          human experience as a whole.
        </BlockquoteContent>
        <BlockquoteCitation author="Google" source="People + AI Guidebook" />
      </Blockquote>
    </Box>
  </Box>
);

export const CustomizationBlockquote: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        BLOCKQUOTE: {
          backgroundColor: "colorBackgroundBody",
          borderColor: "colorBorderPrimary",
          borderRadius: "borderRadius20",
          borderStyle: "solid",
          borderWidth: "borderWidth20",
          color: "colorTextSuccess",
          padding: "space60",
        },
        BLOCKQUOTE_ICON: {
          color: "colorTextWarning",
        },
        INNER_BLOCKQUOTE: { margin: "space40" },
        BLOCKQUOTE_CONTENT: {
          color: "colorTextWarning",
          fontFamily: "fontFamilyText",
          fontSize: "fontSize30",
          fontWeight: "fontWeightSemibold",
          lineHeight: "lineHeight40",
        },
        BLOCKQUOTE_CITATION: {
          color: "colorTextError",
          fontFamily: "fontFamilyText",
          fontSize: "fontSize20",
          fontWeight: "fontWeightSemibold",
          lineHeight: "lineHeight20",
        },
        BLOCKQUOTE_CITATION_AUTHOR: {
          color: "colorTextWarning",
        },
        BLOCKQUOTE_CITATION_CITE: { fontFamily: "fontFamilyCode" },
        BLOCKQUOTE_CITATION_ANCHOR: { color: "colorTextLinkStronger" },
      }}
    >
      <Box maxWidth="600px">
        <Blockquote url="#">
          <BlockquoteContent>
            With AI-driven products, the design process is no longer just about aesthetics. It’s about designing for the
            human experience as a whole.
          </BlockquoteContent>
          <BlockquoteCitation author="Google" source="People + AI Guidebook" />
        </Blockquote>
      </Box>
    </CustomizationProvider>
  );
};

CustomizationBlockquote.storyName = "Customized";
CustomizationBlockquote.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
