import * as React from 'react';
import {Box, BoxProps} from '@twilio-paste/box';

interface HamburgerToggleProps {
  toggled: boolean;
}

const Pattie: React.FC<BoxProps> = props => (
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

const HamburgerToggle = React.forwardRef<HTMLButtonElement, HamburgerToggleProps>(({toggled}, ref) => {
  const backgroundColor = toggled ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody';
  return (
    <Box ref={ref} width="36px" height="26px" position="relative" transition="all .5s ease-in-out">
      <Pattie
        backgroundColor={backgroundColor}
        transform={toggled ? 'translateX(6px) translateY(4px) rotate(45deg)' : 'rotate(0deg)'}
        opacity={toggled ? 0 : 1}
        left="10px"
        top="6px"
      />
      <Pattie
        backgroundColor={backgroundColor}
        transform={
          toggled ? 'translateX(2px) translateY(-5px) rotate(45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        left="10px"
        top="12px"
      />
      <Pattie
        backgroundColor={backgroundColor}
        transform={
          toggled ? 'translateX(2px) translateY(6px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        left="10px"
        top="12px"
      />
      <Pattie
        backgroundColor={backgroundColor}
        transform={
          toggled ? 'translateX(6px) translateY(-4px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        opacity={toggled ? 0 : 1}
        left="10px"
        top="18px"
      />
    </Box>
  );
});

export {HamburgerToggle};
