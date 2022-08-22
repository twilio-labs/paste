import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {SwitchProps} from './types';
import {SWITCH_HEIGHT, SWITCH_WIDTH} from './constants';
import {SwitchKnob} from './SwitchKnob';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';

const Switch = React.forwardRef<HTMLDivElement, SwitchProps>(
  ({element = 'SWITCH', id, labelId, disabled = false, on = false, onClick, ...props}, ref) => {
    const [switchIsOn, setSwitchIsOn] = React.useState(on);
    const [isHovering, setIsHovering] = React.useState(false);

    const styles: BoxStyleProps = {
      backgroundColor: 'colorBackgroundStronger',
      _checked_hover: {
        backgroundColor: 'colorBackgroundPrimary',
        color: 'colorTextLink',
      },
      _checked: {
        backgroundColor: 'colorBackgroundPrimaryStronger',
        color: 'colorTextLinkStronger',
      },
      _hover: {
        backgroundColor: 'colorBackgroundStrongest',
        cursor: 'pointer',
      },
      _disabled: {
        backgroundColor: 'colorBackgroundStrong',
        color: 'colorTextIcon',
        cursor: 'not-allowed',
      },
    };

    const handleClick = React.useCallback((): void => {
      if (!disabled) setSwitchIsOn(!switchIsOn);
      if (onClick) onClick();
    }, [onClick, disabled, switchIsOn]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent): void => {
        if (event.key === ' ' || event.key === 'Enter') setSwitchIsOn(!switchIsOn);
      },
      [switchIsOn]
    );

    return (
      <Box
        {...safelySpreadBoxProps(props)}
        {...styles}
        as="div"
        role="switch"
        aria-checked={switchIsOn}
        aria-disabled={disabled}
        aria-labelledby={labelId}
        element={element}
        id={id}
        ref={ref}
        tabIndex={0}
        position="relative"
        display="inline-block"
        boxSizing="content-box"
        height={SWITCH_HEIGHT}
        width={SWITCH_WIDTH}
        padding="space10"
        borderColor="colorBorder"
        borderWidth="borderWidth10"
        borderRadius="borderRadiusPill"
        transition="background-color .2s ease-in-out"
        onClick={handleClick}
        onKeyDown={(evt) => {
          handleKeyDown(evt);
        }}
        onMouseEnter={() => {
          setIsHovering(true);
        }}
        onMouseLeave={() => {
          setIsHovering(false);
        }}
      >
        <SwitchKnob
          element={element}
          disabled={disabled}
          switchIsOn={switchIsOn}
          isHovering={isHovering}
          height={SWITCH_HEIGHT}
        />
      </Box>
    );
  }
);

Switch.displayName = 'Switch';

Switch.propTypes = {
  disabled: PropTypes.bool,
  element: PropTypes.string,
  labelId: PropTypes.string,
  id: PropTypes.string,
  on: PropTypes.bool,
  onClick: PropTypes.func,
};

export {Switch};
