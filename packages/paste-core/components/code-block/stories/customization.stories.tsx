import type { StoryFn } from "@storybook/react";
import { CustomizationProvider } from "@twilio-paste/customization";
import { useTheme } from "@twilio-paste/theme";
import * as React from "react";

import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTab,
  CodeBlockTabList,
  CodeBlockTabPanel,
  CodeBlockWrapper,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Code Block/Customization",
  component: CodeBlock,
  parameters: {
    a11y: {
      // no need to a11y check customization
      disable: true,
    },
  },
};

const rubyCode = `#!/usr/bin/ruby

# Import the library. This is a really really long line that should be wrapped.
require 'tk'

# Root window.
root = TkRoot.new  {
  title 'Push Me'
  background '#111188'
}

# Add a label to the root window.
lab = TkLabel.new(root) {
  text "Hey there,\nPush a button!"
  background '#3333AA'
  foreground '#CCCCFF'
}
`;

const phpCode = `<?php
require __DIR__ . '/vendor/autoload.php';
use TwilioRestClient;

// Your Account SID and Auth Token from twilio.com/console
$account_sid = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX';
$auth_token = 'your_auth_token';
// In production, these should be environment variables. E.g.:
// $auth_token = $_ENV["TWILIO_AUTH_TOKEN"]

// A Twilio number you own with SMS capabilities
$twilio_number = "+15017122661";

$client = new Client($account_sid, $auth_token);
$client->messages->create(
    // Where to send a text message (your cell phone?)
    '+15558675310',
    array(
        'from' => $twilio_number,
        'body' => 'I sent this message in under 10 minutes!'
    )
);`;

export const CustomizedCodeBlock: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        CODE_BLOCK_WRAPPER: {
          width: "size50",
        },
        CODE_BLOCK_HEADER: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
          borderTopLeftRadius: "borderRadius30",
          borderTopRightRadius: "borderRadius30",
          fontSize: "fontSize20",
        },
        CODE_BLOCK_COPY_BUTTON: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
        },
        CODE_BLOCK_EXTERNAL_LINK: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
        },
      }}
    >
      <CodeBlockWrapper>
        <CodeBlockHeader>Build a button</CodeBlockHeader>
        <CodeBlock code={rubyCode} language="ruby" />
      </CodeBlockWrapper>
    </CustomizationProvider>
  );
};

export const CustomizedCodeBlockGroup: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();

  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        CODE_BLOCK_WRAPPER: {
          width: "size50",
        },
        CODE_BLOCK_HEADER: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
          borderTopLeftRadius: "borderRadius30",
          borderTopRightRadius: "borderRadius30",
          fontSize: "fontSize20",
        },
        CODE_BLOCK_TAB_LIST: {
          backgroundColor: "colorBackgroundErrorWeakest",
          columnGap: "space0",
        },
        CODE_BLOCK_TAB: {
          borderRadius: "borderRadius0",
        },
        CODE_BLOCK_TAB_PANEL: {
          borderStyle: "solid",
          borderWidth: "borderWidth20",
          borderColor: "colorBorderDestructiveWeak",
          borderBottomLeftRadius: "borderRadius30",
          borderBottomRightRadius: "borderRadius30",
          overflow: "hidden",
        },
        CODE_BLOCK_COPY_BUTTON: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
        },
        CODE_BLOCK_EXTERNAL_LINK: {
          backgroundColor: "colorBackgroundErrorWeakest",
          color: "colorTextErrorStronger",
        },
      }}
    >
      <CodeBlockWrapper>
        <CodeBlockHeader>How to set up your API</CodeBlockHeader>
        <CodeBlockTabList>
          <CodeBlockTab>Ruby</CodeBlockTab>
          <CodeBlockTab>PHP</CodeBlockTab>
        </CodeBlockTabList>
        <CodeBlockTabPanel>
          <CodeBlock externalLink="#" code={rubyCode} language="ruby" maxLines={3} />
        </CodeBlockTabPanel>
        <CodeBlockTabPanel>
          <CodeBlock code={phpCode} language="php" maxLines={3} />
        </CodeBlockTabPanel>
      </CodeBlockWrapper>
    </CustomizationProvider>
  );
};
