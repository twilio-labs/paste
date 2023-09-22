import { Box } from '@twilio-paste/box';
import type { BoxProps } from '@twilio-paste/box';
import type { TextColorOptions } from '@twilio-paste/style-props';
import { styled, themeGet } from '@twilio-paste/styling-library';
import * as React from 'react';

interface HamburgerToggleProps {
  toggled: boolean;
  color: TextColorOptions;
}

interface StyledPattieProps extends Pick<BoxProps, 'top' | 'left' | 'transform' | 'opacity'> {
  color: TextColorOptions;
}

const StyledPattie = styled.span<StyledPattieProps>`
  position: absolute;
  width: ${themeGet('space.space50')};
  height: 3px;
  border-radius: ${themeGet('radii.borderRadius30')};
  transition: transform 0.25s ease-in-out, opacity 0.25s ease-in-out;
  transform-origin: left center;
  background-color: ${({ color }) => themeGet(`textColors.${color}`)};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  transform: ${({ transform }) => transform};
  opacity: ${({ opacity }) => opacity};
`;

const HamburgerToggle = React.forwardRef<HTMLDivElement, HamburgerToggleProps>(({ toggled, color }, ref) => {
  return (
    <Box width="sizeIcon50" height="sizeIcon50" position="relative" ref={ref}>
      <StyledPattie
        color={color}
        transform={toggled ? 'translateX(6px) translateY(4px) rotate(45deg)' : 'rotate(0deg)'}
        opacity={toggled ? 0 : 1}
        left="6px"
        top="7px"
      />
      <StyledPattie
        color={color}
        transform={
          toggled ? 'translateX(2px) translateY(-5px) rotate(45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        left="6px"
        top="13px"
      />
      <StyledPattie
        color={color}
        transform={
          toggled ? 'translateX(2px) translateY(6px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        left="6px"
        top="13px"
      />
      <StyledPattie
        color={color}
        transform={
          toggled ? 'translateX(6px) translateY(-4px) rotate(-45deg)' : 'translateX(0) translateY(0) rotate(0deg)'
        }
        opacity={toggled ? 0 : 1}
        left="6px"
        top="19px"
      />
    </Box>
  );
});

export { HamburgerToggle };
