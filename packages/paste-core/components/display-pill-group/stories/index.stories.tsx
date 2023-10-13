import { Avatar } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { CalendarIcon } from "@twilio-paste/icons/esm/CalendarIcon";
import * as React from "react";

import { DisplayPill } from "../src/DisplayPill";
import { DisplayPillGroup } from "../src/DisplayPillGroup";

export const Basic = (): JSX.Element => {
  return (
    <DisplayPillGroup data-testid="display-pill-group" aria-label="Your favorite sports:">
      <DisplayPill
        data-testid="display-pill-anchor"
        onFocus={() => {
          // eslint-disable-next-line no-console
          console.log("Focused Tennis!");
        }}
        onBlur={() => {
          // eslint-disable-next-line no-console
          console.log("Blurred Tennis!");
        }}
        href="https://google.com"
      >
        <CalendarIcon color="colorTextIcon" decorative size="sizeIcon10" />
        Tennis
      </DisplayPill>
      <DisplayPill data-testid="display-pill-standard">Football</DisplayPill>
      <DisplayPill href="/">
        <Avatar size="sizeIcon10" name="avatar example" src="./avatars/avatar4.png" />
        Baseball
      </DisplayPill>
      <DisplayPill href="/">
        <Avatar size="sizeIcon10" name="Avatar Anchor Example" />
        Bowling
      </DisplayPill>
      <DisplayPill>Basketball</DisplayPill>
      <DisplayPill>Soccer</DisplayPill>
    </DisplayPillGroup>
  );
};

export const OverflowWrapping = (): JSX.Element => {
  return (
    <Box maxWidth="size40">
      <DisplayPillGroup data-testid="display-pill-group" aria-label="Your favorite sports:">
        <DisplayPill
          data-testid="display-pill-anchor"
          onFocus={() => {
            // eslint-disable-next-line no-console
            console.log("Focused Tennis!");
          }}
          onBlur={() => {
            // eslint-disable-next-line no-console
            console.log("Blurred Tennis!");
          }}
          href="https://google.com"
        >
          <CalendarIcon color="colorTextIcon" decorative size="sizeIcon10" />
          Tennis
        </DisplayPill>
        <DisplayPill data-testid="display-pill-standard">Football</DisplayPill>
        <DisplayPill href="/">Baseball</DisplayPill>
        <DisplayPill>Basketball</DisplayPill>
        <DisplayPill>
          <Avatar size="sizeIcon10" name="portsball" />
          Basketball and Volleyball and Swimming and Jumping
        </DisplayPill>
        <DisplayPill>Soccer</DisplayPill>
      </DisplayPillGroup>
    </Box>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Components/Display Pill Group",
  component: DisplayPill,
};
