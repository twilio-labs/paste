import { Box } from "@twilio-paste/box";
import { Heading } from "@twilio-paste/heading";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

import { SearchEmptyIllustration } from "./SearchEmptyIllustration";

export const SearchEmptyState: React.FC<{ searchQuery: string }> = ({ searchQuery }) => {
  return (
    <Box textAlign="center" maxWidth="500px" marginX="auto">
      <SearchEmptyIllustration aria-hidden="true" width={450} height={189} />
      <Heading as="h3" variant="heading30">
        No search results found for &quot;<em>{searchQuery}</em>&quot;
      </Heading>
      <Paragraph>
        Try re-wording your search term. You can try forming your search term as a question or giving more detail to get
        a better match.
      </Paragraph>
    </Box>
  );
};
