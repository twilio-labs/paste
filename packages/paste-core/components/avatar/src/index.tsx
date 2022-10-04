import * as React from 'react';
import * as PropTypes from 'prop-types';
import {isValidElementType} from 'react-is';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {isIconSizeTokenProp} from '@twilio-paste/style-props';
import {getComputedTokenNames, getInitialsFromName} from './utils';
import type {AvatarProps, AvatarContentProps, ColorVariants, AvatarVariants} from './types';

const DEFAULT_SIZE = 'sizeIcon70';

const AvatarContents: React.FC<AvatarContentProps> = ({name, size = DEFAULT_SIZE, src, icon: Icon}) => {
  const computedTokenNames = getComputedTokenNames(size);
  if (src != null) {
    return <Box as="img" alt={name} maxWidth="100%" src={src} size={size} title={name} />;
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
      fontWeight="fontWeightBold"
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

const colorVariants: Record<ColorVariants, BoxStyleProps> = {
  default: {
    backgroundColor: 'colorBackgroundUser',
    color: 'colorText',
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
    borderRadius: 'borderRadius20',
  },
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  (
    {name, children, size = DEFAULT_SIZE, element = 'AVATAR', src, icon, color = 'default', variant = 'user', ...props},
    ref
  ) => {
    if (name === undefined) {
      console.error('[Paste Avatar]: name prop is required');
    }

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        element={element}
        overflow="hidden"
        textAlign="center"
        flexShrink={0}
        ref={ref}
        size={size}
        {...colorVariants[color]}
        {...variants[variant]}
      >
        <AvatarContents name={name} size={size} icon={icon} src={src} />
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

export {Avatar};
