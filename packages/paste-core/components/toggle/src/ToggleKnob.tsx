import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ToggleKnobProps} from './types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';

const ToggleKnob = React.forwardRef<HTMLDivElement, ToggleKnobProps>(
  ({element, disabled, toggleIsOn, isHovering, ...props}, ref) => {
    const leftPlacement = (): string => {
      if (toggleIsOn && isHovering && !disabled) return '22px';
      else if (toggleIsOn && !isHovering) return 'space70';
      else if (toggleIsOn && disabled) return 'space70';
      else if (!toggleIsOn && isHovering && !disabled) return 'space20';
      else return '2px';
    };
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        aria-disabled={disabled}
        element={`${element}_KNOB`}
        ref={ref}
        backgroundColor="colorBackgroundBody"
        borderRadius="borderRadiusCircle"
        position="absolute"
        width="sizeIcon10"
        height="sizeIcon10"
        top="2px"
        left={leftPlacement()}
        // transition="width 2s"
        display="inline-block"
        borderColor="colorBorder"
        borderWidth="borderWidth10"
        boxShadow="shadowLow"
        _disabled={{
          boxShadow: 'none',
        }}
      >
        {toggleIsOn ? <CheckboxCheckIcon decorative size="sizeIcon10" element={`${element}_ICON`} /> : <></>}
      </Box>
    );
  }
);

ToggleKnob.displayName = 'ToggleKnob';

ToggleKnob.propTypes = {
  disabled: PropTypes.bool,
  element: PropTypes.string,
};

export {ToggleKnob};
