import {styled, css} from '@twilio-paste/styling-library';
import {ToggleButtonStyles} from '@twilio-paste/button/src/styles';

export const StyledRadioButtonLabel = styled.label(
  css({
    '& > input[type=radio]:checked + span': {
      ...ToggleButtonStyles._pressed,
    },
    '& > input[type=radio]:checked + span:hover': {
      ...ToggleButtonStyles._pressed_hover,
    },
    '& > input[type=radio]:checked:focus + span': {
      ...ToggleButtonStyles._pressed_focus,
    },
  })
);
