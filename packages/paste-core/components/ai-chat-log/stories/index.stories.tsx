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
        <AIChatMessageMeta aria-label="You said">
          <Avatar name="Gibby Radki" size="sizeIcon50" color="decorative30" />
          You
        </AIChatMessageMeta>
        <AIChatMessageBody variant="default">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>

      <AIChatMessage>
        <AIChatMessageMeta aria-label="AI said">
          <Avatar name="AI" size="sizeIcon50" icon={ArtificialIntelligenceIcon} />
          AI Bot
        </AIChatMessageMeta>
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
        <AIChatMessageMeta aria-label="You said">
          <Avatar name="Gibby Radki" size="sizeIcon50" color="decorative30" />
          You
        </AIChatMessageMeta>
        <AIChatMessageBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>

      <AIChatMessage>
        <AIChatMessageMeta aria-label="AI said">
          <Avatar name="AI" size="sizeIcon50" icon={ArtificialIntelligenceIcon} />
          AI Bot
        </AIChatMessageMeta>
        <AIChatMessageBody>
          <AIChatMessageLoading onStopLoading={() => {}} />
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};
