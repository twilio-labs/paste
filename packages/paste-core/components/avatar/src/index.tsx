import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {isIconSizeTokenProp} from '@twilio-paste/style-props';
import {getComputedTokenNames, getInitialsFromName} from './utils';
import type {AvatarProps} from './types';

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({name, children, size = 'sizeIcon70', src, icon, ...props}, ref) => {
    const computedTokenNames = getComputedTokenNames(size);
    if (src != null && name === undefined) {
      console.error('Paste Avatar: You must provide a name if you are displaying an image');
    }
    if (icon != null) {
      const Icon = icon;
      //why do we need Icon = icon???
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
          <Box maxWidth="100%" size={size} display="flex" alignItems="center" justifyContent="center">
            <Icon decorative={false} title={name} size={computedTokenNames.iconSize} color="colorText" />
          </Box>
        </Box>
      );
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
        {src != null ? (
          <Box
            {...safelySpreadBoxProps(props)}
            as="img"
            alt={name}
            maxWidth="100%"
            src={src}
            size={size}
            title={name}
          />
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
  }
);

Avatar.displayName = 'Avatar';
Avatar.propTypes = {
  size: isIconSizeTokenProp,
  src: PropTypes.string,
  name: PropTypes.string.isRequired,
};

export {Avatar};
