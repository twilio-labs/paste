import * as React from 'react';
import * as PropTypes from 'prop-types';
import type {ToggleProps} from './types';
import {TOGGLE_HEIGHT, TOGGLE_WIDTH} from './constants';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxStyleProps} from '@twilio-paste/box';
import {useUID} from '@twilio-paste/uid-library';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {RequiredDot, Label} from '@twilio-paste/label';
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

    const toggleId = id ? id : useUID();
    const helpTextId = useUID();
    const labelId = useUID();

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
      if (!disabled) setToggleIsOn(!toggleIsOn);
      if (onClick) onClick();
    }, [onClick, disabled, toggleIsOn]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent): void => {
        if (event.key === ' ' || event.key === 'Enter') setToggleIsOn(!toggleIsOn);
      },
      [toggleIsOn]
    );

    return (
      <>
        <Label htmlFor={toggleId} marginBottom="space0">
          <MediaObject>
            <MediaFigure>
              <Box
                {...safelySpreadBoxProps(props)}
                {...styles}
                as="div"
                role="switch"
                aria-checked={toggleIsOn}
                aria-disabled={disabled}
                aria-labelledby={labelId}
                element={element}
                id={toggleId}
                ref={ref}
                tabIndex={0}
                position="relative"
                display="inline-block"
                boxSizing="content-box"
                height={TOGGLE_HEIGHT}
                width={TOGGLE_WIDTH}
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
                <ToggleKnob
                  element={element}
                  disabled={disabled}
                  toggleIsOn={toggleIsOn}
                  isHovering={isHovering}
                  height={TOGGLE_HEIGHT}
                />
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
        </Label>
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
  on: PropTypes.bool,
  onClick: PropTypes.func,
  required: PropTypes.bool,
};

export {Toggle};
