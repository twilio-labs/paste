import * as React from 'react';
import {Box, BoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';

interface HamburgerToggleProps {
  toggled: boolean;
  onToggle: (newToggled: boolean) => void;
}

const BasePattie: React.FC<BoxProps> = props => (
  <Box
    position="absolute"
    width="12px"
    height="2px"
    borderRadius="borderRadius30"
    transition="all .25s ease-in-out"
    transformOrigin="left center"
    {...props}
  />
);

const HamburgerToggle = React.forwardRef<HTMLDivElement, HamburgerToggleProps>(({toggled, onToggle}, ref) => {
  const backgroundColor = toggled ? 'colorBackgroundBodyInverse' : 'colorBackgroundBody';
  return (
    <Button ref={ref} variant="reset" size="reset" onClick={() => onToggle(!toggled)}>
      <Box
        backgroundColor="colorBackgroundInverseLight"
        borderRadius="borderRadius30"
        width="36px"
        height="26px"
        position="relative"
        transition="all .5s ease-in-out"
      >
        <BasePattie
          backgroundColor={backgroundColor}
          transform={toggled ? 'translateX(6px) translateY(4px) rotate(45deg)' : 'rotate(0deg)'}
          opacity={toggled ? 0 : 1}
          left="12px"
          top="8px"
        />
        <BasePattie
          backgroundColor={backgroundColor}
          transform={
            toggled ? 'translateX(2px) translateY(-4px) rotate(45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
          }
          left="12px"
          top="12px"
        />
        <BasePattie
          backgroundColor={backgroundColor}
          transform={
            toggled ? 'translateX(2px) translateY(4px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
          }
          left="12px"
          top="12px"
        />
        <BasePattie
          backgroundColor={backgroundColor}
          transform={
            toggled ? 'translateX(6px) translateY(-4px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
          }
          opacity={toggled ? 0 : 1}
          left="12px"
          top="16px"
        />
      </Box>
    </Button>
  );
});

export {HamburgerToggle};
