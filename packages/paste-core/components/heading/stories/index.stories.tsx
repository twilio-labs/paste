import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs, text, select} from '@storybook/addon-knobs';
import {asTags, Heading, HeadingStyle} from '../src';

const headingStyleOptions = [
  'headingStyle10',
  'headingStyle20',
  'headingStyle30',
  'headingStyle40',
  'headingStyle50',
  'headingStyle60',
];

storiesOf('Components|Typography', module)
  .addDecorator(withKnobs)
  .add('Heading', () => {
    const asOptions = text('as', 'h2') as asTags;
    const headingStyleValue = select('variant', headingStyleOptions, 'headingStyle50') as HeadingStyle;
    return (
      <Heading as={asOptions} variant={headingStyleValue}>
        I am a Very Large Heading
      </Heading>
    );
  });
