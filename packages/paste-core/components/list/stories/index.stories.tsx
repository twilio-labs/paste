import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Paragraph} from '@twilio-paste/paragraph';
import {OrderedList, UnorderedList, ListItem} from '../src';

storiesOf('Components|List', module)
  .addDecorator(withKnobs)
  .add('Ordered List', () => {
    return (
      <>
        <OrderedList data-test="something" aria-label="ordered list">
          <ListItem>
            Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
            chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
          </ListItem>
          <ListItem>
            Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
            croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
            intelligentsia. Literally heirloom blue bottle etsy.
          </ListItem>
        </OrderedList>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi nemo doloremque qui a vitae officiis laborum
          dolor. Pariatur obcaecati sequi minus nobis eos mollitia velit dolor, quis amet accusamus officiis?
        </Paragraph>
        <OrderedList aria-label="styled">
          <ListItem>
            Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
            chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
          </ListItem>
          <ListItem>
            Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
            croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
            intelligentsia. Literally heirloom blue bottle etsy.
          </ListItem>
        </OrderedList>
      </>
    );
  })
  .add('Unordered List', () => {
    return (
      <>
        <UnorderedList>
          <ListItem data-test="test-hook" title="some title">
            Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
            chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
          </ListItem>
          <ListItem>
            Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
            croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
            intelligentsia. Literally heirloom blue bottle etsy.
          </ListItem>
        </UnorderedList>
        <UnorderedList>
          <ListItem>
            Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
            chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
          </ListItem>
          <ListItem>
            Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
            croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
            intelligentsia. Literally heirloom blue bottle etsy.
          </ListItem>
        </UnorderedList>
      </>
    );
  })
  .add('Nested Unordered List', () => {
    return (
      <>
        <UnorderedList>
          <ListItem data-test="test-hook-nested" title="nested list title">
            Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
            chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
            <UnorderedList marginBottom="space0">
              <ListItem>
                Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
                chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
              </ListItem>
              <ListItem>
                Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s
                la croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
                intelligentsia. Literally heirloom blue bottle etsy.
              </ListItem>
            </UnorderedList>
          </ListItem>
          <ListItem>
            Prism whatever ethical, gochujang <strong>edison bulb</strong> put a bird on it kitsch. Pop-up 90&apos;s la
            croix tumeric, palo santo chia try-hard direct trade tote bag roof party scenester kitsch stumptown
            intelligentsia. Literally heirloom blue bottle etsy.
          </ListItem>
          <ListItem>
            Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
            chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
          </ListItem>
        </UnorderedList>
      </>
    );
  });
