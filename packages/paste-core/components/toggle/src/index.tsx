import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ToggleProps} from './types';
import type {BackgroundColor, TextColor} from '@twilio-paste/style-props';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {useUID} from '@twilio-paste/uid-library';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {RequiredDot} from '@twilio-paste/label';
import {ToggleKnob} from './ToggleKnob';
import {ToggleHelpText} from './ToggleHelpText';
import {ToggleLabelText} from './ToggleLabelText';

const Toggle = React.forwardRef<HTMLDivElement, ToggleProps>(
  (
    {element = 'TOGGLE', children, helpText, id, disabled = false, on = false, required = false, onClick, ...props},
    ref
  ) => {
    const [toggleIsOn, setToggleIsOn] = React.useState(on);
    const [isHovering, setIsHovering] = React.useState(false);

    if (!id) {
      const toggleId = useUID();
      id = toggleId;
    }
    const helpTextId = useUID();
    const labelId = useUID();

    const getBackgroundColor = (): BackgroundColor => {
      if (!disabled) {
        if (!toggleIsOn) {
          if (!isHovering) return 'colorBackgroundStronger';
          else if (isHovering) return 'colorBackgroundStrongest';
        } else if (toggleIsOn) {
          if (!isHovering) return 'colorBackgroundPrimaryStronger';
          else if (isHovering) return 'colorBackgroundPrimary';
        }
      } else if (disabled) {
        return 'colorBackgroundStrong';
      }
      return 'colorBackgroundStronger';
    };

    const getColor = (): TextColor => {
      if (disabled) return 'colorTextIcon';
      if (toggleIsOn && !isHovering) return 'colorTextLinkStronger';
      if (toggleIsOn && isHovering) return 'colorTextLink';
      else return 'colorTextIcon';
    };

    const getCursor = (): string => {
      if (disabled) return 'not-allowed';
      if (isHovering) return 'pointer';
      return 'default';
    };

    const handleClick = (): void => {
      if (!disabled) setToggleIsOn(!toggleIsOn);
      if (onClick) onClick();
    };

    const handleKeyDown = (event: React.KeyboardEvent): void => {
      if (event.key === ' ' || event.key === 'Enter') setToggleIsOn(!toggleIsOn);
    };

    return (
      <>
        <label htmlFor={id}>
          <MediaObject>
            <MediaFigure>
              <Box
                {...safelySpreadBoxProps(props)}
                as="div"
                role="switch"
                aria-checked={toggleIsOn}
                aria-disabled={disabled}
                aria-labelledby={labelId}
                element={element}
                id={id}
                ref={ref}
                tabIndex={0}
                position="relative"
                display="inline-block"
                height="20px"
                width="42px"
                borderColor="colorBorder"
                borderWidth="borderWidth10"
                borderRadius="borderRadiusPill"
                backgroundColor={getBackgroundColor()}
                color={getColor()}
                cursor={getCursor()}
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
                <ToggleKnob element={element} disabled={disabled} toggleIsOn={toggleIsOn} isHovering={isHovering} />
              </Box>
            </MediaFigure>
            <ToggleLabelText element={`${element}_LABEL_TEXT_WRAPPER`} id={labelId}>
              <MediaObject verticalAlign="top">
                {required && (
                  <MediaFigure spacing="space20">
                    <RequiredDot />
                  </MediaFigure>
                )}
                <MediaBody>{children}</MediaBody>
              </MediaObject>
            </ToggleLabelText>
          </MediaObject>
        </label>
        {helpText ? (
          <ToggleHelpText element={`${element}_HELP_TEXT_WRAPPER`} helpTextId={helpTextId}>
            {helpText}
          </ToggleHelpText>
        ) : (
          <></>
        )}
      </>
    );
  }
);

Toggle.displayName = 'Toggle';

Toggle.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  element: PropTypes.string,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  id: PropTypes.string,
  onClick: PropTypes.func,
};

export {Toggle};
