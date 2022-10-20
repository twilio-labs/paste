import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {CheckboxCheckIcon} from '@twilio-paste/icons/esm/CheckboxCheckIcon';
import {useTheme} from '@twilio-paste/theme';

const getSwitchKnobTransformValue = (disabled: boolean, checked: boolean, isHovering: boolean): string => {
  if (!disabled) {
    if (!checked && isHovering) return 'translateX(5%)';
    if (checked && !isHovering) return 'translateX(100%)';
    if (checked && isHovering) return 'translateX(95%)';
  } else if (disabled) {
    if (!checked) return 'translate(0%)';
    if (checked) return 'translateX(100%)';
  }
  return 'translate(0%)';
};

export interface SwitchKnobProps {
  element: BoxProps['element'];
  disabled?: boolean;
  checked?: boolean;
  isHovering: boolean;
  height: string;
  hasError?: boolean;
}

const SwitchKnob = React.forwardRef<HTMLDivElement, SwitchKnobProps>(
  ({element = 'SWITCH', disabled = false, checked = false, isHovering, height, hasError = false, ...props}, ref) => {
    const theme = useTheme();
    const SWITCH_PADDING = theme.space ? theme.space.space20 : '4px';

    const transformValue = React.useMemo(
      () => getSwitchKnobTransformValue(disabled, checked, isHovering),
      [disabled, checked, isHovering]
    );

    return (
      <Box
        width={`calc(100% - ${SWITCH_PADDING})`}
        height="100%"
        position="absolute"
        transform={transformValue}
        transition="transform .2s ease-in-out"
      >
        <Box
          {...safelySpreadBoxProps(props)}
          aria-disabled={disabled}
          element={`${element}_KNOB`}
          ref={ref}
          height={height}
          width={height}
          transform={checked ? 'translateX(-100%)' : 'translateX(0%)'}
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
            opacity={checked ? '1' : '0'}
            transition="opacity .2s ease-in-out, color .2s ease-in-out"
          >
            <CheckboxCheckIcon
              decorative
              size="sizeIcon05"
              element={`${element}_ICON`}
              color={hasError && !disabled ? 'colorTextIconError' : 'colorTextIcon'}
            />
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
  checked: PropTypes.bool,
  hasError: PropTypes.bool,
  isHovering: PropTypes.bool.isRequired,
  height: PropTypes.string.isRequired,
};

export {SwitchKnob};
