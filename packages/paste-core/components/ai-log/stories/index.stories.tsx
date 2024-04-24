import * as React from "react";

import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { useUID } from "@twilio-paste/uid-library";
import { AIChatLog, AIChatMessage, AIChatMessageContent, AIChatMessageMeta, AIChatMessageMetaItem } from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/AI Log",
  component: AIChatLog,
};

export const Default = (): React.ReactNode => {
  const [showButton, setShowButton] = React.useState(true);
  const chatBoxUniqueID = useUID();
  return (
    <Box maxHeight="size40" overflowY="scroll" id={chatBoxUniqueID}>
      <AIChatLog>
        <AIChatMessage>
          <AIChatMessageMeta aria-label="You said">
            <AIChatMessageMetaItem variant="author">
              <Avatar name="Gibby Radki" size="sizeIcon50" color="decorative30" />
              You
            </AIChatMessageMetaItem>
          </AIChatMessageMeta>
          <AIChatMessageContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageContent>
          <AIChatMessageMeta aria-label="Quick actions available:">
            <AIChatMessageMetaItem>30007</AIChatMessageMetaItem>
            <AIChatMessageMetaItem>30007</AIChatMessageMetaItem>
            <AIChatMessageMetaItem>30007</AIChatMessageMetaItem>
          </AIChatMessageMeta>
          <AIChatMessageMeta aria-label="Feedback form">
            <AIChatMessageMetaItem>Was this helpful?</AIChatMessageMetaItem>
          </AIChatMessageMeta>
        </AIChatMessage>
        <AIChatMessage variant="ai">
          <AIChatMessageMeta aria-label="You said">
            <AIChatMessageMetaItem>
              <Avatar name="A" icon={ArtificialIntelligenceIcon} size="sizeIcon20" />
              AI Bot
            </AIChatMessageMetaItem>
          </AIChatMessageMeta>
          <AIChatMessageContent>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi
            iure adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
            impedit repellat assumenda.
          </AIChatMessageContent>
          <AIChatMessageMeta aria-label="Quick actions available:">
            <AIChatMessageMetaItem>30007</AIChatMessageMetaItem>
            <AIChatMessageMetaItem>30007</AIChatMessageMetaItem>
            <AIChatMessageMetaItem>30007</AIChatMessageMetaItem>
          </AIChatMessageMeta>
          <AIChatMessageMeta aria-label="Feedback form">
            <AIChatMessageMetaItem>Was this helpful?</AIChatMessageMetaItem>
          </AIChatMessageMeta>
        </AIChatMessage>
      </AIChatLog>
    </Box>
  );
};
