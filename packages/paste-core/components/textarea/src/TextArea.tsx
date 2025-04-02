import { getCustomElementStyles, safelySpreadBoxProps } from "@twilio-paste/box";
import type { BoxProps } from "@twilio-paste/box";
import { InputBox } from "@twilio-paste/input-box";
import TextareaAutosize from "@twilio-paste/react-textarea-autosize-library";
import { css, styled } from "@twilio-paste/styling-library";
import type { HTMLPasteProps } from "@twilio-paste/types";
import * as React from "react";

type TextAreaVariants = "default" | "inverse";

export interface TextAreaProps extends Omit<HTMLPasteProps<"textarea">, "maxRows"> {
  /**
   * Overrides the default element name to apply unique styles with the Customization Provider.
   *
   * @default "TEXTAREA"
   * @type {BoxProps["element"]}
   * @memberof TextAreaProps
   */
  element?: BoxProps["element"];
  /**
   * Disables the textarea.
   *
   * @type {boolean}
   * @memberof TextAreaProps
   */
  disabled?: boolean;
  /**
   * Sets the textarea to an error state.
   *
   * @type {boolean}
   * @memberof TextAreaProps
   */
  hasError?: boolean;
  /**
   * The height of the textarea is strictly controlled by the component
   *
   * @type {never}
   * @memberof TextAreaProps
   */
  height?: never;
  /**
   * Sets the id of the textarea. Should match the htmlFor of `Label`.
   *
   * @type {string}
   * @memberof TextAreaProps
   */
  id?: string;
  /**
   * Ability to insert icon or other element to the left of the textarea.
   *
   * @type {React.ReactNode}
   * @memberof TextAreaProps
   */
  insertAfter?: React.ReactNode;
  /**
   * Ability to insert icon or other element to the right of the textarea.
   *
   * @type {React.ReactNode}
   * @memberof TextAreaProps
   */
  insertBefore?: React.ReactNode;
  /**
   * Sets the name of the textarea.
   *
   * @type {string}
   * @memberof TextAreaProps
   */
  name?: string;
  /**
   * Sets the placeholder of the textarea.
   *
   * @type {string}
   * @memberof TextAreaProps
   */
  placeholder?: string;
  /**
   * Sets the input to readonly.
   *
   * @type {boolean}
   * @memberof TextAreaProps
   */
  readOnly?: boolean;
  /**
   * Sets the input as required.
   *
   * @type {boolean}
   * @memberof TextAreaProps
   */
  required?: boolean;
  /**
   * Sets the resize property of the textarea. We only support vertical resizing.
   *
   * @default "none"
   * @type {("none" | "vertical")}
   * @memberof TextAreaProps
   */
  resize?: "none" | "vertical";
  /**
   * Adjust how big the textarea should grow as the user types into it.
   *
   * @default 10
   * @type {(number)}
   * @memberof TextAreaProps
   */
  maxRows?: number;
  /**
   * Adjust how big the textarea should start.
   *
   * @default 3
   * @type {(number)}
   * @memberof TextAreaProps
   */
  minRows?: number;
  /**
   * The size of the textarea is strictly controlled by the component
   *
   * @type {never}
   * @memberof TextAreaProps
   */
  size?: never;
  /**
   * Choose between default or inverse styles for the textarea.
   *
   * @default "default"
   * @type {TextAreaVariants}
   * @memberof TextAreaProps
   */
  variant?: TextAreaVariants;
  /**
   * The width of the textarea is strictly controlled by the component
   *
   * @type {never}
   * @memberof TextAreaProps
   */
  width?: never;
}

// @ts-expect-error can't work out how to stop the styled div color prop from emotion clashing with our color style prop in BoxProps
const TextAreaElement = styled(TextareaAutosize)<TextAreaProps>(
  (props) =>
    css({
      appearance: "none",
      background: "transparent",
      border: "none",
      borderRadius: "borderRadius20",
      boxShadow: "none",
      color: "inherit",
      display: "block",
      fontFamily: "inherit",
      fontSize: "fontSize30",
      fontWeight: "fontWeightMedium",
      lineHeight: "lineHeight20",
      outline: "none",
      paddingBottom: "space30",
      paddingLeft: "space40",
      paddingRight: "space40",
      paddingTop: "space30",
      resize: props.resize,
      width: "100%",
      "&::placeholder": {
        color: props.variant === "inverse" ? "colorTextInverseWeaker" : "colorTextWeak",
        fontStyle: "italic",
      },

      "&:focus::placeholder": {
        color: props.variant === "inverse" ? "colorTextInverseWeaker" : "colorTextWeak",
      },

      "&:disabled": {
        color: props.variant === "inverse" ? "colorTextInverseWeakest" : "colorTextWeaker",
        cursor: "not-allowed",
        // Fixes value color in Safari
        "-webkit-text-fill-color": props.variant === "inverse" ? "colorTextInverseWeakest" : "colorTextWeaker",
        "-webkit-opacity": "1",
      },
    }),
  getCustomElementStyles,
);

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      children,
      disabled,
      element = "TEXTAREA",
      hasError,
      insertBefore,
      insertAfter,
      readOnly,
      variant,
      resize = "none",
      maxRows = 10,
      minRows = 3,
      // size, height and width should not be passed down
      size,
      height,
      width,
      ...props
    },
    ref,
  ) => {
    return (
      <InputBox
        disabled={disabled}
        element={element}
        hasError={hasError}
        insertAfter={insertAfter}
        insertBefore={insertBefore}
        readOnly={readOnly}
        variant={variant}
      >
        <TextAreaElement
          {...safelySpreadBoxProps(props)}
          aria-invalid={hasError}
          aria-readonly={readOnly}
          disabled={disabled}
          data-paste-element={`${element}_ELEMENT`}
          readOnly={readOnly}
          ref={ref}
          rows={3}
          minRows={minRows}
          maxRows={maxRows}
          spellCheck
          resize={resize}
          variant={variant}
        >
          {children}
        </TextAreaElement>
      </InputBox>
    );
  },
);

TextArea.displayName = "TextArea";

export { TextArea };
