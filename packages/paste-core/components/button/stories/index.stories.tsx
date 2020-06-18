import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {withKnobs, select, text, boolean} from '@storybook/addon-knobs';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {isRenderingOnServer} from '@twilio-paste/animation-library';
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
    return (
      <React.Fragment>
        <section>
          <Button variant="primary" size="default">
            Primary
          </Button>
          <Button variant="primary" size="default" loading={!isRenderingOnServer}>
            Primary
          </Button>
          <Button variant="primary" size="default" disabled>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="primary" size="small">
            Primary
          </Button>
          <Button variant="primary" size="small" loading={!isRenderingOnServer}>
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
          <Button variant="primary" size="icon" loading={!isRenderingOnServer}>
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
          <Button variant="primary" size="reset" loading={!isRenderingOnServer}>
            Primary
          </Button>
          <Button variant="primary" size="reset" disabled>
            Primary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="default">
            Secondary
          </Button>
          <Button variant="secondary" size="default" loading={!isRenderingOnServer}>
            Secondary
          </Button>
          <Button variant="secondary" size="default" disabled>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="secondary" size="small">
            Secondary
          </Button>
          <Button variant="secondary" size="small" loading={!isRenderingOnServer}>
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
          <Button variant="secondary" size="icon" loading={!isRenderingOnServer}>
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
          <Button variant="secondary" size="reset" loading={!isRenderingOnServer}>
            Secondary
          </Button>
          <Button variant="secondary" size="reset" disabled>
            Secondary
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="default">
            Destructive
          </Button>
          <Button variant="destructive" size="default" loading={!isRenderingOnServer}>
            Destructive
          </Button>
          <Button variant="destructive" size="default" disabled>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive" size="small">
            Destructive
          </Button>
          <Button variant="destructive" size="small" loading={!isRenderingOnServer}>
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
          <Button variant="destructive" size="icon" loading={!isRenderingOnServer}>
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
          <Button variant="destructive" size="reset" loading={!isRenderingOnServer}>
            Destructive
          </Button>
          <Button variant="destructive" size="reset" disabled>
            Destructive
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="default">
            Link
          </Button>
          <Button variant="link" size="default" loading={!isRenderingOnServer}>
            Link
          </Button>
          <Button variant="link" size="default" disabled>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="link" size="small">
            Link
          </Button>
          <Button variant="link" size="small" loading={!isRenderingOnServer}>
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
          <Button variant="link" size="icon" loading={!isRenderingOnServer}>
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
          <Button variant="link" size="reset" loading={!isRenderingOnServer}>
            Link
          </Button>
          <Button variant="link" size="reset" disabled>
            Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="default">
            Destructive Link
          </Button>
          <Button variant="destructive_link" size="default" loading={!isRenderingOnServer}>
            Destructive Link
          </Button>
          <Button variant="destructive_link" size="default" disabled>
            Destructive Link
          </Button>
        </section>
        <br />
        <section>
          <Button variant="destructive_link" size="small">
            Destructive Link
          </Button>
          <Button variant="destructive_link" size="small" loading={!isRenderingOnServer}>
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
          <Button variant="destructive_link" size="icon" loading={!isRenderingOnServer}>
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
          <Button variant="destructive_link" size="reset" loading={!isRenderingOnServer}>
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
          <Button variant="reset" size="reset" loading={!isRenderingOnServer}>
            Reset
          </Button>
          <Button variant="reset" size="reset" disabled>
            Reset
          </Button>
        </section>
      </React.Fragment>
    );
  });
