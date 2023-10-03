import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { DocumentationIcon } from "@twilio-paste/icons/esm/DocumentationIcon";
import Link from "next/link";
import * as React from "react";

import { sentenceCase } from "../../utils/SentenceCase";
import GithubIcon from "../icons/GithubIcon";
import { SearchResultDocs } from "./SearchResultDocs";
import { type GroupedSearchResults } from "./types";

export interface SearchResultsProps {
  results?: GroupedSearchResults;
}

const DiscussionHeading: React.FC<{ title: string; path: string }> = ({ title, path }) => {
  return (
    <Heading as="h2" variant="heading40" marginBottom="space0">
      <Box
        // @ts-expect-error its fine
        as={Link}
        href={path}
        color="colorText"
        _hover={{ color: "colorTextPrimary", textDecoration: "none" }}
        _focus={{ boxShadow: "shadowFocus", textDecoration: "none" }}
        borderRadius="borderRadius20"
        outline="none"
        display="block"
        padding="space20"
      >
        <Box as="span" display="flex" alignItems="center" columnGap="space40">
          <Box size="sizeIcon30" color="colorTextIcon">
            <GithubIcon decorative={true} size={30} />
          </Box>
          {title}
        </Box>
      </Box>
    </Heading>
  );
};

const DocumentationHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Heading as="h2" variant="heading40" marginBottom="space0">
      <Box as="span" display="flex" alignItems="center" columnGap="space40">
        <DocumentationIcon decorative={true} color="colorTextIcon" size="sizeIcon40" />
        {title}
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
        const resultParent = {
          path: resultSections[0].path,
          title: resultSections[0].meta.title,
          description: resultSections[0].meta.description,
          slug: resultSections[0].meta.slug,
        };
        const resultType = resultSections[0].type;
        return (
          <Box key={path} marginTop="space20" marginBottom="space100" data-cy="paste-docsearch-hits">
            {resultType === "github-discussions" ? (
              <DiscussionHeading path={resultParent.path} title={resultParent.title} />
            ) : (
              <DocumentationHeading title={resultParent.title} />
            )}
            {resultParent.description && (
              <Box fontSize="fontSize30" lineHeight="lineHeight20" marginY="space20">
                {resultParent.description}
              </Box>
            )}
            {resultParent.slug && (
              <Box fontWeight="fontWeightMedium" color="colorTextWeak" fontSize="fontSize20" marginBottom="space50">
                {sentenceCase(resultParent.slug.split("/")[1])}
              </Box>
            )}
            {resultType === "markdown" && (
              <Box paddingX="space40" marginLeft="space40">
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
                          // @ts-expect-error we technically only allow design tokens
                          "&:after": {
                            display: "none",
                          },
                        }}
                      >
                        <SearchResultDocs searchItem={result} />
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
