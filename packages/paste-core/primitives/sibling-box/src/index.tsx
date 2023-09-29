import { Box } from "@twilio-paste/box";
import type { BoxProps, BoxStyleProps } from "@twilio-paste/box";
import { css, styled } from "@twilio-paste/styling-library";
import * as React from "react";

export interface SiblingBoxProps extends BoxProps {
  _activeSibling?: BoxStyleProps;
  _boxChild?: BoxStyleProps;
  _checkedAndActiveSibling?: BoxStyleProps;
  _checkedAndDisabledSibling?: BoxStyleProps;
  _checkedAndFocusSibling?: BoxStyleProps;
  _checkedAndHoverSibling?: BoxStyleProps;
  _checkedAndInvalidSibling?: BoxStyleProps;
  _checkedAndInvalidAndDisabledSibling?: BoxStyleProps;
  _checkedAndInvalidAndHoverSibling?: BoxStyleProps;
  _checkedSibling?: BoxStyleProps;
  _checkedSiblingAndBoxChild?: BoxStyleProps;
  _disabledSibling?: BoxStyleProps;
  _focusSibling?: BoxStyleProps;
  _hoverSibling?: BoxStyleProps;
  _invalidSibling?: BoxStyleProps;
  _invalidAndHoverSibling?: BoxStyleProps;
  _invalidAndDisabledSibling?: BoxStyleProps;
  type?: "checkbox" | "radio" | "file";
}

const StyledSiblingBox = styled(Box)<SiblingBoxProps>(
  ({
    _activeSibling,
    _boxChild,
    _checkedAndActiveSibling,
    _checkedAndDisabledSibling,
    _checkedAndFocusSibling,
    _checkedAndHoverSibling,
    _checkedAndInvalidSibling,
    _checkedAndInvalidAndDisabledSibling,
    _checkedAndInvalidAndHoverSibling,
    _checkedSibling,
    _checkedSiblingAndBoxChild,
    _disabledSibling,
    _focusSibling,
    _hoverSibling,
    _invalidSibling,
    _invalidAndHoverSibling,
    _invalidAndDisabledSibling,
    type = "checkbox",
  }) => {
    const active = `input[type=${type}]:active + label &`;
    const checked = `input[type=${type}]:checked + label &, input[type=${type}][aria-checked=mixed] + label &`;
    const checkedAndActive = `input[type=${type}]:checked:active + label &, input[type=${type}][aria-checked=mixed]:active + label &`;
    const checkedAndChild = `input[type=${type}]:checked + label & > *, input[type=${type}][aria-checked=mixed] + label & > *`;
    const checkedAndDisabled = `input[type=${type}]:checked:disabled + label &, input[type=${type}][aria-checked=mixed]:disabled + label &`;
    const checkedAndFocus = `input[type=${type}]:checked:focus + label &, input[type=${type}][aria-checked=mixed]:focus + label &`;
    const checkedAndHover = `input[type=${type}]:checked:hover:not(:disabled) + label &, input[type=${type}][aria-checked=mixed]:hover:not(:disabled) + label &`;
    const checkedAndInvalid = `input[type=${type}][aria-invalid=true]:checked + label &`;
    const checkedAndInvalidAndDisabled = `input[type=${type}][aria-invalid=true]:checked:disabled + label &`;
    const checkedAndInvalidAndHover = `input[type=${type}][aria-invalid=true]:checked:hover:not(:disabled) + label &`;
    const child = `input[type=${type}] + label & > *`;
    const disabled = `input[type=${type}]:disabled + label &`;
    const focus = `input[type=${type}]:focus + label &`;
    const hover = `input[type=${type}]:hover:not(:disabled):not(:checked) + label &`;
    const invalid = `input[type=${type}][aria-invalid=true] + label &`;
    const invalidAndHover = `input[type=${type}][aria-invalid=true]:hover:not(:disabled) + label &`;
    const invalidAndDisabled = `input[type=${type}][aria-invalid=true]:disabled + label &`;
    return css({
      [active]: _activeSibling,
      [checked]: _checkedSibling,
      [checkedAndActive]: _checkedAndActiveSibling,
      [checkedAndChild]: _checkedSiblingAndBoxChild,
      [checkedAndDisabled]: _checkedAndDisabledSibling,
      [checkedAndFocus]: _checkedAndFocusSibling,
      [checkedAndHover]: _checkedAndHoverSibling,
      [checkedAndInvalid]: _checkedAndInvalidSibling,
      [checkedAndInvalidAndDisabled]: _checkedAndInvalidAndDisabledSibling,
      [checkedAndInvalidAndHover]: _checkedAndInvalidAndHoverSibling,
      [child]: _boxChild,
      [disabled]: _disabledSibling,
      [focus]: _focusSibling,
      [hover]: _hoverSibling,
      [invalid]: _invalidSibling,
      [invalidAndHover]: _invalidAndHoverSibling,
      [invalidAndDisabled]: _invalidAndDisabledSibling,
    });
  },
);

const SiblingBox = React.forwardRef<HTMLSpanElement, React.PropsWithChildren<SiblingBoxProps>>(
  (
    {
      "aria-hidden": ariaHidden = "true",
      alignItems = "center",
      display = "inline-flex",
      element = "SIBLING_BOX",
      flexShrink = 0,
      justifyContent = "center",
      transition = "all 120ms",
      ...props
    },
    ref,
  ) => {
    return (
      <StyledSiblingBox
        alignItems={alignItems}
        aria-hidden={ariaHidden}
        display={display}
        element={element}
        flexShrink={flexShrink}
        justifyContent={justifyContent}
        ref={ref}
        transition={transition}
        {...props}
      />
    );
  },
);

SiblingBox.displayName = "SiblingBox";

export { SiblingBox };
