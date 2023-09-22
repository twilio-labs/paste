import { Box, safelySpreadBoxProps } from '@twilio-paste/box';
import type { BoxStyleProps } from '@twilio-paste/box';
import { Text } from '@twilio-paste/text';
import * as React from 'react';
import { isValidElementType } from 'react-is';

import { AvatarGroupContext } from './AvatarGroup';
import type { AvatarContentProps, AvatarProps, AvatarVariants, ColorVariants } from './types';
import { getComputedTokenNames, getInitialsFromName } from './utils';

const DEFAULT_SIZE = 'sizeIcon70';

const AvatarContents: React.FC<React.PropsWithChildren<AvatarContentProps>> = ({
  name,
  size = DEFAULT_SIZE,
  src,
  icon: Icon,
}) => {
  const { size: groupSize } = React.useContext(AvatarGroupContext);
  const computedTokenNames = getComputedTokenNames(groupSize || size);

  if (src != null) {
    return (
      <Box as="img" alt={name} maxWidth="100%" boxShadow="shadowBorderWeaker" src={src} size={size} title={name} />
    );
  }
  if (Icon != null) {
    if (!isValidElementType(Icon) || typeof Icon.displayName !== 'string' || !Icon.displayName.includes('Icon')) {
      throw new Error('[Paste Avatar]: icon prop expected to be a Paste icon only.');
    }
    return (
      <Box maxWidth="100%" size={size} display="flex" alignItems="center" justifyContent="center">
        <Icon decorative={false} title={name} size={computedTokenNames.iconSize} />
      </Box>
    );
  }
  return (
    <Text
      as="abbr"
      display="inline-block"
      fontSize={computedTokenNames.fontSize}
      fontWeight="fontWeightSemibold"
      lineHeight={computedTokenNames.lineHeight}
      verticalAlign="top"
      textDecoration="none"
      title={name}
      color="inherit"
    >
      {getInitialsFromName(name)}
    </Text>
  );
};

AvatarContents.displayName = 'AvatarContents';

const colorPropStyles: Record<ColorVariants, BoxStyleProps> = {
  default: {
    backgroundColor: 'colorBackgroundUser',
    boxShadow: 'shadowBorderUser',
    color: 'colorTextUser',
  },
  decorative10: {
    backgroundColor: 'colorBackgroundDecorative10Weakest',
    boxShadow: 'shadowBorderDecorative10Weaker',
    color: 'colorTextDecorative10',
  },
  decorative20: {
    backgroundColor: 'colorBackgroundDecorative20Weakest',
    boxShadow: 'shadowBorderDecorative20Weaker',
    color: 'colorTextDecorative20',
  },
  decorative30: {
    backgroundColor: 'colorBackgroundDecorative30Weakest',
    boxShadow: 'shadowBorderDecorative30Weaker',
    color: 'colorTextDecorative30',
  },
  decorative40: {
    backgroundColor: 'colorBackgroundDecorative40Weakest',
    boxShadow: 'shadowBorderDecorative40Weaker',
    color: 'colorTextDecorative40',
  },
};

const variantStyles: Record<AvatarVariants, BoxStyleProps> = {
  user: {
    borderRadius: 'borderRadiusCircle',
  },
  entity: {
    borderRadius: 'borderRadius30',
  },
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    { name, size = DEFAULT_SIZE, element = 'AVATAR', src, icon, color = 'default', variant = 'user', ...props },
    ref,
  ) => {
    if (name === undefined) {
      // eslint-disable-next-line no-console
      console.error('[Paste Avatar]: name prop is required');
    }
    const { variant: groupVariant, size: groupSize } = React.useContext(AvatarGroupContext);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        element={element}
        overflow="hidden"
        textAlign="center"
        flexShrink={0}
        ref={ref}
        size={groupSize || size}
        {...colorPropStyles[color]}
        {...variantStyles[groupVariant || variant]}
        // when its an image set specific styles that are unrelated to color or variants
        {...(src && { backgroundColor: 'colorBackgroundBody', boxShadow: 'shadowBorderWeaker' })}
      >
        <AvatarContents name={name} size={groupSize || size} icon={icon} src={src} />
      </Box>
    );
  },
);

Avatar.displayName = 'Avatar';
