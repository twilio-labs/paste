import { Anchor } from '@twilio-paste/anchor';
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';
import { Separator } from '@twilio-paste/separator';
import * as React from 'react';

import { DisclosurePrimitive, DisclosurePrimitiveContent, useDisclosurePrimitiveState } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Primitives/Disclosure',
  component: DisclosurePrimitive,
  subcomponents: { DisclosurePrimitiveContent },
};

export const BasicExample = (): JSX.Element => {
  const disclosure = useDisclosurePrimitiveState();
  return (
    <>
      <Heading as="h3" variant="heading30">
        Basic Example{' '}
        <sup>
          <Anchor href="https://reakit.io/docs/disclosure/#usage">1</Anchor>
        </sup>
      </Heading>
      <Separator orientation="horizontal" />

      <DisclosurePrimitive {...disclosure}>Toggle</DisclosurePrimitive>
      <DisclosurePrimitiveContent {...disclosure}>Content</DisclosurePrimitiveContent>
    </>
  );
};

export const ConditionalRendering = (): JSX.Element => {
  const disclosure = useDisclosurePrimitiveState();
  return (
    <>
      <Heading as="h3" variant="heading30">
        Conditionally rendering{' '}
        <sup>
          <Anchor href="https://reakit.io/docs/disclosure/#conditionally-rendering">1</Anchor>
        </sup>
      </Heading>
      <Paragraph>
        You shouldn&apos;t conditionally render the DisclosureContent component as this will make some Reakit features
        not work. Instead, you can use render props and conditionally render the underneath element:
      </Paragraph>
      <Separator orientation="horizontal" />

      <DisclosurePrimitive {...disclosure}>Toggle</DisclosurePrimitive>
      {/* instead of {disclosure.visible && <DisclosureContent {...disclosure}>Content</DisclosureContent>} */}
      <DisclosurePrimitiveContent {...disclosure}>
        {(props) => disclosure.visible && <div {...props}>Content</div>}
      </DisclosurePrimitiveContent>
    </>
  );
};

export const MultipleComponents = (): JSX.Element => {
  const disclosure1 = useDisclosurePrimitiveState();
  const disclosure2 = useDisclosurePrimitiveState();

  return (
    <>
      <Heading as="h3" variant="heading30">
        Multiple components{' '}
        <sup>
          <Anchor href="https://reakit.io/docs/disclosure/#multiple-components">1</Anchor>
        </sup>
      </Heading>
      <Paragraph>
        Each DisclosureContent component should have its own useDisclosureState. This is also true for derivative
        modules like Dialog, Popover, Menu, Tooltip etc.
      </Paragraph>
      <Paragraph>
        If you want to have only one Disclosure element controling multiple DisclosureContent components, you can use
        render props to apply the same state to different Disclosures that will result in a single element.
      </Paragraph>
      <Separator orientation="horizontal" />

      <DisclosurePrimitive {...disclosure1}>
        {(props) => (
          <DisclosurePrimitive {...props} {...disclosure2}>
            Toggle All
          </DisclosurePrimitive>
        )}
      </DisclosurePrimitive>
      <DisclosurePrimitiveContent {...disclosure1}>Content 1</DisclosurePrimitiveContent>
      <DisclosurePrimitiveContent {...disclosure2}>Content 2</DisclosurePrimitiveContent>
    </>
  );
};
