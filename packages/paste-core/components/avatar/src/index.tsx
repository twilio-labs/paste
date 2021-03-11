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
      // check that icon isn't a string

      // type Child1Props = {
      //   childern: React.FC<{title: string}>
      // }
      // const Child1: React.FC<string> = (title, decorative, size, color) => {
      //   return <div title={title} decorative={decorative} size={size} color={color}/>;
      // };

      // const Child2: React.FC<string>  = (lastName) => {
      //   return (
      //     <Child1>
      //       {/* <div /> */}
      //     </Child1>
      //   );
      // };

      let Icon = icon;
      Icon = React.Children.only(Child1);

      if (
        // @ts-ignore
        typeof Icon.type.displayName !== 'string' ||
        // @ts-ignore
        !Icon.type.displayName.includes('Icon')
      ) {
        throw new Error('[Paste Avatar]: expects children to be a Paste icon only.');
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
  // icon: PropTypes.element
};

export {Avatar};
