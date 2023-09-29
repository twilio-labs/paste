import { Anchor } from "@twilio-paste/anchor";
import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Stack } from "@twilio-paste/stack";
import { Text } from "@twilio-paste/text";
import * as React from "react";

export interface ArticleAuthorProps {
  author: string;
  avatar: string;
  date: string;
  machineDate: string;
  authorLink?: string;
}

const ArticleAuthor: React.FC<React.PropsWithChildren<ArticleAuthorProps>> = ({
  author,
  avatar,
  date,
  authorLink,
  machineDate,
}) => {
  return (
    <Box marginY="space40">
      <Stack orientation="horizontal" spacing="space40">
        <Avatar name={author} src={avatar} size="sizeIcon60" />
        <Box as="div">
          <Text as="span" display="block" fontWeight="fontWeightBold" fontSize="fontSize30">
            {authorLink ? (
              <Anchor href={authorLink} showExternal>
                {author}
              </Anchor>
            ) : (
              author
            )}
          </Text>
          <Text
            as="time"
            dateTime={machineDate}
            display="block"
            color="colorTextWeak"
            fontSize="fontSize20"
            lineHeight="lineHeight10"
          >
            {date}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
};

ArticleAuthor.displayName = "ArticleAuthor";

export { ArticleAuthor };
