// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable import/no-extraneous-dependencies */
import { Button } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { UserIcon } from "@twilio-paste/icons/esm/UserIcon";
import * as React from "react";

import {
  AIChatLog,
  AIChatMessage,
  AIChatMessageActions,
  AIChatMessageAuthor,
  AIChatMessageBody,
  AIChatMessageFeedback,
  AIChatMessageLoading,
  AIChatMessageRewrite,
} from "../src";

export default {
  title: "Components/AI Chat Log",
  component: AIChatLog,
};

export const ExampleAIChatLog = (): React.ReactNode => {
  return (
    <AIChatLog>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor avatarName="Gibby Ridki" avatarIcon={UserIcon} aria-label="You said at 2:36pm">
          You
        </AIChatMessageAuthor>
        <AIChatMessageBody size="default">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody size="default">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
        <AIChatMessageActions aria-label="Quick actions available:">
          <ButtonGroup>
            <Button variant="secondary" onClick={() => {}} size="rounded_small">
              30007
            </Button>
            <Button variant="secondary" onClick={() => {}} size="rounded_small">
              30007
            </Button>
            <Button variant="secondary" onClick={() => {}} size="rounded_small">
              30009
            </Button>
          </ButtonGroup>
        </AIChatMessageActions>
        <AIChatMessageActions aria-label="Feedback form">
          <AIChatMessageFeedback onLike={() => {}} onDislike={() => {}} />
          <AIChatMessageRewrite onRewrite={() => {}} />
        </AIChatMessageActions>
      </AIChatMessage>
      <AIChatMessage variant="user">
        <AIChatMessageAuthor aria-label="You said">Gibby Radki</AIChatMessageAuthor>
        <AIChatMessageBody>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt delectus fuga, necessitatibus eligendi iure
          adipisci facilis exercitationem officiis dolorem laborum, ex fugiat quisquam itaque, earum sit nesciunt
          impedit repellat assumenda.
        </AIChatMessageBody>
      </AIChatMessage>
      <AIChatMessage variant="bot">
        <AIChatMessageAuthor aria-label="AI said">Good Bot</AIChatMessageAuthor>
        <AIChatMessageBody>
          <AIChatMessageLoading onStopLoading={() => {}} />
        </AIChatMessageBody>
      </AIChatMessage>
    </AIChatLog>
  );
};
