import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {isIconSizeTokenProp} from '@twilio-paste/style-props';
import {getComputedTokenNames, getInitialsFromName} from './utils';
import type {AvatarProps} from './types';

const DEFAULT_SIZE = 'sizeIcon70';

const AvatarContents: React.FC<AvatarProps> = ({name, size = DEFAULT_SIZE, src, icon: Icon}) => {
  const computedTokenNames = getComputedTokenNames(size);
  if (Icon != null) {
    if (typeof Icon !== 'function' || typeof Icon.displayName !== 'string' || !Icon.displayName.includes('Icon')) {
      throw new Error('[Paste Avatar]: icon prop expected to be a Paste icon only.');
    }
    return (
      <Box maxWidth="100%" size={size} display="flex" alignItems="center" justifyContent="center">
        <Icon decorative={false} title={name} size={computedTokenNames.iconSize} color="colorText" />
      </Box>
    );
  }
  if (src != null) {
    return <Box as="img" alt={name} maxWidth="100%" src={src} size={size} title={name} />;
  }
  return (
    <Text
      as="abbr"
      display="block"
      fontSize={computedTokenNames.fontSize}
      fontWeight="fontWeightBold"
      lineHeight={computedTokenNames.lineHeight}
      textAlign="center"
      textDecoration="none"
      title={name}
    >
      {getInitialsFromName(name)}
    </Text>
  );
};

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({name, children, size = DEFAULT_SIZE, src, icon, ...props}, ref) => {
    if (name === undefined) {
      console.error('[Paste Avatar]: name prop is required');
    }
    if (src && icon) {
      console.error('[Paste Avatar]: do not set both src and icon on Avatar');
      return null;
    }
    console.log(src, icon);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        as="div"
        backgroundColor="colorBackgroundUser"
        borderRadius="borderRadiusCircle"
        overflow="hidden"
        ref={ref}
        size={size}
      >
        {src ? (
          <AvatarContents name={name} size={size} src={src} {...props} />
        ) : (
          <AvatarContents name={name} size={size} icon={icon} {...props} />
        )}
      </Box>
    );
  }
);

Avatar.displayName = 'Avatar';

Avatar.propTypes = {
  size: isIconSizeTokenProp,
  name: PropTypes.string.isRequired,
  src: function (props) {
    if (props.src && props.icon) new Error('[Paste Avatar]: do not set both src and icon on Avatar');
    if (typeof props.src !== 'string') new Error('[Paste Avatar]: src prop must be a string');
    return props.src;
  },
  icon: function (props) {
    if (props.src && props.icon) new Error('[Paste Avatar]: do not set both src and icon on Avatar');
    if (typeof props.icon !== 'function') new Error('[Paste Avatar]: icon prop must be a Paste Icon');
    return props.icon;
  },
};

export {Avatar};
