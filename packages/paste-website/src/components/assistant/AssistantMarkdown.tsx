import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { CodeBlock, CodeBlockHeader, type CodeBlockProps, CodeBlockWrapper } from "@twilio-paste/code-block";
import { Heading } from "@twilio-paste/heading";
import { InlineCode } from "@twilio-paste/inline-code";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/table";
import Markdown, { MarkdownToJSX } from "markdown-to-jsx";
import * as React from "react";

export const AssistantHeading1: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Heading as="h1" variant="heading10">
      {children}
    </Heading>
  );
};
export const AssistantHeading2: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Heading as="h2" variant="heading20">
      {children}
    </Heading>
  );
};
export const AssistantHeading3: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Heading as="h3" variant="heading30">
      {children}
    </Heading>
  );
};
export const AssistantHeading4: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Heading as="h4" variant="heading40">
      {children}
    </Heading>
  );
};

export const AssistantTable: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box marginBottom="space50">
      {/* @ts-expect-error there is children being passed */}
      <Table scrollHorizontally>{children}</Table>
    </Box>
  );
};

export const assistantMarkdownOptions = {
  renderRule(next: () => React.ReactChild, node: MarkdownToJSX.ParserResult) {
    if (node.type === "3") {
      return (
        <Box marginBottom="space50">
          <CodeBlockWrapper>
            <CodeBlockHeader>{node.lang ? node.lang : "javascript"}</CodeBlockHeader>
            <CodeBlock
              code={String.raw`${node.text}`}
              maxLines={10}
              language={node.lang ? (node.lang as CodeBlockProps["language"]) : "javascript"}
            />
          </CodeBlockWrapper>
        </Box>
      );
    }
    return next();
  },
  overrides: {
    code: {
      component: InlineCode,
    },
    a: {
      component: Anchor,
    },
    table: {
      component: AssistantTable,
    },
    thead: {
      component: THead,
    },
    tbody: {
      component: TBody,
    },
    tr: {
      component: Tr,
    },
    td: {
      component: Td,
    },
    th: {
      component: Th,
    },
    h1: {
      component: AssistantHeading1,
    },
    h2: {
      component: AssistantHeading2,
    },
    h3: {
      component: AssistantHeading3,
    },
    h4: {
      component: AssistantHeading4,
    },
  },
};

export const AssistantMarkdown: React.FC<{ children: string }> = ({ children }) => {
  return <Markdown options={assistantMarkdownOptions}>{children}</Markdown>;
};
