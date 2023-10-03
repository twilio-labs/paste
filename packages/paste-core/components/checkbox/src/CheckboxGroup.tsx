import type { BoxProps } from "@twilio-paste/box";
import { InlineControlGroup } from "@twilio-paste/inline-control-group";
import type { InlineControlGroupProps } from "@twilio-paste/inline-control-group";
import * as React from "react";

import type { CheckboxProps } from "./Checkbox";
import { CheckboxContext } from "./CheckboxContext";

export interface CheckboxGroupProps extends InlineControlGroupProps {
  /**
   *
   * @default null
   * @type {boolean}
   * @memberof CheckboxGroupProps
   */
  isSelectAll?: boolean;
  /**
   *
   * @default null
   * @type {string}
   * @memberof CheckboxGroupProps
   */
  name: string;
  /**
   *
   * @default "null"
   * @memberof CheckboxGroupProps
   */
  onChange?: (checked: boolean) => void;
  /**
   * Accessible label for the required dot
   *
   * @default "(required)"
   * @type {string}
   * @memberof CheckboxGroupProps
   */
  i18nRequiredLabel?: string;
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider
   *
   * @default "CHECKBOX_GROUP"
   * @type {BoxElementProps["element"]}
   * @memberof CheckboxGroupProps
   */
  element?: BoxProps["element"];
}

const CheckboxGroup = React.forwardRef<HTMLFieldSetElement, CheckboxGroupProps>(
  (
    {
      children,
      element = "CHECKBOX_GROUP",
      disabled = false,
      errorText,
      isSelectAll = false,
      name,
      onChange,
      orientation = "vertical",
      i18nRequiredLabel = "(required)",
      ...props
    },
    ref,
  ) => {
    const onChangeHandler = React.useCallback(
      (event: React.ChangeEvent<HTMLInputElement>): void => {
        if (onChange != null) {
          onChange(event.target.checked);
        }
      },
      [onChange],
    );

    const contextValue = React.useMemo(() => {
      return {
        disabled,
        name,
        onChange: onChangeHandler,
        hasError: errorText ? true : undefined,
      };
    }, [disabled, name, onChangeHandler]);

    return (
      <CheckboxContext.Provider value={contextValue}>
        <InlineControlGroup
          {...props}
          element={element}
          disabled={disabled}
          errorText={errorText}
          name={name}
          orientation={orientation}
          ref={ref}
          i18nRequiredLabel={i18nRequiredLabel}
        >
          {React.Children.map(children, (child, index) => {
            return React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<CheckboxProps>, {
                  isSelectAll: isSelectAll && index === 0,
                  isSelectAllChild: isSelectAll && orientation === "vertical" && index !== 0,
                })
              : child;
          })}
        </InlineControlGroup>
      </CheckboxContext.Provider>
    );
  },
);

CheckboxGroup.displayName = "CheckboxGroup";

export { CheckboxGroup };
