import {styled, css} from '@twilio-paste/styling-library';
import {ButtonToggleStyles} from '@twilio-paste/button';

export const StyledRadioButtonLabel = styled.label(
  css({
    '& > input[type=radio]:checked + span': {
      ...ButtonToggleStyles._pressed,
    },
    '& > input[type=radio]:checked + span:hover': {
      ...ButtonToggleStyles._pressed_hover,
    },
    '& > input[type=radio]:checked:focus + span': {
      ...ButtonToggleStyles._pressed_focus,
    },
  })
);
