import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {isIconSizeTokenProp} from '@twilio-paste/style-props';
import {getComputedTokenNames, getInitialsFromName} from './utils';
import type {AvatarProps} from './types';

//not currently passing '...props' to renderAvatarContents
//add to parameters if we want to safely pass props to Box
const renderAvatarContents = ({name, size, src, icon: Icon}: AvatarProps): React.ReactElement => {
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
  ({name, children, size = 'sizeIcon70', src, icon, ...props}, ref) => {
    if (name === undefined) {
      console.error('[Paste Avatar]: name prop is required');
    }

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
        {renderAvatarContents({name, size, src, icon, ...props})}
      </Box>
    );
  }
);

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  size: isIconSizeTokenProp,
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
  icon: PropTypes.func,
};

export {Avatar};
