import { isRenderingOnServer } from '@twilio-paste/animation-library';
import { Box } from '@twilio-paste/box';
import { Heading } from '@twilio-paste/heading';
import { BoldIcon } from '@twilio-paste/icons/esm/BoldIcon';
import { CheckboxCheckIcon } from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import { CloseIcon } from '@twilio-paste/icons/esm/CloseIcon';
import { PauseIcon } from '@twilio-paste/icons/esm/PauseIcon';
import { PlayIcon } from '@twilio-paste/icons/esm/PlayIcon';
import { PlusIcon } from '@twilio-paste/icons/esm/PlusIcon';
import { ScreenReaderOnly } from '@twilio-paste/screen-reader-only';
import { Stack } from '@twilio-paste/stack';
import * as React from 'react';

import { Button } from '../src';
import type { ButtonSizes, ButtonVariants } from '../src/types';

const ButtonSizeOptions = [
  'default',
  'small',
  'icon',
  'icon_small',
  'reset',
  'rounded_small',
  'circle',
  'circle_small',
];

const AllSizeOptions: React.FC<React.PropsWithChildren<{ variant: ButtonVariants }>> = ({ variant }) => {
  const allButtons: React.ReactNode[] = [];

  ButtonSizeOptions.forEach((size, index) => {
    if (variant === 'reset' && size !== 'reset') return;
    const children =
      size === 'icon' || size === 'icon_small' || size === 'circle' || size === 'circle_small' ? (
        <PlusIcon title="Add item to cart" decorative={false} />
      ) : (
        variant
      );

    allButtons.push(
      <>
        <Box key={`variant-${variant}-${size}-horizontal`} padding="space30">
          <Stack orientation="horizontal" spacing="space40">
            <Button variant={variant as ButtonVariants} size={size as ButtonSizes}>
              {children}
            </Button>
            {size !== 'icon' &&
              size !== 'icon_small' &&
              size !== 'reset' &&
              size !== 'circle' &&
              size !== 'circle_small' && (
                <Button variant={variant as ButtonVariants} size={size as ButtonSizes}>
                  <PlusIcon title="Add item to cart" decorative={false} />
                  {children}
                </Button>
              )}
            {size !== 'icon' &&
              size !== 'icon_small' &&
              size !== 'reset' &&
              size !== 'circle' &&
              size !== 'circle_small' && (
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
        {size !== 'icon' &&
          size !== 'icon_small' &&
          size !== 'reset' &&
          size !== 'circle' &&
          size !== 'circle_small' && (
            <Box key={`variant-${variant}-${size}-vert-${index}`} marginBottom="space40" padding="space30">
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
      </>,
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
// This story is for VRT to ensure that non-visual elements don't add padding within the Button
export const NoExtraPaddingButton = (): React.ReactNode => (
  <Stack orientation="vertical" spacing="space50">
    <Button variant="primary">Adding a `ScreenReaderOnly` should not give me extra padding</Button>
    <Button variant="primary">
      Adding a `ScreenReaderOnly` should not give me extra padding
      <ScreenReaderOnly>I am the `ScreenReaderOnly`</ScreenReaderOnly>
    </Button>
  </Stack>
);

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
      <Button variant="reset" size="reset" backgroundColor="colorBackground">
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

const IconSizeOptions: React.FC<React.PropsWithChildren<{ variant: ButtonVariants }>> = ({ variant }) => {
  return (
    <Stack orientation="vertical" spacing="space60">
      <Box>
        <Heading as="h2" variant="heading40">
          Using size=&quot;reset&quot;
        </Heading>
        <Stack orientation="horizontal" spacing="space60">
          <Button variant={variant} size="reset">
            <CloseIcon decorative={false} title="close" />
          </Button>
          <Button variant={variant} size="reset" loading>
            <CloseIcon decorative={false} title="close" />
          </Button>
          <Button variant={variant} size="reset" disabled>
            <CloseIcon decorative={false} title="close" />
          </Button>
        </Stack>
      </Box>
      <Box>
        <Heading as="h2" variant="heading40">
          Using size=&quot;icon_small&quot;
        </Heading>
        <Stack orientation="horizontal" spacing="space60">
          <Button variant={variant} size="icon_small">
            <CloseIcon decorative={false} title="close" />
          </Button>
          <Button variant={variant} size="icon_small" loading>
            <CloseIcon decorative={false} title="close" />
          </Button>
          <Button variant={variant} size="icon_small" disabled>
            <CloseIcon decorative={false} title="close" />
          </Button>
        </Stack>
      </Box>
      <Box>
        <Heading as="h2" variant="heading40">
          Using size=&quot;icon&quot;
        </Heading>
        <Stack orientation="horizontal" spacing="space60">
          <Button variant={variant} size="icon">
            <CloseIcon decorative={false} title="close" />
          </Button>
          <Button variant={variant} size="icon" loading>
            <CloseIcon decorative={false} title="close" />
          </Button>
          <Button variant={variant} size="icon" disabled>
            <CloseIcon decorative={false} title="close" />
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export const PrimaryIconButton = (): React.ReactNode => <IconSizeOptions variant="primary_icon" />;
export const SecondaryIconButton = (): React.ReactNode => <IconSizeOptions variant="secondary_icon" />;
export const DestructiveIconButton = (): React.ReactNode => <IconSizeOptions variant="destructive_icon" />;

interface ToggleButtonProps {
  defaultPressed?: boolean;
  variant?: 'secondary' | 'secondary_icon' | 'destructive_secondary';
  size?: 'icon' | 'circle';
  disabled?: boolean;
  icons: {
    default: React.ReactNode;
    pressed?: React.ReactNode;
  };
}

const ToggleButton: React.FC<React.PropsWithChildren<ToggleButtonProps>> = ({
  defaultPressed = false,
  variant = 'secondary',
  children,
  size,
  icons,
  disabled,
}) => {
  const [pressed, setPressed] = React.useState<boolean>(defaultPressed);

  let computedIcon = icons.default;
  if (pressed && icons.pressed) computedIcon = icons.pressed;

  return (
    <Button variant={variant} size={size} pressed={pressed} onClick={() => setPressed(!pressed)} disabled={disabled}>
      {computedIcon}
      {children}
    </Button>
  );
};

export const ToggleButtons = (): React.ReactNode => {
  const followIcons = {
    default: <PlusIcon decorative />,
    pressed: <CheckboxCheckIcon decorative />,
  };

  const boldIcons = {
    default: <BoldIcon decorative={false} title="Bold" />,
  };

  const pauseIcons = {
    default: <PauseIcon decorative />,
    pressed: <PlayIcon decorative />,
  };

  return (
    <Box display="flex" flexDirection="column" rowGap="space50">
      <Box display="flex" flexDirection="row" columnGap="space50">
        <ToggleButton icons={followIcons}>Follow</ToggleButton>
        <ToggleButton variant="secondary_icon" size="icon" icons={boldIcons} />
        <ToggleButton size="circle" icons={pauseIcons}>
          <ScreenReaderOnly>Pause</ScreenReaderOnly>
        </ToggleButton>
        <ToggleButton variant="secondary" size="icon" icons={boldIcons} />
        <ToggleButton variant="destructive_secondary" size="icon" icons={boldIcons} />
      </Box>
      <Box display="flex" flexDirection="row" columnGap="space50">
        <ToggleButton defaultPressed={true} icons={followIcons}>
          Follow
        </ToggleButton>
        <ToggleButton defaultPressed={true} variant="secondary_icon" size="icon" icons={boldIcons} />
        <ToggleButton defaultPressed={true} size="circle" icons={pauseIcons}>
          <ScreenReaderOnly>Pause</ScreenReaderOnly>
        </ToggleButton>
        <ToggleButton defaultPressed={true} variant="secondary" size="icon" icons={boldIcons} />
        <ToggleButton defaultPressed={true} variant="destructive_secondary" size="icon" icons={boldIcons} />
      </Box>
      <Box display="flex" flexDirection="row" columnGap="space50">
        <ToggleButton icons={followIcons} disabled>
          Follow
        </ToggleButton>
        <ToggleButton variant="secondary_icon" size="icon" icons={boldIcons} disabled />
        <ToggleButton size="circle" icons={pauseIcons} disabled>
          <ScreenReaderOnly>Pause</ScreenReaderOnly>
        </ToggleButton>
        <ToggleButton variant="secondary" size="icon" icons={boldIcons} disabled />
        <ToggleButton variant="destructive_secondary" size="icon" icons={boldIcons} disabled />
      </Box>
      <Box display="flex" flexDirection="row" columnGap="space50">
        <ToggleButton defaultPressed={true} icons={followIcons} disabled>
          Follow
        </ToggleButton>
        <ToggleButton defaultPressed={true} variant="secondary_icon" size="icon" icons={boldIcons} disabled />
        <ToggleButton defaultPressed={true} size="circle" icons={pauseIcons} disabled>
          <ScreenReaderOnly>Pause</ScreenReaderOnly>
        </ToggleButton>
        <ToggleButton defaultPressed={true} variant="secondary" size="icon" icons={boldIcons} disabled />
        <ToggleButton defaultPressed={true} variant="destructive_secondary" size="icon" icons={boldIcons} disabled />
      </Box>
    </Box>
  );
};

export const I18nButtons = (): React.ReactNode => {
  return (
    <>
      <Box padding="space30">
        <Button as="a" href="https://twilio.com" variant="primary" i18nExternalLinkLabel="(página externa)">
          Ir a página externa
        </Button>
      </Box>
    </>
  );
};

I18nButtons.storyName = 'i18n Button';
