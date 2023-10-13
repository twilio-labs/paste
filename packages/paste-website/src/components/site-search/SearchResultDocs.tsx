import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { InlineCode } from "@twilio-paste/inline-code";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import * as React from "react";

import { type DocSearchItem } from "./types";

export const FakeHeading: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box fontWeight="fontWeightSemibold" fontSize="fontSize20" marginY="space10" textDecoration="underline">
      {children}
    </Box>
  );
};

export const FakeParagraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box fontSize="fontSize20" marginY="space10">
      {children}
    </Box>
  );
};

export const FakeList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box as="ul" fontSize="fontSize20" paddingLeft="space50" marginY="space10">
      {children}
    </Box>
  );
};

export const FakeListItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box as="li" fontSize="fontSize20" marginY="space10">
      {children}
    </Box>
  );
};

export const SearchResultDocs: React.FC<{ searchItem: DocSearchItem }> = ({ searchItem }) => {
  return (
    <Box
      // @ts-expect-error its fine
      as={Link}
      display="block"
      textDecoration="none"
      color="colorText"
      href={`${searchItem.meta.slug}#${searchItem.slug}`}
      paddingY="space30"
      paddingX="space40"
      borderRadius="borderRadius30"
      outline="none"
      _hover={{
        color: "colorTextPrimary",
        backgroundColor: "colorBackgroundPrimaryWeakest",
      }}
      _focus={{
        color: "colorTextPrimary",
        backgroundColor: "colorBackgroundPrimaryWeakest",
      }}
    >
      <Markdown
        options={{
          overrides: {
            code: {
              component: InlineCode,
            },
            a: {
              component: Anchor,
            },
            h1: {
              component: FakeHeading,
            },
            h2: {
              component: FakeHeading,
            },
            h3: {
              component: FakeHeading,
            },
            h4: {
              component: FakeHeading,
            },
            p: {
              component: FakeParagraph,
            },
            ul: {
              component: FakeList,
            },
            li: {
              component: FakeListItem,
            },
          },
        }}
      >
        {/* trim the content string to just 140 characters */}
        {`${searchItem.content.slice(0, 120)}...`}
      </Markdown>
    </Box>
  );
};
