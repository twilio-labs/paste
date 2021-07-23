import * as React from 'react';
import {Paragraph} from '@twilio-paste/paragraph';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Paragraph',
  component: Paragraph,
};

export const Default = (): React.ReactNode => {
  return (
    <>
      <Paragraph>I am paragraph text.</Paragraph>
      <Paragraph>
        Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot chicken
        bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
      </Paragraph>
      <Paragraph marginBottom="space0">
        Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
        croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
        intelligentsia. Literally heirloom blue bottle etsy.
      </Paragraph>
    </>
  );
};
