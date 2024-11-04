import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";

import { Logo } from "../../assets/Logo";
import EmptyDoSomething from "../../assets/illustrations/empty-do-something.svg";

const cannedActions = {
  REACT_QUESTION: "How do I create a Primary button in React?",
  COMPONENT_GUIDE: "When should I use a Popover over a tooltip?",
  ACCESSIBILITY: "What are the accessibilty considerations when using color?",
};

export const AssistantEmptyState: React.FC<{ onCannedThreadCreation: (message: string) => void }> = ({
  onCannedThreadCreation,
}) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <Box maxWidth="900px" display="flex" flexDirection="column" rowGap="space150" paddingX="space120">
        <Box display="flex" columnGap="space150" alignItems="center">
          <Box>
            <Heading as="h1" variant="heading20">
              Welcome to the Paste Design System Assistant
            </Heading>
            <Paragraph>
              The Assistant is a tool to help you design and build with Paste. It&apos;s a place to ask questions, get
              answers, and learn about using Paste.
            </Paragraph>
            <Paragraph>
              Create different threads to interact with PasteBot, and revisit your conversations. It can help with
              writing Code, understanding component guidelines and Design guidelines.
            </Paragraph>
            <Paragraph>
              PasteBot is an experimental feature. Share your feedback with the Paste team on{" "}
              <Link href="https://github.com/twilio-labs/paste/discussions/new/choose">Github Discussions</Link>.
            </Paragraph>
          </Box>
          <Image src={EmptyDoSomething} width={300} aria-hidden="true" alt="" priority />
        </Box>
        <Box>
          <Heading as="h2" variant="heading30">
            <Box display="flex" alignItems="center" columnGap="space30">
              <Logo size={26} /> Ask Paste anything:
            </Box>
          </Heading>
          <Box display="flex" rowGap="space40" columnGap="space40" flexWrap="wrap">
            <Button variant="secondary" onClick={() => onCannedThreadCreation(cannedActions.REACT_QUESTION)}>
              {cannedActions.REACT_QUESTION}
            </Button>
            <Button variant="secondary" onClick={() => onCannedThreadCreation(cannedActions.COMPONENT_GUIDE)}>
              {cannedActions.COMPONENT_GUIDE}
            </Button>
            <Button variant="secondary" onClick={() => onCannedThreadCreation(cannedActions.ACCESSIBILITY)}>
              {cannedActions.ACCESSIBILITY}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
