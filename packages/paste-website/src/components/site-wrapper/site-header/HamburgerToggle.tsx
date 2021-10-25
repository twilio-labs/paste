import * as React from 'react-16';
import {Box, BoxProps} from '@twilio-paste/box';
import {BackgroundColor} from '@twilio-paste/style-props';

interface HamburgerToggleProps {
  toggled: boolean;
  color: BackgroundColor;
}

const Pattie: React.FC<BoxProps> = (props) => (
  <Box
    as="span"
    position="absolute"
    width="16px"
    height="3px"
    borderRadius="borderRadius30"
    transition="all .25s ease-in-out"
    transformOrigin="left center"
    {...props}
  />
);

const HamburgerToggle = React.forwardRef<HTMLButtonElement, HamburgerToggleProps>(({toggled, color, ...props}, ref) => {
  return (
    <Box {...props} ref={ref} width="36px" height="28px" position="relative" transition="all .5s ease-in-out">
      <Pattie
        backgroundColor={color}
        transform={toggled ? 'translateX(6px) translateY(4px) rotate(45deg)' : 'rotate(0deg)'}
        opacity={toggled ? 0 : 1}
        left="10px"
        top="7px"
      />
      <Pattie
        backgroundColor={color}
        transform={
          toggled ? 'translateX(2px) translateY(-5px) rotate(45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        left="10px"
        top="13px"
      />
      <Pattie
        backgroundColor={color}
        transform={
          toggled ? 'translateX(2px) translateY(6px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        left="10px"
        top="13px"
      />
      <Pattie
        backgroundColor={color}
        transform={
          toggled ? 'translateX(6px) translateY(-4px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        opacity={toggled ? 0 : 1}
        left="10px"
        top="19px"
      />
    </Box>
  );
});

export {HamburgerToggle};
