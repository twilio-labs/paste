import { ButtonToggleStyles, DestructiveSecondaryButtonToggleStyles } from "@twilio-paste/button";
import { css, styled } from "@twilio-paste/styling-library";

export const StyledRadioButtonLabel = styled.label(
  css({
    "& > input[type=radio]:checked + span": {
      ...ButtonToggleStyles._pressed,
      zIndex: 1,
    },
    "& > input[type=radio]:checked + span:hover": {
      ...ButtonToggleStyles._pressed_hover,
      zIndex: 2,
    },
    "& > input[type=radio]:checked:focus + span": {
      ...ButtonToggleStyles._pressed_focus,
      zIndex: 3,
    },
    "& > input[type=radio][aria-invalid=true]:checked + span": {
      ...DestructiveSecondaryButtonToggleStyles._pressed,
      zIndex: 1,
    },
    "& > input[type=radio][aria-invalid=true]:checked + span:hover": {
      ...DestructiveSecondaryButtonToggleStyles._pressed_hover,
      zIndex: 2,
    },
    "& > input[type=radio][aria-invalid=true]:checked:focus + span": {
      ...DestructiveSecondaryButtonToggleStyles._pressed_focus,
      zIndex: 3,
    },
    "& > input[type=radio]:checked:disabled + span": {
      ...ButtonToggleStyles._pressed_disabled,
      zIndex: 0,
    },
    "& > input[type=radio][aria-invalid=true]:checked:disabled + span:hover": {
      ...DestructiveSecondaryButtonToggleStyles._pressed_disabled,
      zIndex: 0,
    },
    "& > input[type=radio]:disabled + span": {
      ...ButtonToggleStyles._disabled,
      zIndex: 0,
    },
    "& > input[type=radio][aria-invalid=true]:disabled + span:hover": {
      ...DestructiveSecondaryButtonToggleStyles._disabled,
      zIndex: 0,
    },
  }),
);
