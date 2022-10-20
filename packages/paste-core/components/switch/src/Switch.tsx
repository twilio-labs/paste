import * as React from 'react';
import * as PropTypes from 'prop-types';
import {useUID} from '@twilio-paste/uid-library';
import {Text} from '@twilio-paste/text';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import {SWITCH_HEIGHT, SWITCH_WIDTH} from './constants';
import {SiblingBox} from '@twilio-paste/sibling-box';
import {Label} from '@twilio-paste/label';
import {HelpText} from '@twilio-paste/help-text';
import {MediaObject, MediaFigure, MediaBody} from '@twilio-paste/media-object';
import {RequiredDot} from '@twilio-paste/label';
import {SwitchContext} from './SwitchContext';
import {SwitchKnob} from './SwitchKnob';

const selectAllStyleProps = {
  paddingTop: 'space20',
  paddingRight: 'space30',
  paddingBottom: 'space20',
  paddingLeft: 'space20',
  borderRadius: 'borderRadius10',
  backgroundColor: 'colorBackground',
};

const selectAllActiveStyleProps = {
  ...selectAllStyleProps,
  backgroundColor: 'colorBackgroundPrimaryWeakest',
};

const selectAllChildStyleProps = {
  paddingLeft: 'space30',
  paddingRight: 'space30',
};

export interface SwitchProps extends React.InputHTMLAttributes<HTMLInputElement>, Pick<BoxProps, 'element'> {
  children: NonNullable<React.ReactNode>;
  hasError?: boolean;
  helpText?: string | React.ReactNode;
  id?: string;
  indeterminate?: boolean;
  isSelectAll?: boolean;
  isSelectAllChild?: boolean;
  checked?: boolean;
  defaultChecked?: boolean;
}

type HiddenSwitchProps = Pick<
  SwitchProps,
  | 'checked'
  | 'defaultChecked'
  | 'element'
  | 'disabled'
  | 'id'
  | 'indeterminate'
  | 'name'
  | 'onChange'
  | 'required'
  | 'value'
> & {
  ref?: any | undefined;
};
const HiddenSwitch = React.forwardRef<HTMLInputElement, HiddenSwitchProps>(({disabled, ...props}, ref) => (
  <Box
    {...props}
    ref={ref}
    disabled={disabled}
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
    tabIndex={0}
  />
));

HiddenSwitch.displayName = 'HiddenSwitch';

const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      checked,
      defaultChecked,
      element = 'SWITCH',
      children,
      helpText,
      id,
      indeterminate,
      isSelectAll,
      isSelectAllChild,
      required,
      onChange,
      ...props
    },
    ref
  ) => {
    if (checked != null && defaultChecked != null) {
      throw new Error(
        `[Paste Switch] Do not provide both 'defaultChecked' and 'checked' to Switch at the same time. Please consider if you want this component to be controlled or uncontrolled.`
      );
    }

    // Keeps track of the `checked` state on uncontrolled Switches
    // in order to properly render the Switch icon svg.
    const [checkedState, setCheckedState] = React.useState(defaultChecked);
    const [isHovering, setIsHovering] = React.useState(false);

    const SwitchGroupContext = React.useContext(SwitchContext);
    const helpTextId = useUID();
    const SwitchId = id ? id : useUID();
    // We shouldn't change between controlled and uncontrolled after mount, so we memo this for safety
    const isControlled = React.useMemo(() => checked !== undefined, []);

    // Determines if the Switch is checked in either controlled or uncontrolled environments
    const mergedChecked = isControlled ? checked : checkedState;

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        console.log('handleChange', isControlled, onChange);
        if (!isControlled) {
          setCheckedState(event.currentTarget.checked);
        } else if (onChange) {
          onChange(event);
        } else {
          SwitchGroupContext.onChange(event);
        }
      },
      [onChange, SwitchGroupContext.onChange]
    );

    // Prioritizing direct props values over whatever SwitchGroupContext passes down
    const disabled = props.disabled != null ? props.disabled : SwitchGroupContext.disabled;
    const name = props.name != null ? props.name : SwitchGroupContext.name;
    const hasError = props.hasError != null ? props.hasError : SwitchGroupContext.hasError;

    // Custom Switch styles if selectAll(Child)
    let selectAllStyles = {};
    if (isSelectAll) {
      selectAllStyles = !disabled && (mergedChecked || indeterminate) ? selectAllActiveStyleProps : selectAllStyleProps;
    }
    if (isSelectAllChild) {
      selectAllStyles = selectAllChildStyleProps;
    }

    console.log(props);
    return (
      <Box element={element} display="inline-flex" position="relative" flexDirection="column" {...selectAllStyles}>
        <HiddenSwitch
          {...safelySpreadBoxProps(props)}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          onChange={handleChange}
          aria-describedby={helpTextId}
          aria-checked={indeterminate ? 'mixed' : checked}
          aria-invalid={hasError}
          id={SwitchId}
          required={required}
          ref={ref}
        />
        <Label disabled={disabled} htmlFor={SwitchId} marginBottom="space0">
          <Box as="span" display="flex">
            <SiblingBox
              {...safelySpreadBoxProps(props)}
              as="span"
              outline="none"
              position="relative"
              display="inline-block"
              boxSizing="content-box"
              height={SWITCH_HEIGHT}
              width={SWITCH_WIDTH}
              overflow="hidden"
              padding="space10"
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
                backgroundColor: 'colorBackgroundPrimaryStronger',
                color: 'colorTextLinkStronger',
              }}
              _disabledSibling={{
                backgroundColor: 'colorBackgroundStrong',
                color: 'colorTextIcon',
                cursor: 'not-allowed',
              }}
              _checkedAndHoverSibling={{
                backgroundColor: 'colorBackgroundPrimary',
                color: 'colorTextLink',
              }}
            >
              <SwitchKnob
                element={element}
                disabled={disabled}
                checked={mergedChecked}
                isHovering={isHovering}
                height={SWITCH_HEIGHT}
              />
            </SiblingBox>
            <Text
              {...props}
              element={`${element}_LABEL_TEXT`}
              as="span"
              color="colorText"
              marginLeft="space30"
              fontWeight={isSelectAll ? null : 'fontWeightMedium'}
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
          <Box as="span" display="flex" element={element}>
            <Box
              as="span"
              boxSizing="content-box"
              width={SWITCH_WIDTH}
              height={SWITCH_HEIGHT}
              padding="space10"
              aria-hidden={true}
              role="presentation"
              marginRight="space30"
              display="inline-block"
            />
            <HelpText id={helpTextId} marginTop="space0">
              {helpText}
            </HelpText>
          </Box>
        )}
      </Box>
    );
  }
);
Switch.displayName = 'Switch';

Switch.propTypes = {
  disabled: PropTypes.bool,
  element: PropTypes.string,
  id: PropTypes.string,

  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  hasError: PropTypes.bool,
  helpText: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  indeterminate: PropTypes.bool,
  isSelectAll: PropTypes.bool,
  isSelectAllChild: PropTypes.bool,
  defaultChecked: PropTypes.bool,
};

export {Switch};
