import { secureExternalLink } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { DocumentationIcon } from "@twilio-paste/icons/esm/DocumentationIcon";
import { LinkExternalIcon } from "@twilio-paste/icons/esm/LinkExternalIcon";
import Link from "next/link";
import * as React from "react";

import { sentenceCase } from "../../utils/SentenceCase";
import GithubIcon from "../icons/GithubIcon";
import { SearchResultDocs } from "./SearchResultDocs";
import { type DocSearchItem, type GroupedSearchResults } from "./types";

export interface SearchResultsProps {
  results?: GroupedSearchResults;
}

const DiscussionHeading: React.FC<{ title: string; path: string }> = ({ title, path }) => {
  return (
    <Heading as="h2" variant="heading40" marginBottom="space0">
      <Box
        // @ts-expect-error in this instance we're overriding our own guards for rendering Box as another component, as we're hooking into the NextJs Link component for client side routing, but we want to style it using our styling  primitives and Design Tokens for system consistency.
        as={Link}
        href={path}
        color="colorText"
        _hover={{ color: "colorTextPrimary", textDecoration: "none" }}
        _focus={{ boxShadow: "shadowFocus", textDecoration: "none" }}
        borderRadius="borderRadius20"
        outline="none"
        display="block"
        padding="space20"
        {...secureExternalLink(path)}
      >
        <Box as="span" display="flex" alignItems="center" columnGap="space40">
          <Box size="sizeIcon40" color="colorTextIcon">
            <GithubIcon decorative={true} />
          </Box>
          {title}
          <LinkExternalIcon decorative={false} title="external page" />
        </Box>
      </Box>
    </Heading>
  );
};

const DocumentationHeading: React.FC<{ title: string; slug: string }> = ({ title, slug }) => {
  return (
    <Heading as="h2" variant="heading40">
      <Box as="span" display="flex" alignItems="center" columnGap="space40">
        <DocumentationIcon decorative={true} color="colorTextIcon" size="sizeIcon60" />
        <Box display="flex" flexDirection="column">
          <Box fontWeight="fontWeightMedium" color="colorTextWeak" fontSize="fontSize20" lineHeight="lineHeight10">
            {sentenceCase(slug.split("/")[1])}
          </Box>
          <Box
            // @ts-expect-error in this instance we're overriding our own guards for rendering Box as another component, as we're hooking into the NextJs Link component for client side routing, but we want to style it using our styling  primitives and Design Tokens for system consistency.
            as={Link}
            href={slug}
            color="colorText"
            _hover={{ color: "colorTextPrimary", textDecoration: "none" }}
            _focus={{ boxShadow: "shadowFocus", textDecoration: "none" }}
            borderRadius="borderRadius20"
            outline="none"
          >
            {title}
          </Box>
        </Box>
      </Box>
    </Heading>
  );
};

const SearchResultsList: React.FC<SearchResultsProps> = ({ results }) => {
  if (!results) {
    return null;
  }
  return (
    <>
      {Object.keys(results).map((path) => {
        const resultSections = results[path];
        const resultType = resultSections[0].type;
        const resultParent = {
          path: resultSections[0].path,
          title: resultSections[0].meta.title,
          ...(resultType === "markdown" && {
            description: resultSections[0].meta.description,
            slug: resultSections[0].meta.slug,
          }),
        };
        return (
          <Box key={path} marginTop="space20" marginBottom="space100" data-cy="paste-docsearch-hits">
            {resultType === "github-discussions" && (
              <DiscussionHeading path={resultParent.path} title={resultParent.title} />
            )}
            {resultType === "markdown" && resultParent.slug != null && (
              <DocumentationHeading title={resultParent.title} slug={resultParent.slug} />
            )}
            {resultParent.description && (
              <Box fontSize="fontSize30" lineHeight="lineHeight20" marginY="space40">
                {resultParent.description}
              </Box>
            )}
            {resultType === "markdown" && (
              <Box paddingX="space40" marginLeft="space50">
                <Box as="ul" display="flex" flexDirection="column" rowGap="space30" padding="space0" margin="space0">
                  {resultSections.map((result) => {
                    return (
                      <Box
                        as="li"
                        key={`${result.path}${result.slug}`}
                        listStyleType="none"
                        position="relative"
                        margin="space0"
                        _before={{
                          position: "absolute",
                          left: "-15px",
                          top: "0px",
                          content: "''",
                          display: "block",
                          borderLeftStyle: "dashed",
                          borderLeftColor: "colorBorderWeak",
                          borderLeftWidth: "borderWidth10",
                          height: "20px",
                          borderBottomStyle: "dashed",
                          borderBottomColor: "colorBorderWeak",
                          borderBottomWidth: "borderWidth10",
                          width: "16px",
                        }}
                        _after={{
                          position: "absolute",
                          left: "-15px",
                          bottom: "-7px",
                          content: "''",
                          display: "block",
                          borderLeftStyle: "dashed",
                          borderLeftColor: "colorBorderWeak",
                          borderLeftWidth: "borderWidth10",
                          height: "100%",
                        }}
                        _last={{
                          // @ts-expect-error we technically only allow design tokens but we need access to override the after pseudo element
                          "&:after": {
                            display: "none",
                          },
                        }}
                      >
                        <SearchResultDocs searchItem={result as DocSearchItem} />
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            )}
          </Box>
        );
      })}
    </>
  );
};

SearchResultsList.displayName = "SearchResultsList";

export { SearchResultsList };
