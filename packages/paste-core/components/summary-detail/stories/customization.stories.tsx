import type { StoryFn } from "@storybook/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import type { PasteCustomCSS } from "@twilio-paste/customization";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  SummaryDetail,
  SummaryDetailContent,
  SummaryDetailHeading,
  SummaryDetailHeadingContent,
  SummaryDetailToggleButton,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/SummaryDetail/Customization",
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};

const getStyles = (element = "SUMMARY_DETAIL"): { [key: string]: PasteCustomCSS } => {
  return {
    [element]: {
      backgroundColor: "colorBackgroundPrimaryWeaker",
      borderRadius: "borderRadius30",
      boxShadow: "shadowCard",
      padding: "space60",
    },
    [`${element}_HEADING`]: {
      fontSize: "fontSize60",
    },
    [`${element}_HEADING_CONTENT`]: {
      fontSize: "fontSize60",
    },
    [`${element}_TOGGLE_BUTTON`]: {
      fontSize: "fontSize60",
    },
    [`${element}_CONTENT`]: {
      fontSize: "fontSize60",
    },
  };
};

export const DefaultElementNames: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const theme = useTheme();
  return (
    <CustomizationProvider theme={theme} elements={getStyles()} disableAnimations={isTestEnvironment}>
      <SummaryDetail visible>
        <SummaryDetailHeading>
          <SummaryDetailToggleButton />
          <SummaryDetailHeadingContent>Inbound Call</SummaryDetailHeadingContent>
        </SummaryDetailHeading>
        <SummaryDetailContent>Agent: John doe</SummaryDetailContent>
      </SummaryDetail>
    </CustomizationProvider>
  );
};

export const CustomElementNames: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const theme = useTheme();
  return (
    <CustomizationProvider theme={theme} elements={getStyles("FOO")} disableAnimations={isTestEnvironment}>
      <SummaryDetail element="FOO" visible>
        <SummaryDetailHeading element="FOO_HEADING">
          <SummaryDetailToggleButton element="FOO_TOGGLE_BUTTON" />
          <SummaryDetailHeadingContent element="FOO_HEADING_CONTENT">Inbound Call</SummaryDetailHeadingContent>
        </SummaryDetailHeading>
        <SummaryDetailContent element="FOO_CONTENT">Agent: John doe</SummaryDetailContent>
      </SummaryDetail>
    </CustomizationProvider>
  );
};
