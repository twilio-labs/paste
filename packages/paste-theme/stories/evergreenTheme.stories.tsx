import * as React from 'react';
import {Avatar} from '@twilio-paste/avatar';
import type {AvatarProps} from '@twilio-paste/avatar';
import {Alert} from '@twilio-paste/alert';
import type {AlertProps} from '@twilio-paste/alert';
import {Box} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';
import type {ButtonProps} from '@twilio-paste/button';
import {Callout, CalloutHeading, CalloutText} from '@twilio-paste/callout';
import type {CalloutProps} from '@twilio-paste/callout';
import {Input} from '@twilio-paste/input';
import {Paragraph} from '@twilio-paste/paragraph';
import {Heading} from '@twilio-paste/heading';
import {Select, Option} from '@twilio-paste/select';
import {Stack} from '@twilio-paste/stack';
import {ButtonGroup} from '@twilio-paste/button-group';
import {TextArea} from '@twilio-paste/textarea';
import {Disclosure, DisclosureHeading, DisclosureContent} from '@twilio-paste/disclosure';
import type {DisclosureHeadingProps} from '@twilio-paste/disclosure';

import {ThemeProvider} from '../src/themeProvider';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Theme/Themes',
  component: ThemeProvider,
};

export const Evergreen = (): React.ReactNode => (
  <ThemeProvider theme="evergreen">
    <Stack orientation="vertical" spacing="space200">
      <Box>
        <Heading as="h2" variant="heading10">
          Evergreen Theme
        </Heading>
        <Heading as="h3" variant="heading20">
          Paragraph and Inputs
        </Heading>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Nisi porta lorem mollis aliquam ut porttitor leo. Hendrerit gravida rutrum quisque non. A arcu
          cursus vitae congue mauris rhoncus aenean vel elit. Tortor dignissim convallis aenean et tortor at risus.
          Vestibulum lorem sed risus ultricies. Tempor nec feugiat nisl pretium fusce id. Morbi tempus iaculis urna id
          volutpat lacus laoreet non curabitur. In ante metus dictum at. Sit amet risus nullam eget felis eget nunc
          lobortis.
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
          {'primary primary_icon secondary secondary_icon destructive destructive_icon destructive_link destructive_secondary link inverse reset'
            .split(' ')
            .filter((variant) => !variant.includes('icon'))
            .map((variant) => (
              <Button key={variant} variant={variant as ButtonProps['variant']} onClick={() => {}}>
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
          {'neutral warning error success new'.split(' ').map((variant) => {
            return (
              <Callout key={variant} variant={variant as CalloutProps['variant']}>
                <CalloutHeading>{variant} heading</CalloutHeading>
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
          {'error neutral warning'.split(' ').map((variant) => {
            return (
              <Alert key={variant} variant={variant as AlertProps['variant']}>
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
          {'30 40 50 60 70 80 90 100 110'.split(' ').map((size) => {
            return <Avatar key={size} size={`sizeIcon${size}` as AvatarProps['size']} name={size} />;
          })}
        </Stack>
      </Box>
      <Box>
        <Heading as="h3" variant="heading20">
          Disclosure
        </Heading>
        <Stack orientation="vertical" spacing="space70">
          {'10 20 30 40 50 60'.split(' ').map((size) => {
            return (
              <Disclosure key={size}>
                <DisclosureHeading as="h2" variant={`heading${size}` as DisclosureHeadingProps['variant']}>
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
