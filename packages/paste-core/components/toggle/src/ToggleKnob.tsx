import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ToggleKnobProps} from './types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';

const ToggleKnob = React.forwardRef<HTMLDivElement, ToggleKnobProps>(
  ({element, disabled, toggleIsOn, isHovering, ...props}, ref) => {
    // TODO: base these translations on size of the container (for customization)
    const moveToggleKnob = React.useCallback(() => {
      if (!disabled) {
        if (!toggleIsOn && isHovering) return 'translate(2px, 0px)';
        if (toggleIsOn && !isHovering) return 'translate(22px, 0px)';
        if (toggleIsOn && isHovering) return 'translate(20px, 0px)';
      }
    }, [toggleIsOn, isHovering, disabled]);

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        aria-disabled={disabled}
        element={`${element}_KNOB`}
        ref={ref}
        position="absolute"
        display="inline-block"
        height="sizeIcon10"
        width="sizeIcon10"
        top="2px"
        left="2px"
        transform={moveToggleKnob()}
        transition="transform .2s ease-in-out"
        borderColor="colorBorder"
        borderWidth="borderWidth10"
        borderRadius="borderRadiusCircle"
        backgroundColor="colorBackgroundBody"
        boxShadow="shadowLow"
        _disabled={{
          boxShadow: 'none',
        }}
      >
        <Box opacity={toggleIsOn ? '1' : '0'} transition="opacity .2s ease-in-out, color .2s ease-in-out">
          <CheckboxCheckIcon decorative size="sizeIcon10" element={`${element}_ICON`} />
        </Box>
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
