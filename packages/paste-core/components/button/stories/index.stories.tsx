import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from '@storybook/addon-knobs';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {isRenderingOnServer} from '@twilio-paste/animation-library';
import {Button} from '../src';
import {ButtonVariants, ButtonSizes} from '../src/types';

const ButtonSizeOptions = ['default', 'small', 'icon', 'reset'];

const AllSizeOptions: React.FC<{variant: ButtonVariants}> = ({variant}) => {
  const allButtons = [];

  ButtonSizeOptions.forEach(size => {
    if (variant === 'reset' && size !== 'reset') return;
    const children = size === 'icon' ? <PlusIcon title="Add item to cart" decorative={false} /> : variant;

    allButtons.push(
      <>
        <Box key={`variant-${variant}-${size}`} padding="space30">
          <Stack orientation="horizontal" spacing="space40">
            <Button variant={variant as ButtonVariants} size={size as ButtonSizes}>
              {children}
            </Button>
            {size !== 'icon' && size !== 'reset' && (
              <Button variant={variant as ButtonVariants} size={size as ButtonSizes}>
                <PlusIcon title="Add item to cart" decorative={false} />
                {children}
              </Button>
            )}
            {size !== 'icon' && size !== 'reset' && (
              <Button variant={variant as ButtonVariants} size={size as ButtonSizes}>
                {children}
                <PlusIcon title="Add item to cart" decorative={false} />
              </Button>
            )}

            <Button variant={variant as ButtonVariants} size={size as ButtonSizes} loading={!isRenderingOnServer}>
              {children}
            </Button>
            <Button variant={variant as ButtonVariants} size={size as ButtonSizes} disabled>
              {children}
            </Button>
          </Stack>
        </Box>
        {size !== 'icon' && size !== 'reset' && (
          <Box key={`variant-${variant}-${size}`} marginBottom="space40" padding="space30">
            <Stack orientation="vertical" spacing="space40">
              <Button variant={variant as ButtonVariants} size={size as ButtonSizes} fullWidth>
                {children}
              </Button>
              <Button variant={variant as ButtonVariants} size={size as ButtonSizes} fullWidth>
                <PlusIcon title="Add item to cart" decorative={false} />
                {children}
              </Button>
              <Button variant={variant as ButtonVariants} size={size as ButtonSizes} fullWidth>
                {children}
                <PlusIcon title="Add item to cart" decorative={false} />
              </Button>
              <Button
                variant={variant as ButtonVariants}
                size={size as ButtonSizes}
                fullWidth
                loading={!isRenderingOnServer}
              >
                {children}
              </Button>
              <Button variant={variant as ButtonVariants} size={size as ButtonSizes} fullWidth disabled>
                {children}
              </Button>
            </Stack>
          </Box>
        )}
      </>
    );
  });

  return (
    <Box
      backgroundColor={
        variant === 'inverse' || variant === 'inverse_link' ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody'
      }
    >
      {allButtons}
    </Box>
  );
};

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('Primary Button', () => <AllSizeOptions variant="primary" />)
  .add('Secondary Button', () => <AllSizeOptions variant="secondary" />)
  .add('Inverse Button', () => <AllSizeOptions variant="inverse" />)
  .add('Destructive Button', () => <AllSizeOptions variant="destructive" />)
  .add('Destructive Secondary Button', () => <AllSizeOptions variant="destructive_secondary" />)
  .add('Destructive Link Button', () => <AllSizeOptions variant="destructive_link" />)
  .add('Link Button', () => <AllSizeOptions variant="link" />)
  .add('Inverse Link Button', () => <AllSizeOptions variant="inverse_link" />)
  .add('Reset', () => (
    <>
      <AllSizeOptions variant="reset" />
      <Box padding="space30">
        <Button variant="reset" size="reset" fullWidth>
          reset
        </Button>
      </Box>
      <Heading variant="heading10" as="h1">
        <Button variant="reset" size="reset">
          Example using reset button in composition
        </Button>
      </Heading>
      <Heading variant="heading20" as="h1">
        <Button variant="reset" size="reset">
          Example using reset button in composition
        </Button>
      </Heading>
      <Heading variant="heading20" as="h1">
        <Button variant="reset" size="reset" disabled>
          Example using reset button in composition
        </Button>
      </Heading>
    </>
  ));
