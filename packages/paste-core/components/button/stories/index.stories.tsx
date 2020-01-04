import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {Button} from '../src';
import {ButtonVariants, ButtonSizes, ButtonTabIndexes} from '../src/types';

const ButtonSizeOptions = ['', 'default', 'small', 'icon', 'reset'];
const ButtonVariantOptions = ['primary', 'secondary', 'destructive', 'destructive_link', 'link', 'reset'];
const ButtonTabIndexOptions = [0, -1];

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('Text only', () => {
    const tabIndexOptions = select('tabIndex', ButtonTabIndexOptions, 0) as ButtonTabIndexes;
    return (
      <Button
        variant={select('variant', ButtonVariantOptions, 'primary') as ButtonVariants}
        size={select('size', ButtonSizeOptions, 'default') as ButtonSizes}
        fullWidth={boolean('fullWidth', false)}
        autoFocus={boolean('autoFocus', false)}
        disabled={boolean('disabled', false)}
        loading={boolean('loading', false)}
        as={text('as', 'button')}
        href={text('href', '')}
        tabIndex={tabIndexOptions}
        onClick={action('handleClick')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      >
        {text('children', 'Submit')}
      </Button>
    );
  })
  .add('Icon and Text', () => {
    const tabIndexOptions = select('tabIndex', ButtonTabIndexOptions, 0) as ButtonTabIndexes;
    return (
      <Button
        variant={select('variant', ButtonVariantOptions, 'primary') as ButtonVariants}
        size={select('size', ButtonSizeOptions, 'default') as ButtonSizes}
        fullWidth={boolean('fullWidth', false)}
        autoFocus={boolean('autoFocus', false)}
        disabled={boolean('disabled', false)}
        loading={boolean('loading', false)}
        as={text('as', 'button')}
        href={text('href', '')}
        tabIndex={tabIndexOptions}
        onClick={action('handleClick')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      >
        <PlusIcon decorative />
        <span>Activate</span>
      </Button>
    );
  })
  .add('Icon only', () => {
    const tabIndexOptions = select('tabIndex', ButtonTabIndexOptions, 0) as ButtonTabIndexes;
    return (
      <Button
        variant={select('variant', ButtonVariantOptions, 'primary') as ButtonVariants}
        size={select('size', ButtonSizeOptions, 'icon') as ButtonSizes}
        autoFocus={boolean('autoFocus', false)}
        disabled={boolean('disabled', false)}
        loading={boolean('loading', false)}
        as={text('as', 'button')}
        href={text('href', '')}
        tabIndex={tabIndexOptions}
        onClick={action('handleClick')}
        onFocus={action('handleFocus')}
        onBlur={action('handleBlur')}
      >
        <PlusIcon decorative={false} title="Add to cart" />
      </Button>
    );
  })
  .add('All buttons', () => {
    const size = select('size', ButtonSizeOptions, '') as ButtonSizes;
    return (
      <React.Fragment>
        <section>
          <Button variant="primary" size={size}>
            Primary
          </Button>
          <Button variant="primary" size={size} disabled>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="primary" size="small">
            Primary
          </Button>
          <Button variant="primary" size="small" disabled>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="primary" size="icon">
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
          <Button variant="primary" size="icon" disabled>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="primary" size="reset">
            Primary
          </Button>
          <Button variant="primary" size="reset" disabled>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size={size}>
            Secondary
          </Button>
          <Button variant="secondary" size={size} disabled>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="small">
            Secondary
          </Button>
          <Button variant="secondary" size="small" disabled>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="icon">
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
          <Button variant="secondary" size="icon" disabled>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="reset">
            Secondary
          </Button>
          <Button variant="secondary" size="reset" disabled>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size={size}>
            Destructive
          </Button>
          <Button variant="destructive" size={size} disabled>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="small">
            Destructive
          </Button>
          <Button variant="destructive" size="small" disabled>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="icon">
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
          <Button variant="destructive" size="icon" disabled>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="reset">
            Destructive
          </Button>
          <Button variant="destructive" size="reset" disabled>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size={size}>
            Link
          </Button>
          <Button variant="link" size={size} disabled>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="small">
            Link
          </Button>
          <Button variant="link" size="small" disabled>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="icon">
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
          <Button variant="link" size="icon" disabled>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="reset">
            Link
          </Button>
          <Button variant="link" size="reset" disabled>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size={size}>
            Destructive Link
          </Button>
          <Button variant="destructive_link" size={size} disabled>
            Destructive Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="small">
            Destructive Link
          </Button>
          <Button variant="destructive_link" size="small" disabled>
            Destructive Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="icon">
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
          <Button variant="destructive_link" size="icon" disabled>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="reset">
            Destructive Link
          </Button>
          <Button variant="destructive_link" size="reset" disabled>
            Destructive Link
          </Button>
        </section>
        <section>
          <Button variant="reset" size="reset">
            Reset
          </Button>
          <Button variant="reset" size="reset" disabled>
            Reset
          </Button>
        </section>
      </React.Fragment>
    );
  })
  .add('All loading buttons', () => {
    const size = select('size', ButtonSizeOptions, '') as ButtonSizes;
    return (
      <React.Fragment>
        <section>
          <Button variant="primary" size={size} loading>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="primary" size="small" loading>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="primary" size="icon" loading>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="primary" size="reset" loading>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size={size} loading>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="small" loading>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="icon" loading>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="reset" loading>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size={size} loading>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="small" loading>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="icon" loading>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="reset" loading>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size={size} loading>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="small" loading>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="icon" loading>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="reset" loading>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size={size} loading>
            Destructive Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="small" loading>
            Destructive Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="icon" loading>
            <PlusIcon decorative={false} title="Add to cart" />
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="reset" loading>
            Destructive Link
          </Button>
        </section>
        <section>
          <Button variant="reset" size="reset" loading>
            Reset
          </Button>
        </section>
      </React.Fragment>
    );
  });
