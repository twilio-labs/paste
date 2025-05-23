import {
  BaseRadioCheckboxControl,
  BaseRadioCheckboxHelpText,
  BaseRadioCheckboxLabel,
  BaseRadioCheckboxLabelText,
} from "@twilio-paste/base-radio-checkbox";
import { Box, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { CheckboxCheckIcon } from "@twilio-paste/icons/esm/CheckboxCheckIcon";
import { MinusIcon } from "@twilio-paste/icons/esm/MinusIcon";
import { RequiredDot } from "@twilio-paste/label";
import { MediaBody, MediaFigure, MediaObject } from "@twilio-paste/media-object";
import type { HTMLPasteProps } from "@twilio-paste/types";
import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import { CheckboxContext } from "./CheckboxContext";

const selectAllStyleProps = {
  paddingTop: "space20",
  paddingRight: "space30",
  paddingBottom: "space20",
  paddingLeft: "space30",
  borderRadius: "borderRadius20",
  backgroundColor: "colorBackground",
};

const selectAllActiveStyleProps = {
  ...selectAllStyleProps,
  backgroundColor: "colorBackground",
};

const selectAllChildStyleProps = {
  paddingLeft: "space30",
  paddingRight: "space30",
};

export interface CheckboxProps extends HTMLPasteProps<"input"> {
  children: NonNullable<React.ReactNode>;
  /**
   *
   * @default null
   * @type {boolean}
   * @memberof CheckboxProps
   */
  hasError?: boolean;
  /**
   *
   * @default null
   * @type {string | React.ReactNode}
   * @memberof CheckboxProps
   */
  helpText?: string | React.ReactNode;
  /**
   *
   * @default unique id
   * @type {string}
   * @memberof CheckboxProps
   */
  id?: string;
  /**
   *
   * @default null
   * @type {boolean}
   * @memberof CheckboxProps
   */
  indeterminate?: boolean;
  /**
   *
   * @default null
   * @type {boolean}
   * @memberof CheckboxProps
   */
  isSelectAll?: boolean;
  /**
   *
   * @default null
   * @type {boolean}
   * @memberof CheckboxProps
   */
  isSelectAllChild?: boolean;
  /**
   * Use on the currently selected checkbox
   *
   * @default null
   * @type {boolean}
   * @memberof CheckboxProps
   */
  checked?: boolean;
  /**
   * Only for use with uncontrolled checkboxes
   *
   * @default null
   * @type {boolean}
   * @memberof CheckboxProps
   */
  defaultChecked?: boolean;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHECKBOX"
   * @type {BoxElementProps["element"]}
   * @memberof CheckboxProps
   */
  element?: BoxProps["element"];
}

type HiddenCheckboxProps = Pick<
  CheckboxProps,
  | "checked"
  | "defaultChecked"
  | "element"
  | "disabled"
  | "id"
  | "indeterminate"
  | "name"
  | "onChange"
  | "required"
  | "value"
>;
const HiddenCheckbox = React.forwardRef<HTMLInputElement, HiddenCheckboxProps>((props, ref) => (
  <Box
    {...props}
    ref={ref}
    as="input"
    type="checkbox"
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

HiddenCheckbox.displayName = "HiddenCheckbox";

const CheckboxIcon: React.FC<{
  indeterminate: boolean | undefined;
  checked: boolean | undefined;
  element: BoxProps["element"];
}> = ({ checked, element, indeterminate }) => {
  if (indeterminate) {
    return <MinusIcon element={element} decorative color="inherit" size="sizeIcon10" />;
  }
  return (
    <CheckboxCheckIcon
      element={element}
      display={!checked ? "none" : "block"}
      decorative
      color="inherit"
      size="sizeIcon10"
    />
  );
};

CheckboxIcon.displayName = "CheckboxIcon";

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      checked,
      defaultChecked,
      element = "CHECKBOX",
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
    ref,
  ) => {
    if (checked != null && defaultChecked != null) {
      throw new Error(
        `[Paste Checkbox] Do not provide both "defaultChecked" and "checked" to Checkbox at the same time. Please consider if you want this component to be controlled or uncontrolled.`,
      );
    }

    /*
     * Keeps track of the `checked` state on uncontrolled Checkboxes
     * in order to properly render the checkbox icon svg.
     */
    const [checkedState, setCheckedState] = React.useState(defaultChecked);

    const checkboxGroupContext = React.useContext(CheckboxContext);
    const helpTextId = useUID();
    const checkboxId = id ? id : useUID();
    // We shouldn"t change between controlled and uncontrolled after mount, so we memo this for safety
    const isControlled = React.useMemo(() => checked !== undefined, []);

    // Determines if the checkbox is checked in either controlled or uncontrolled environments
    const mergedChecked = isControlled ? checked : checkedState;

    const handleChange = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (!isControlled) {
          setCheckedState(event.target.checked);
        } else if (onChange) {
          onChange(event);
        } else {
          checkboxGroupContext.onChange(event);
        }
      },
      [onChange, checkboxGroupContext.onChange],
    );

    // Prioritizing direct props values over whatever CheckboxGroupContext passes down
    const disabled = props.disabled != null ? props.disabled : checkboxGroupContext.disabled;
    const name = props.name != null ? props.name : checkboxGroupContext.name;
    const hasError = props.hasError != null ? props.hasError : checkboxGroupContext.hasError;

    // Custom checkbox styles if selectAll(Child)
    let selectAllStyles = {};
    if (isSelectAll) {
      selectAllStyles = !disabled && (mergedChecked || indeterminate) ? selectAllActiveStyleProps : selectAllStyleProps;
    }
    if (isSelectAllChild) {
      selectAllStyles = selectAllChildStyleProps;
    }

    return (
      <Box element={element} display="inline-flex" position="relative" flexDirection="column" {...selectAllStyles}>
        <HiddenCheckbox
          {...safelySpreadBoxProps(props)}
          checked={checked}
          defaultChecked={defaultChecked}
          disabled={disabled}
          name={name}
          onChange={handleChange}
          aria-describedby={helpTextId}
          aria-checked={indeterminate ? "mixed" : checked}
          aria-invalid={hasError}
          id={checkboxId}
          required={required}
          ref={ref}
        />
        <BaseRadioCheckboxLabel disabled={disabled} htmlFor={checkboxId}>
          <BaseRadioCheckboxControl
            alignItems="center"
            borderRadius="borderRadius20"
            element={`${element}_CONTROL`}
            disabled={disabled}
            position="relative"
            type="checkbox"
          >
            <CheckboxIcon element={`${element}_ICON`} checked={mergedChecked} indeterminate={indeterminate} />
          </BaseRadioCheckboxControl>
          <BaseRadioCheckboxLabelText
            element={`${element}_LABEL_TEXT`}
            fontWeight={isSelectAll ? null : "fontWeightMedium"}
          >
            <MediaObject verticalAlign="top">
              {required && (
                <MediaFigure spacing="space20">
                  <RequiredDot />
                </MediaFigure>
              )}
              <MediaBody>{children}</MediaBody>
            </MediaObject>
          </BaseRadioCheckboxLabelText>
        </BaseRadioCheckboxLabel>
        {helpText && (
          <BaseRadioCheckboxHelpText element={`${element}_HELP_TEXT_WRAPPER`} helpTextId={helpTextId}>
            {helpText}
          </BaseRadioCheckboxHelpText>
        )}
      </Box>
    );
  },
);
Checkbox.displayName = "Checkbox";

export { Checkbox, HiddenCheckbox, CheckboxIcon };
