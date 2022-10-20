import {styled, css} from '@twilio-paste/styling-library';
import {ButtonToggleButtonStyles} from '@twilio-paste/button';

export const StyledRadioButtonLabel = styled.label(
  css({
    '& > input[type=radio]:checked + span': {
      ...ButtonToggleButtonStyles._pressed,
    },
    '& > input[type=radio]:checked + span:hover': {
      ...ButtonToggleButtonStyles._pressed_hover,
    },
    '& > input[type=radio]:checked:focus + span': {
      ...ButtonToggleButtonStyles._pressed_focus,
    },
  })
);
