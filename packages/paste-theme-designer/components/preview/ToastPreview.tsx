import { Anchor } from "@twilio-paste/core/anchor";
import { Stack } from "@twilio-paste/core/stack";
import { Text } from "@twilio-paste/core/text";
import { Toast } from "@twilio-paste/core/toast";
import * as React from "react";
import type { JSX } from "react";

const ToastPreview = (): JSX.Element => {
  return (
    <Stack orientation="vertical" spacing="space40">
      <Toast onDismiss={() => alert("dismissed")} variant="neutral">
        <Text as="span">Your function is currently being deployed.</Text>
      </Toast>
      <Toast onDismiss={() => alert("dismissed")} variant="success">
        <Text as="span">
          Your email address has been updated. You can view your profile <Anchor href="#">here</Anchor>.
        </Text>
      </Toast>
      <Toast onDismiss={() => alert("dismissed")} variant="warning">
        <Text as="span">
          The phone number has been deleted. Functions still using this phone number may fail. Verify there are no
          functions tied to that number <Anchor href="#">here</Anchor>.
        </Text>
      </Toast>
      <Toast onDismiss={() => alert("dismissed")} variant="error">
        <Text as="span">There was an error when deleting the profile. Please try again.</Text>
      </Toast>
    </Stack>
  );
};

export { ToastPreview };
