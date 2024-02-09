import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { CodeBlock, CodeBlockHeader, type CodeBlockProps, CodeBlockWrapper } from "@twilio-paste/code-block";
import { Heading } from "@twilio-paste/heading";
import { InlineCode } from "@twilio-paste/inline-code";
import { ListItem, OrderedList, UnorderedList } from "@twilio-paste/list";
import { Separator } from "@twilio-paste/separator";
import { TBody, THead, Table, Td, Th, Tr } from "@twilio-paste/table";
import Markdown from "markdown-to-jsx";
import * as React from "react";

export const AssistantHeading: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Heading as="h2" variant="heading40">
      {children}
    </Heading>
  );
};
export const AssistantParagraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box
      as="p"
      color="inherit"
      fontSize="fontSize30"
      fontWeight="fontWeightNormal"
      lineHeight="lineHeight30"
      marginTop="space0"
      marginBottom="space50"
    >
      {children}
    </Box>
  );
};
export const AssistantSeparator: React.FC = () => {
  return <Separator orientation="horizontal" verticalSpacing="space50" />;
};
export const AssistantTable: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box marginBottom="space50">
      {/* @ts-expect-error there is children being passed */}
      <Table scrollHorizontally>{children}</Table>
    </Box>
  );
};

export const AssistantMarkdown: React.FC<{ children: string }> = ({ children }) => {
  return (
    <Markdown
      options={{
        renderRule(next, node) {
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
          h1: {
            component: AssistantHeading,
          },
          h2: {
            component: AssistantHeading,
          },
          h3: {
            component: AssistantHeading,
          },
          h4: {
            component: AssistantHeading,
          },
          p: {
            component: AssistantParagraph,
          },
          ol: {
            component: OrderedList,
          },
          ul: {
            component: UnorderedList,
          },
          li: {
            component: ListItem,
          },
          hr: {
            component: AssistantSeparator,
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
        },
      }}
    >
      {children}
    </Markdown>
  );
};
