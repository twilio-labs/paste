import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchKnobProps} from './types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import {useTheme} from '@twilio-paste/theme';

const SwitchKnob = React.forwardRef<HTMLDivElement, SwitchKnobProps>(
  ({element, disabled, switchIsOn, isHovering, height, ...props}, ref) => {
    const theme = useTheme();

    const moveSwitchKnob = React.useCallback(() => {
      if (!disabled) {
        if (!switchIsOn && isHovering) return 'translateX(5%)';
        if (switchIsOn && !isHovering) return 'translateX(100%)';
        if (switchIsOn && isHovering) return 'translateX(95%)';
      } else if (disabled) {
        if (!switchIsOn) return 'translate(0%)';
        if (switchIsOn) return 'translateX(100%)';
      }
    }, [switchIsOn, isHovering, disabled]);

    return (
      <Box
        width={`calc(100% - ${theme.space.space20})`} // necessary?
        height="100%"
        position="absolute"
        transform={moveSwitchKnob()}
        transition="transform .2s ease-in-out"
      >
        <Box
          {...safelySpreadBoxProps(props)}
          aria-disabled={disabled}
          element={`${element}_KNOB`}
          ref={ref}
          height={height}
          width={height}
          transform={switchIsOn ? 'translateX(-100%)' : 'translateX(0%)'}
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
            opacity={switchIsOn ? '1' : '0'}
            transition="opacity .2s ease-in-out, color .2s ease-in-out"
          >
            <CheckboxCheckIcon decorative size="sizeIcon05" element={`${element}_ICON`} />
          </Box>
        </Box>
      </Box>
    );
  }
);

SwitchKnob.displayName = 'SwitchKnob';

SwitchKnob.propTypes = {
  disabled: PropTypes.bool,
  element: PropTypes.string,
  switchIsOn: PropTypes.bool.isRequired,
  isHovering: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
};

export {SwitchKnob};
