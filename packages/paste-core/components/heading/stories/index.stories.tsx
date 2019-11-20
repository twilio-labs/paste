import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {asTags, Heading, HeadingVariants} from '../src';

const headingVariantOptions = ['heading10', 'heading20', 'heading30', 'heading40', 'heading50', 'heading60'];

storiesOf('Components|Typography', module)
  .addDecorator(withKnobs)
  .add('Heading', () => {
    const asOptions = text('as', 'h2') as asTags;
    const headingVariantValue = select('variant', headingVariantOptions, 'heading20') as HeadingVariant;
    return (
      <Heading as={asOptions} variant={headingVariantValue}>
        I am a Very Large Heading
      </Heading>
    );
  });
