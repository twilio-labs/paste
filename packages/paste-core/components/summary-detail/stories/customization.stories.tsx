import type { StoryFn } from "@storybook/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import type { PasteCustomCSS } from "@twilio-paste/customization";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import { SummaryDetail, SummaryDetailContent, SummaryDetailHeading } from "../src";

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
    },
    [`${element}_TITLE`]: {
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
      <SummaryDetail>
        <SummaryDetailHeading>Summary thing, you can put anything in here</SummaryDetailHeading>
        <SummaryDetailContent>Details to show. Again anything in here is possible</SummaryDetailContent>
      </SummaryDetail>
    </CustomizationProvider>
  );
};

export const CustomElementNames: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const theme = useTheme();
  return (
    <CustomizationProvider theme={theme} elements={getStyles("FOO")} disableAnimations={isTestEnvironment}>
      <SummaryDetail element="FOO">
        <SummaryDetailHeading element="FOO_TITLE">Summary thing, you can put anything in here</SummaryDetailHeading>
        <SummaryDetailContent element="FOO_CONTENT">
          Details to show. Again anything in here is possible
        </SummaryDetailContent>
      </SummaryDetail>
    </CustomizationProvider>
  );
};
