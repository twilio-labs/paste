import { Box } from "@twilio-paste/box";
import { CodeBlock, CodeBlockWrapper } from "@twilio-paste/code-block";
import * as React from "react";

export interface StoryPreviewProps {
  storyID: string;
  title: string;
  code: string;
  height?: string;
}

const ENV = process.env.NODE_ENV || "development";
const BASE_URL = ENV === "production" ? "https://paste-storybook.twilio.design" : "http://localhost:9001";

const StoryPreview: React.FC<React.PropsWithChildren<StoryPreviewProps>> = ({
  storyID,
  title,
  code,
  height = "500px",
}) => {
  return (
    <Box
      padding="space20"
      borderRadius="borderRadius30"
      borderStyle="solid"
      borderWidth="borderWidth20"
      borderColor="colorBorderWeak"
      marginBottom="space70"
    >
      <iframe
        src={`${BASE_URL}/iframe.html?args=&id=${storyID}&viewMode=story`}
        style={{
          width: "100%",
          height,
          border: 0,
          overflow: "hidden",
          padding: "1.5rem",
        }}
        title={`${title}`}
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      />
      <CodeBlockWrapper>
        <CodeBlock
          i18nLinkLabel="Open in Storybook"
          language="jsx"
          maxLines={10}
          externalLink={`${BASE_URL}/?path=/story/${storyID}`}
          code={code}
        />
      </CodeBlockWrapper>
    </Box>
  );
};

StoryPreview.displayName = "StoryPreview";
export { StoryPreview };
