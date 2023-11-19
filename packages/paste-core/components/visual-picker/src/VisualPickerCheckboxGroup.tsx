import { InlineControlGroup } from "@twilio-paste/inline-control-group";
import * as React from "react";

import { VisualPickerCheckboxContext } from "./VisualPickerContext";
import type { VisualPickerCheckboxRadioGroupProps } from "./types";

export type VisualPickerCheckboxGroupProps = VisualPickerCheckboxRadioGroupProps & {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "VISUAL_PICKER_CHECKBOX_GROUP"
   * @type {VisualPickerCheckboxRadioGroupProps["element"]}
   */
  element?: VisualPickerCheckboxRadioGroupProps["element"];
};
export const VisualPickerCheckboxGroup = React.forwardRef<HTMLFieldSetElement, VisualPickerCheckboxGroupProps>(
  (
    {
      orientation = "vertical",
      children,
      element = "VISUAL_PICKER_CHECKBOX_GROUP",
      disabled = false,
      errorText,
      name,
      i18nRequiredLabel = "(required)",
      ...props
    },
    ref,
  ) => {
    const contextValue = React.useMemo(() => {
      return {
        name,
        groupIsDisabled: disabled,
        groupHasError: errorText != null,
        orientation,
      };
    }, [name, disabled, errorText, orientation]);

    return (
      <VisualPickerCheckboxContext.Provider value={contextValue}>
        <InlineControlGroup
          {...props}
          ref={ref}
          name={name}
          element={element}
          errorText={errorText}
          disabled={disabled}
          orientation={orientation}
          i18nRequiredLabel={i18nRequiredLabel}
          fieldStyleProps={{
            marginTop: orientation === "horizontal" ? "space40" : "space30",
            marginRight: orientation === "horizontal" ? "space30" : undefined,
          }}
        >
          {children}
        </InlineControlGroup>
      </VisualPickerCheckboxContext.Provider>
    );
  },
);

VisualPickerCheckboxGroup.displayName = "VisualPickerCheckboxGroup";
