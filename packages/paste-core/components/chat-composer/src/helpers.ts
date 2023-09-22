import { AutoLinkNode, $getRoot, $createParagraphNode, $createTextNode } from '@twilio-paste/lexical-library';

export const renderInitialText = (text: string): void => {
  const root = $getRoot();

  if (root.getFirstChild() === null) {
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode(text));

    root.append(paragraph);
  }
};

export const baseConfig = {
  theme: {
    paragraph: 'paste-chat-composer-paragraph',
  },
  nodes: [AutoLinkNode],
};
