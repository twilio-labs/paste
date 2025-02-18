import { Alert } from "@twilio-paste/alert";
import type { AlertProps } from "@twilio-paste/alert";
import { Anchor } from "@twilio-paste/anchor";
import { Avatar } from "@twilio-paste/avatar";
import type { AvatarProps } from "@twilio-paste/avatar";
import { Box } from "@twilio-paste/box";
import { Button } from "@twilio-paste/button";
import type { ButtonProps } from "@twilio-paste/button";
import { ButtonGroup } from "@twilio-paste/button-group";
import { Callout, CalloutHeading, CalloutText } from "@twilio-paste/callout";
import type { CalloutProps } from "@twilio-paste/callout";
import { Disclosure, DisclosureContent, DisclosureHeading } from "@twilio-paste/disclosure";
import type { DisclosureHeadingProps } from "@twilio-paste/disclosure";
import { DisplayHeading } from "@twilio-paste/display-heading";
import { Heading } from "@twilio-paste/heading";
import { Input } from "@twilio-paste/input";
import { Paragraph } from "@twilio-paste/paragraph";
import { Option, Select } from "@twilio-paste/select";
import { Stack } from "@twilio-paste/stack";
import { TextArea } from "@twilio-paste/textarea";
import * as React from "react";

import { ThemeProvider } from "../src/themeProvider";

// eslint-disable-next-line import/no-default-export
export default {
  title: "Theme/Themes",
  component: ThemeProvider,
};

export const Rebrand = (): React.ReactNode => (
  <ThemeProvider theme="rebrand">
    <Stack orientation="vertical" spacing="space200">
      <Box>
        <Heading as="h2" variant="heading10">
          Rebrand Theme
        </Heading>
        <DisplayHeading variant="displayHeading10" as="h1">
          Display Heading 1
        </DisplayHeading>
        <DisplayHeading variant="displayHeading20" as="h2">
          Display Heading 2
        </DisplayHeading>
        <DisplayHeading variant="displayHeading30" as="h3">
          Display Heading 3
        </DisplayHeading>
        <Heading as="h3" variant="heading20">
          Paragraph and Inputs
        </Heading>
        <Paragraph>
          Lorem <Anchor href="#">ipsum</Anchor> dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo. Hendrerit
          gravida rutrum quisque non. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Tortor dignissim
          convallis aenean et tortor at risus. Vestibulum lorem sed risus ultricies. Tempor nec feugiat nisl pretium
          fusce id. Morbi tempus iaculis urna id volutpat lacus laoreet non curabitur. In ante metus dictum at. Sit amet
          risus nullam eget felis eget nunc lobortis.
        </Paragraph>
        <Stack orientation="vertical" spacing="space50">
          <Input aria-label="Search" placeholder="Search options..." type="text" />
          <Select aria-label="Options">
            <Option value="option1">Option 1</Option>
          </Select>
          <TextArea aria-label="Feedback" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit" />
        </Stack>
      </Box>
      <Box>
        <Heading as="h3" variant="heading20">
          Button variants
        </Heading>
        <ButtonGroup>
          {"primary primary_icon secondary secondary_icon destructive destructive_icon destructive_link destructive_secondary link inverse reset"
            .split(" ")
            .filter((variant) => !variant.includes("icon"))
            .map((variant) => (
              <Button key={variant} variant={variant as ButtonProps["variant"]} onClick={() => {}}>
                {variant} variant
              </Button>
            ))}
        </ButtonGroup>
      </Box>
      <Box>
        <Heading as="h3" variant="heading20">
          Callout variants
        </Heading>
        <Stack orientation="horizontal" spacing="space40">
          {"neutral warning error success new".split(" ").map((variant) => {
            return (
              <Callout key={variant} variant={variant as CalloutProps["variant"]}>
                <CalloutHeading as="h2">{variant} heading</CalloutHeading>
                <CalloutText>{variant} variant text</CalloutText>
              </Callout>
            );
          })}
        </Stack>
      </Box>
      <Box>
        <Heading as="h3" variant="heading20">
          Alert variants
        </Heading>
        <Stack orientation="horizontal" spacing="space40">
          {"error neutral warning".split(" ").map((variant) => {
            return (
              <Alert key={variant} variant={variant as AlertProps["variant"]}>
                {variant} variant
              </Alert>
            );
          })}
        </Stack>
      </Box>
      <Box>
        <Heading as="h3" variant="heading20">
          Avatar
        </Heading>
        <Stack orientation="horizontal" spacing="space40">
          {"30 40 50 60 70 80 90 100 110".split(" ").map((size) => {
            return <Avatar key={size} size={`sizeIcon${size}` as AvatarProps["size"]} name={size} />;
          })}
        </Stack>
      </Box>
      <Box>
        <Heading as="h3" variant="heading20">
          Disclosure
        </Heading>
        <Stack orientation="vertical" spacing="space70">
          {"10 20 30 40 50 60".split(" ").map((size) => {
            return (
              <Disclosure key={size}>
                <DisclosureHeading as="h2" variant={`heading${size}` as DisclosureHeadingProps["variant"]}>
                  Disclosure Heading
                </DisclosureHeading>
                <DisclosureContent>Content</DisclosureContent>
              </Disclosure>
            );
          })}
        </Stack>
      </Box>
    </Stack>
  </ThemeProvider>
);
