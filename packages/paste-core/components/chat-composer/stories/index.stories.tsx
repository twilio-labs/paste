import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { Button } from '@twilio-paste/button';
import { AttachIcon } from '@twilio-paste/icons/esm/AttachIcon';
import { SendIcon } from '@twilio-paste/icons/esm/SendIcon';
import type { EditorState } from '@twilio-paste/lexical-library';
import { $createParagraphNode, $createTextNode, $getRoot } from '@twilio-paste/lexical-library';
import * as React from 'react';

import { ChatComposer } from '../src';
import type { ChatComposerProps } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Chat Composer',
  component: ChatComposer,
};

const defaultConfig: ChatComposerProps['config'] = {
  namespace: 'foo',
  onError: (error: Error) => {
    throw error;
  },
};

const disabledInitialText = (): void => {
  const root = $getRoot();

  if (root.getFirstChild() === null) {
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode('Type here...').toggleFormat('italic'));

    root.append(paragraph);
  }
};

const initialText = (): void => {
  const root = $getRoot();

  if (root.getFirstChild() === null) {
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode('Hello'));

    root.append(paragraph);
  }
};

const tallInitialText = (): void => {
  const root = $getRoot();

  if (root.getFirstChild() === null) {
    for (let i = 0; i < 10; i++) {
      const paragraph = $createParagraphNode();
      paragraph.append($createTextNode());
      paragraph.append($createTextNode('this is a really really long initial value'));

      root.append(paragraph);
    }
  }
};

const myOnChange = (editorState: EditorState): void => {
  editorState.read(() => {
    const root = $getRoot();

    // eslint-disable-next-line no-console
    console.log(root.getTextContent());
  });
};

const ComposerWrapperExample: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Box
    borderStyle="solid"
    borderWidth="borderWidth0"
    borderTopWidth="borderWidth10"
    borderColor="colorBorderWeak"
    display="flex"
    flexDirection="row"
    columnGap="space30"
    paddingX="space70"
    paddingTop="space50"
  >
    {children}
    <Box display="flex" flexDirection="row" columnGap="space30" alignItems="flex-start" paddingY="space30">
      <Box display="flex" alignItems="center">
        <Button variant="secondary_icon" size="reset">
          <AttachIcon decorative={false} title="Attach file" />
        </Button>
      </Box>
      <Box display="flex" alignItems="flex-start">
        <Button variant="primary_icon" size="reset">
          <SendIcon decorative={false} title="Send message" />
        </Button>
      </Box>
    </Box>
  </Box>
);

export const Default: StoryFn = () => {
  return (
    <ChatComposer config={defaultConfig} testid="foo" ariaLabel="Basic chat composer" placeholder="Type here..." />
  );
};

export const Disabled: StoryFn = () => {
  return (
    <ChatComposer
      disabled
      config={{
        editorState: disabledInitialText,
        namespace: 'foo',
        onError: (error: Error) => {
          throw error;
        },
      }}
      testid="foo"
      ariaLabel="Disabled chat composer"
    />
  );
};

export const LongPlaceholderText: StoryFn = () => {
  return (
    <ChatComposer
      config={defaultConfig}
      testid="foo"
      ariaLabel="Long placeholder"
      placeholder="This is a really really long placeholder text to let the user know that they can type here to add more info. This is a really really long placeholder text to let the user know that they can type here to add more info"
    />
  );
};

export const WithOnChange: StoryFn = () => {
  return (
    <ChatComposer
      onChange={myOnChange}
      config={defaultConfig}
      ariaLabel="Chat composer with an onChange function"
      placeholder="Type here..."
    />
  );
};

WithOnChange.parameters = {
  chromatic: { disableSnapshot: true },
};

export const WithInitialValue: StoryFn = () => {
  return (
    <ChatComposer
      initialValue="This is my initial value"
      ariaLabel="Chat composer with initial value"
      config={{
        namespace: 'foo',
        onError: (error: Error) => {
          throw error;
        },
      }}
      placeholder="Type here..."
    />
  );
};

export const WithCustomInitialValue: StoryFn = () => {
  return (
    <ChatComposer
      ariaLabel="Chat composer with custom initial value"
      config={{
        editorState: initialText,
        namespace: 'foo',
        onError: (error: Error) => {
          throw error;
        },
      }}
      placeholder="Type here..."
    />
  );
};

export const WithMaxHeight: StoryFn = () => {
  return (
    <ComposerWrapperExample>
      <ChatComposer
        ariaLabel="Chat composer with max height"
        maxHeight="size10"
        config={{
          editorState: tallInitialText,
          namespace: 'foo',
          onError: (error: Error) => {
            throw error;
          },
        }}
        placeholder="Type here..."
      />
    </ComposerWrapperExample>
  );
};

WithMaxHeight.parameters = {
  a11y: {
    /*
     * axe fails because the wrapper around the content editable is scrollable with a mouse but not a keyboard.
     * The fix is to add a tab index to the wrapper so a user can focus it and then use their arrow keys to scroll.
     * It would be more awkward to have 2 tab stops (one for the wrapper and one for the content editable),
     * so we can leave it as is since they can focus in the content editable and scroll through the content.
     */
    disable: true,
  },
};
