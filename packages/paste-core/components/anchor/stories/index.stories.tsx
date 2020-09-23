import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, select, text} from '@storybook/addon-knobs';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Anchor} from '../src';
import {AnchorTargets, AnchorTabIndexes} from '../src/types';

const AnchorTargetOptions = ['_self', '_blank', '_parent', '_top'];
const AnchorTabIndexOptions = [0, -1];

storiesOf('Components|Anchor', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const tabIndexOptions = select('tabIndex', AnchorTabIndexOptions, 0) as AnchorTabIndexes;
    const targetOptions = select('target', AnchorTargetOptions, '_self') as AnchorTargets;
    return (
      <Anchor
        href={text('href', '/app')}
        onBlur={action('handleBlur')}
        onClick={action('handleClick')}
        onFocus={action('handleFocus')}
        rel={text('rel', '')}
        tabIndex={tabIndexOptions}
        target={targetOptions}
      >
        {text('children', 'I am a text link')}
      </Anchor>
    );
  })
  .add('Inverse', () => {
    const tabIndexOptions = select('tabIndex', AnchorTabIndexOptions, 0) as AnchorTabIndexes;
    const targetOptions = select('target', AnchorTargetOptions, '_self') as AnchorTargets;
    return (
      <Box backgroundColor="colorBackgroundBodyInverse" padding="space60">
        <Anchor
          href={text('href', '/app')}
          onBlur={action('handleBlur')}
          onClick={action('handleClick')}
          onFocus={action('handleFocus')}
          rel={text('rel', '')}
          tabIndex={tabIndexOptions}
          target={targetOptions}
          variant="inverse"
        >
          {text('children', 'I am an inverse text link')}
        </Anchor>
      </Box>
    );
  })
  .add('showExternal prop', () => {
    return (
      <>
        <Anchor href="https://paste.twilio.design" showExternal>
          I&rsquo;m an external link
        </Anchor>
        <Heading as="h2" variant="heading10">
          <Anchor href="https://paste.twilio.design" showExternal>
            I&rsquo;m an external link inside a heading
          </Anchor>
        </Heading>
      </>
    );
  });
