import { Box } from "@twilio-paste/box";
import { HelpText } from "@twilio-paste/help-text";
import { Input } from "@twilio-paste/input";
import { Label } from "@twilio-paste/label";
import { Paragraph } from "@twilio-paste/paragraph";
import * as React from "react";

import { UIDFork, useUID, useUIDSeed } from "../src";

const SignupForm: React.FC<React.PropsWithChildren<{ emailId: string; passwordId: string }>> = ({
  emailId,
  passwordId,
}) => {
  return (
    <>
      <Label htmlFor={emailId}>Email</Label>
      <Input value="" id={emailId} type="email" />
      <HelpText>Clicking the label will focus the input because browsers map the IDs on forms natively.</HelpText>
      <Box marginTop="space40" />
      <Label htmlFor={passwordId}>Password</Label>
      <Input value="" id={passwordId} type="password" />
      <HelpText>Passwords must be &gt;8 characters.</HelpText>
    </>
  );
};

const UseUIDExample = (): JSX.Element => {
  const emailId = useUID();
  const passwordId = useUID();
  return <SignupForm emailId={emailId} passwordId={passwordId} />;
};

const UseUIDSeedExample = (): JSX.Element => {
  const uidSeed = useUIDSeed();
  return <SignupForm emailId={uidSeed("email")} passwordId={uidSeed("password")} />;
};

// eslint-disable-next-line import/no-default-export
export default {
  title: "Libraries/uid",
};

export const UseUid = (): React.ReactNode => {
  return (
    <Box>
      <Paragraph>
        <code>useUID</code> is handy to quickly generate a unique ID.
        <br />
        Call it multiple times for multiple fields, like in this example.
      </Paragraph>
      <UseUIDExample />
    </Box>
  );
};

UseUid.storyName = "useUID";
UseUid.parameters = { chromatic: { disable: true } };

export const UseUidSeed = (): React.ReactNode => {
  return (
    <Box>
      <Paragraph>
        <code>useUIDSeed</code> creates a UID seed you can call multiple times to create UIDs. If you pass it the same
        value, it will generate the same ID. This is handy to map labels to inputs.
        <br />
        You can pass it any type of value (number, string, object, etc), but prefer passing it an object directly.
      </Paragraph>
      <UseUIDSeedExample />
    </Box>
  );
};

UseUidSeed.storyName = "useUIDSeed";
UseUidSeed.parameters = { chromatic: { disable: true } };

export const UidFork = (): React.ReactNode => {
  return (
    <Box>
      <Paragraph>
        Codesplitting may affect the order components mount - or if they ever mount - and change the generated ID as
        result. If you have codesplitting in your app, you&apos;ll need to inform the library by wrapping split points
        with <code>UIDFork</code>. Each call to UIDFork creates a new branch of UIDs untangled from siblings.
      </Paragraph>

      <UIDFork>
        <UseUIDSeedExample />
      </UIDFork>
      <UIDFork>
        <UseUIDExample />
      </UIDFork>
    </Box>
  );
};

UidFork.storyName = "UIDFork";
UidFork.parameters = { chromatic: { disable: true } };

export const VanillaUid = (): React.ReactNode => {
  return (
    <Box>
      <Paragraph>
        Vanilla <code>uid</code> should only be used outside of React; for example in a utility function. This API is{" "}
        <strong>not SSR friendly</strong>.
        <br />
        This method takes two arguments: <code>uid(item, [index])</code>. <code>item</code> should be an object. If it
        isn&apos;t, then the result may not be unique in some cases. If not passing an object, add the second argument{" "}
        <code>(index)</code> to improve uniqueness.
      </Paragraph>
    </Box>
  );
};

VanillaUid.storyName = "vanilla uid";
VanillaUid.parameters = { chromatic: { disable: true } };
