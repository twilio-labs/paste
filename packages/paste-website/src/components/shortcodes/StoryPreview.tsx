import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {CodeBlock, CodeBlockWrapper} from '@twilio-paste/code-block';

export interface StoryPreviewProps {
  storyID: string;
  title: string;
  code: string;
}

const StoryPreview: React.FC<React.PropsWithChildren<StoryPreviewProps>> = ({storyID, title, code}) => {
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
        src={`https://paste-storybook.twilio.design/iframe.html?args=&id=${storyID}&viewMode=story`}
        style={{
          width: '100%',
          height: '500px',
          border: 0,
          overflow: 'hidden',
          padding: '1.5rem',
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
          externalLink={`https://paste-storybook.twilio.design/?path=/story/${storyID}`}
          code={code}
        />
      </CodeBlockWrapper>
    </Box>
  );
};

StoryPreview.displayName = 'StoryPreview';
export {StoryPreview};
