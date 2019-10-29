import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Paragraph} from '../src';

storiesOf('Components|Typography', module)
  .addDecorator(withKnobs)
  .add('Paragraph', () => {
    return (
      <>
        <Paragraph>I am paragraph text.</Paragraph>
        <Paragraph>
          Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
          chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
        </Paragraph>
        <Paragraph>
          Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
          croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
          intelligentsia. Literally heirloom blue bottle etsy.
        </Paragraph>
      </>
    );
  });
