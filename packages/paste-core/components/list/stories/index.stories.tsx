import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {Paragraph} from '@twilio-paste/paragraph';
import {CustomizationProvider} from '@twilio-paste/theme';
import {Stack} from '@twilio-paste/stack';
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
  })
  .add('Customization', () => {
    return (
      <CustomizationProvider
        elements={{
          UNORDERED_LIST: {
            backgroundColor: 'red',
            padding: 'space20',
          },
          ORDERED_LIST: {
            backgroundColor: 'blue',
            padding: 'space30',
          },
          LISTITEM: {
            backgroundColor: 'colorBackgroundSuccess',
          },
          CUSTOM_ORDEREDLIST: {
            backgroundColor: 'hotpink',
          },
          CUSTOM_UNORDEREDLIST: {
            backgroundColor: 'purple',
          },
          CUSTOM_LISTITEM: {
            color: 'red',
          },
          CUSTOM_UNORDERD_LISTITEM: {
            color: 'green',
          },
        }}
      >
        <Stack orientation="vertical" spacing="space40">
          <OrderedList>
            <ListItem>
              Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
              chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
            </ListItem>
          </OrderedList>
          <UnorderedList>
            <ListItem>
              Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
              chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
            </ListItem>
          </UnorderedList>
          <OrderedList element="CUSTOM_ORDEREDLIST">
            <ListItem element="CUSTOM_LISTITEM">
              Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
              chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
            </ListItem>
          </OrderedList>
          <UnorderedList element="CUSTOM_UNORDEREDLIST">
            <ListItem element="CUSTOM_UNORDERD_LISTITEM">
              Kale chips distillery authentic, portland etsy cloud bread vinyl gentrify drinking vinegar viral meh hot
              chicken bitters fashion axe palo santo. Chillwave fixie sustainable <i>helvetica</i> etsy.
            </ListItem>
          </UnorderedList>
        </Stack>
      </CustomizationProvider>
    );
  });
