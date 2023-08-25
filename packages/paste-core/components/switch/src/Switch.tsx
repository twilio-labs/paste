import * as React from 'react';

import {useUID} from '@twilio-paste/uid-library';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {SiblingBox} from '@twilio-paste/sibling-box';
import {Label, RequiredDot} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import type {HTMLPasteProps} from '@twilio-paste/types';

import {SWITCH_HEIGHT, SWITCH_KNOB_SIZE, SWITCH_WIDTH} from './constants';
import {SwitchContext} from './SwitchContext';
import {SwitchKnob} from './SwitchKnob';

export interface SwitchProps extends HTMLPasteProps<'input'>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  helpText?: string | React.ReactNode;
  id?: string;
  checked?: boolean;
  defaultChecked?: boolean;
}

type HiddenSwitchProps = Pick<
  SwitchProps,
  'checked' | 'defaultChecked' | 'element' | 'disabled' | 'id' | 'name' | 'onChange' | 'required' | 'value'
>;
const HiddenSwitch = React.forwardRef<HTMLInputElement, HiddenSwitchProps>((props, ref) => (
  <Box
    {...props}
    ref={ref}
    as="input"
    type="checkbox"
    role="switch"
    size="size0"
    border="none"
    overflow="hidden"
    padding="space0"
    margin="space0"
    whiteSpace="nowrap"
    textTransform="none"
    position="absolute"
    clip="rect(0 0 0 0)"
  />
));

HiddenSwitch.displayName = 'HiddenSwitch';

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({checked, defaultChecked, element = 'SWITCH', children, helpText, id, required, onChange, ...props}, ref) => {
    if (checked != null && defaultChecked != null) {
      throw new Error(
        `[Paste Switch] Do not provide both 'defaultChecked' and 'checked' to Switch at the same time. Please consider if you want this component to be controlled or uncontrolled.`
      );
    }

    /*
     * Keeps track of the `checked` state on uncontrolled Switches
     * in order to properly render the Switch icon svg.
     */
    const [checkedState, setCheckedState] = React.useState(defaultChecked);
    const [isHovering, setIsHovering] = React.useState(false);

    const SwitchGroupContext = React.useContext(SwitchContext);
    const helpTextId = useUID();
    const SwitchId = id ? id : useUID();
    // We shouldn't change between controlled and uncontrolled after mount, so we memo this for safety
    const isControlled = React.useMemo(() => checked !== undefined, []);

    // Determines if the Switch is checked in either controlled or uncontrolled environments
    const mergedChecked = isControlled ? checked : checkedState;

    // Prioritizing direct props values over whatever SwitchGroupContext passes down
    const disabled = props.disabled != null ? props.disabled : SwitchGroupContext.disabled;
    const name = props.name != null ? props.name : SwitchGroupContext.name;
    const hasError = props.hasError != null ? props.hasError : SwitchGroupContext.hasError;

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (disabled) {
          return;
        }

        if (!isControlled) {
          setCheckedState(event.currentTarget.checked);
        } else if (onChange) {
          onChange(event);
        } else {
          SwitchGroupContext.onChange(event);
        }
      },
      [onChange, SwitchGroupContext.onChange, disabled]
    );

    return (
      <Box element={element} display="inline-flex" position="relative" flexDirection="column">
        <HiddenSwitch
          {...safelySpreadBoxProps(props)}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          onChange={handleChange}
          aria-describedby={helpTextId}
          aria-checked={mergedChecked}
          aria-invalid={hasError}
          id={SwitchId}
          required={required}
          ref={ref}
        />

        <Label disabled={disabled} htmlFor={SwitchId} marginBottom="space0">
          <Box as="span" display="flex">
            <SiblingBox
              element={`${element}_CONTROL`}
              as="span"
              outline="none"
              position="relative"
              display="inline-block"
              boxSizing="content-box"
              height={SWITCH_HEIGHT}
              width={SWITCH_WIDTH}
              marginTop="space10"
              overflow="hidden"
              borderColor="colorBorder"
              borderWidth="borderWidth10"
              borderRadius="borderRadiusPill"
              transition="background-color .2s ease-in-out, box-shadow .2s ease-in-out"
              backgroundColor="colorBackgroundStronger"
              cursor="pointer"
              onMouseEnter={() => {
                setIsHovering(true);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
              }}
              _hoverSibling={{
                backgroundColor: 'colorBackgroundStrongest',
              }}
              _focusSibling={{
                boxShadow: 'shadowFocus',
              }}
              _checkedSibling={{
                backgroundColor: 'colorBackgroundPrimary',
                color: 'colorTextPrimary',
              }}
              _disabledSibling={{
                backgroundColor: 'colorBackgroundStrong',
                color: 'currentColor',
                cursor: 'not-allowed',
              }}
              _checkedAndHoverSibling={{
                color: 'colorTextIcon',
                backgroundColor: 'colorBackgroundStrongest',
              }}
              _invalidSibling={{
                backgroundColor: 'colorBackgroundError',
              }}
              _invalidAndHoverSibling={{
                backgroundColor: 'colorBackgroundErrorStrongest',
              }}
              _invalidAndDisabledSibling={{
                backgroundColor: 'colorBackgroundStrong',
              }}
            >
              <SwitchKnob
                element={element}
                disabled={disabled}
                checked={mergedChecked}
                isHovering={isHovering}
                height={SWITCH_KNOB_SIZE}
                hasError={hasError}
              />
            </SiblingBox>
            <Text
              element={`${element}_LABEL_TEXT`}
              as="span"
              color="currentColor"
              marginLeft="space30"
              fontWeight="fontWeightMedium"
            >
              <MediaObject verticalAlign="top">
                {required && (
                  <MediaFigure spacing="space20">
                    <RequiredDot />
                  </MediaFigure>
                )}
                <MediaBody>{children}</MediaBody>
              </MediaObject>
            </Text>
          </Box>
        </Label>
        {helpText && (
          <Box as="span" display="flex" element={`${element}_HELP_TEXT_WRAPPER`}>
            <Box
              as="span"
              boxSizing="content-box"
              width={SWITCH_WIDTH}
              height={SWITCH_HEIGHT}
              padding="space10"
              aria-hidden={true}
              role="presentation"
              marginRight="space20"
              display="inline-block"
              element={`${element}_HELP_TEXT_SPACER`}
            />
            <HelpText id={helpTextId} marginTop="space0" element={`${element}_HELP_TEXT`}>
              {helpText}
            </HelpText>
          </Box>
        )}
      </Box>
    );
  }
);
Switch.displayName = 'Switch';

export {Switch};
