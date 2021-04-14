import * as React from 'react';
import {PlusIcon} from '@twilio-paste/icons/esm/PlusIcon';
import {Box} from '@twilio-paste/box';
import {Heading} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {isRenderingOnServer} from '@twilio-paste/animation-library';
import {Button} from '../src';
import {ButtonVariants, ButtonSizes} from '../src/types';

const ButtonSizeOptions = ['default', 'small', 'icon', 'icon_small', 'reset'];

const AllSizeOptions: React.FC<{variant: ButtonVariants}> = ({variant}) => {
  const allButtons: React.ReactNode[] = [];

  ButtonSizeOptions.forEach((size) => {
    if (variant === 'reset' && size !== 'reset') return;
    const children =
      size === 'icon' || size === 'icon_small' ? <PlusIcon title="Add item to cart" decorative={false} /> : variant;

    allButtons.push(
      <>
        <Box key={`variant-${variant}-${size}`} padding="space30">
          <Stack orientation="horizontal" spacing="space40">
            <Button variant={variant as ButtonVariants} size={size as ButtonSizes}>
              {children}
            </Button>
            {size !== 'icon' && size !== 'icon_small' && size !== 'reset' && (
              <Button variant={variant as ButtonVariants} size={size as ButtonSizes}>
                <PlusIcon title="Add item to cart" decorative={false} />
                {children}
              </Button>
            )}
            {size !== 'icon' && size !== 'icon_small' && size !== 'reset' && (
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
        {size !== 'icon' && size !== 'icon_small' && size !== 'reset' && (
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

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Button',
  component: Button,
};

export const PrimaryButton = (): React.ReactNode => <AllSizeOptions variant="primary" />;
export const SecondaryButton = (): React.ReactNode => <AllSizeOptions variant="secondary" />;
export const InverseButton = (): React.ReactNode => <AllSizeOptions variant="inverse" />;
export const DestructiveButton = (): React.ReactNode => <AllSizeOptions variant="destructive" />;
export const DestructiveSecondaryButton = (): React.ReactNode => <AllSizeOptions variant="destructive_secondary" />;
export const DestructiveLinkButton = (): React.ReactNode => <AllSizeOptions variant="destructive_link" />;
export const LinkButton = (): React.ReactNode => <AllSizeOptions variant="link" />;
export const InverseLinkButton = (): React.ReactNode => <AllSizeOptions variant="inverse_link" />;

export const Reset = (): React.ReactNode => (
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
);
export const ButtonAsAnchor = (): React.ReactNode => {
  return (
    <>
      <Box padding="space30">
        <Button as="a" href="https://twilio.com" variant="primary">
          Automatically adds external link icon
        </Button>
      </Box>
      <Box padding="space30">
        <Button as="a" href="/" variant="secondary">
          Automatically adds internal link icon
        </Button>
      </Box>
      <Box padding="space30">
        <Button as="a" href="https://twilio.com" variant="reset">
          Not added on reset variant
        </Button>
      </Box>

      <Box padding="space30">
        <Button as="a" href="https://twilio.com" variant="primary">
          Not added when children{' '}
          <em>
            <u>is not string type</u>
          </em>
        </Button>
      </Box>
    </>
  );
};
