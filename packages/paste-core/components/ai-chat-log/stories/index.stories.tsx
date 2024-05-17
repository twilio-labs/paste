import * as React from "react";

import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { ArtificialIntelligenceIcon } from "@twilio-paste/icons/esm/ArtificialIntelligenceIcon";
import { useUID } from "@twilio-paste/uid-library";

import { Text } from "@twilio-paste/text";

import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageFeedback,
  AIChatMessageLoading,
  AIChatMessageMeta,
} from "../src";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/AI Chat Log",
  component: AIChatLog,
};

export const StandardUsage = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessage>
        <AIChatMessageAuthor aria-label="You said at 2:36pm">Gibby Radki</AIChatMessageAuthor>
        <AIChatMessageBody variant="default">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage>
        <AIChatMessageAuthor aria-label="AI said" bot>
          Good Bot
        </AIChatMessageAuthor>
        <AIChatMessageBody variant="default">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
        <AIChatMessageMeta aria-label="Quick actions available:">
          <ButtonGroup>
            <Button variant="secondary" onClick={() => {}} size="small">
              30007
            </Button>
            <Button variant="secondary" onClick={() => {}} size="small">
              30007
            </Button>
            <Button variant="secondary" onClick={() => {}} size="small">
              30009
            </Button>
          </ButtonGroup>
        </AIChatMessageMeta>
        <AIChatMessageMeta aria-label="Feedback form">
          <AIChatMessageFeedback onLike={() => {}} onDislike={() => {}} />
        </AIChatMessageMeta>
      </AIChatMessage>
      <AIChatMessage>
        <AIChatMessageAuthor aria-label="You said">Gibby Radki</AIChatMessageAuthor>
        <AIChatMessageBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage>
        <AIChatMessageAuthor aria-label="AI said" bot>
          Good Bot
        </AIChatMessageAuthor>
        <AIChatMessageBody>
          <AIChatMessageLoading onStopLoading={() => {}} />
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};
