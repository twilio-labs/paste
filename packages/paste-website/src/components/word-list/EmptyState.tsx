import { Anchor } from "@twilio-paste/anchor";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { Card } from "@twilio-paste/card";
import { Heading } from "@twilio-paste/heading";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import Image from "next/image";
import * as React from "react";

import NotFound from "../../assets/images/not-found.svg";

interface EmptyStateProps {
  onClearSearch: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ onClearSearch }) => (
  <Card data-cy="word-list-empty-state" padding="space150">
    <Box display="flex" columnGap="space110">
      <Box flexShrink={0} size="size20" position="relative">
        <Image src={NotFound} alt="" fill />
      </Box>
      <Stack orientation="vertical" spacing="space50">
        <Heading as="h3" variant="heading30">
          Oh no! We couldn&apos;t find any matches
        </Heading>
        <Stack orientation="vertical" spacing="space70">
          <Text as="span">
            Try adjusting your filter string. If you still can&rsquo;t find what you&rsquo;re looking for, reach out by
            creating a{" "}
            <Anchor href="https://github.com/twilio-labs/paste/discussions" showExternal>
              GitHub Discussion
            </Anchor>{" "}
            and we can see about adding to the word list.
          </Text>
          <Button variant="secondary" onClick={onClearSearch}>
            Clear search
          </Button>
        </Stack>
      </Stack>
    </Box>
  </Card>
);
