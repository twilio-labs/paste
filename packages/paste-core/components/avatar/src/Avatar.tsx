import * as React from 'react';
import PropTypes from 'prop-types';
import {isValidElementType} from 'react-is';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {isIconSizeTokenProp} from '@twilio-paste/style-props';

import {getComputedTokenNames, getInitialsFromName} from './utils';
import type {AvatarProps, AvatarContentProps, ColorVariants, AvatarVariants} from './types';
import {AvatarGroupContext} from './AvatarGroup';

const DEFAULT_SIZE = 'sizeIcon70';

const AvatarContents: React.FC<React.PropsWithChildren<AvatarContentProps>> = ({
  name,
  size = DEFAULT_SIZE,
  src,
  icon: Icon,
}) => {
  const {size: groupSize} = React.useContext(AvatarGroupContext);
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

const colorVariants: Record<ColorVariants, BoxStyleProps> = {
  default: {
    backgroundColor: 'colorBackgroundUser',
    color: 'colorTextUser',
  },
  decorative10: {
    backgroundColor: 'colorBackgroundDecorative10Weakest',
    color: 'colorTextDecorative10',
  },
  decorative20: {
    backgroundColor: 'colorBackgroundDecorative20Weakest',
    color: 'colorTextDecorative20',
  },
  decorative30: {
    backgroundColor: 'colorBackgroundDecorative30Weakest',
    color: 'colorTextDecorative30',
  },
  decorative40: {
    backgroundColor: 'colorBackgroundDecorative40Weakest',
    color: 'colorTextDecorative40',
  },
};

const variants: Record<AvatarVariants, BoxStyleProps> = {
  user: {
    borderRadius: 'borderRadiusCircle',
  },
  entity: {
    borderRadius: 'borderRadius30',
  },
};

const shadowVariants: Record<ColorVariants, BoxStyleProps> = {
  default: {
    boxShadow: 'shadowBorderUser',
  },
  decorative10: {
    boxShadow: 'shadowBorderDecorative10Weaker',
  },
  decorative20: {
    boxShadow: 'shadowBorderDecorative20Weaker',
  },
  decorative30: {
    boxShadow: 'shadowBorderDecorative30Weaker',
  },
  decorative40: {
    boxShadow: 'shadowBorderDecorative40Weaker',
  },
};

export const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({name, size = DEFAULT_SIZE, element = 'AVATAR', src, icon, color = 'default', variant = 'user', ...props}, ref) => {
    if (name === undefined) {
      // eslint-disable-next-line no-console
      console.error('[Paste Avatar]: name prop is required');
    }
    const {variant: groupVariant, size: groupSize} = React.useContext(AvatarGroupContext);

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
        {...(src ? {boxShadow: 'shadowBorderWeaker'} : shadowVariants[color])}
        {...colorVariants[color]}
        {...variants[groupVariant || variant]}
        // when its an image the background should be transparent, for when you are using transparent images
        {...(src && {backgroundColor: 'transparent'})}
      >
        <AvatarContents name={name} size={groupSize || size} icon={icon} src={src} />
      </Box>
    );
  }
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  size: isIconSizeTokenProp,
  name: PropTypes.string.isRequired,
  element: PropTypes.string,
  src: PropTypes.string,
  color: PropTypes.oneOf([
    'default',
    'decorative10',
    'decorative20',
    'decorative30',
    'decorative40',
  ] as ColorVariants[]),
  variant: PropTypes.oneOf(['user', 'entity'] as AvatarVariants[]),
  icon: (props) => {
    if (typeof props.icon !== 'function') new Error('[Paste Avatar]: icon prop must be a Paste Icon');
    return null;
  },
};
