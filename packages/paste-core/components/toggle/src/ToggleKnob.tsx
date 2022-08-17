import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ToggleKnobProps} from './types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import {useTheme} from '@twilio-paste/theme';

const ToggleKnob = React.forwardRef<HTMLDivElement, ToggleKnobProps>(
  ({element, disabled, toggleIsOn, isHovering, height, ...props}, ref) => {
    const theme = useTheme();

    const moveToggleKnob = React.useCallback(() => {
      if (!disabled) {
        if (!toggleIsOn && isHovering) return 'translateX(5%)';
        if (toggleIsOn && !isHovering) return 'translateX(100%)';
        if (toggleIsOn && isHovering) return 'translateX(95%)';
      } else if (disabled) {
        if (!toggleIsOn) return 'translate(0%)';
        if (toggleIsOn) return 'translateX(100%)';
      }
    }, [toggleIsOn, isHovering, disabled]);

    return (
      <Box
        width={`calc(100% - ${theme.space.space20})`} // necessary?
        height="100%"
        position="absolute"
        transform={moveToggleKnob()}
        transition="transform .2s ease-in-out"
      >
        <Box
          {...safelySpreadBoxProps(props)}
          aria-disabled={disabled}
          element={`${element}_KNOB`}
          ref={ref}
          height={height}
          width={height}
          transform={toggleIsOn ? 'translateX(-100%)' : 'translateX(0%)'}
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
          <Box
            display="flex"
            height="100%"
            alignItems="center"
            justifyContent="center"
            opacity={toggleIsOn ? '1' : '0'}
            transition="opacity .2s ease-in-out, color .2s ease-in-out"
          >
            <CheckboxCheckIcon decorative size="sizeIcon05" element={`${element}_ICON`} />
          </Box>
        </Box>
      </Box>
    );
  }
);

ToggleKnob.displayName = 'ToggleKnob';

ToggleKnob.propTypes = {
  disabled: PropTypes.bool,
  element: PropTypes.string,
  toggleIsOn: PropTypes.bool.isRequired,
  isHovering: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
};

export {ToggleKnob};
