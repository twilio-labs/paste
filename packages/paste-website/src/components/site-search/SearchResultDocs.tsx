import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { InlineCode } from "@twilio-paste/inline-code";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import * as React from "react";

import { type DocSearchItem } from "./types";

export const SearchResultHeading: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box fontWeight="fontWeightSemibold" fontSize="fontSize20" marginY="space10" textDecoration="underline">
      {children}
    </Box>
  );
};

export const SearchResultParagraph: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box fontSize="fontSize20" marginY="space10">
      {children}
    </Box>
  );
};

export const SearchResultList: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box as="ul" fontSize="fontSize20" paddingLeft="space50" marginY="space10">
      {children}
    </Box>
  );
};

export const SearchResultListItem: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Box as="li" fontSize="fontSize20" marginY="space10">
      {children}
    </Box>
  );
};

export const SearchResultDocs: React.FC<{ searchItem: DocSearchItem }> = ({ searchItem }) => {
  return (
    <Box
      // @ts-expect-error in this instance we're overriding our own guards for rendering Box as another component, as we're hooking into the NextJs Link component for client side routing, but we want to style it using our styling  primitives and Design Tokens for system consistency.
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
              component: SearchResultHeading,
            },
            h2: {
              component: SearchResultHeading,
            },
            h3: {
              component: SearchResultHeading,
            },
            h4: {
              component: SearchResultHeading,
            },
            p: {
              component: SearchResultParagraph,
            },
            ul: {
              component: SearchResultList,
            },
            li: {
              component: SearchResultListItem,
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
