import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {IconSize, isIconSizeTokenProp} from '@twilio-paste/style-props';
import {getComputedTokenNames, getInitialsFromName} from './utils';

export interface AvatarProps extends React.HTMLAttributes<'div'> {
  name: string;
  size: IconSize;
  src?: string;
}
const Avatar: React.FC<AvatarProps> = ({name, children, size = 'sizeIcon70', src, ...props}) => {
  const computedTokenNames = getComputedTokenNames(size);
  if (src != null && name === undefined) {
    console.error('Paste Avatar: You must provide a name if you are displaying an image');
  }
  return (
    <Box
      {...safelySpreadBoxProps(props)}
      as="div"
      backgroundColor="colorBackgroundUser"
      borderRadius="borderRadiusCircle"
      overflow="hidden"
      size={size}
    >
      {src != null ? (
        <Box {...safelySpreadBoxProps(props)} as="img" alt={name} maxWidth="100%" src={src} size={size} title={name} />
      ) : (
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
      )}
    </Box>
  );
};

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  size: isIconSizeTokenProp,
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export {Avatar};
