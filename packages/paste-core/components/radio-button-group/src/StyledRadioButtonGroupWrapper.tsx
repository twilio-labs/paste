import {styled, css} from '@twilio-paste/styling-library';

export const AttachedRadioButtonGroupWrapper = styled.span(
  css({
    // NOTE: allow hover and focus indication to remain visible on all sides of a button despite
    // sibling elements being rendered immediately adjacent under the attached styles
    '& > label:hover': {
      zIndex: 1,
    },
    '& > label:focus-within': {
      zIndex: 2,
    },
    '& > label:first-of-type': {
      '& > span': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
      },
    },
    '& > label:not(:first-of-type):not(:last-of-type)': {
      '& > span': {
        borderRadius: 0,
        marginLeft: '1px',
      },
    },
    '& > label:last-of-type': {
      '& > span': {
        marginLeft: '1px',
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
      },
    },
  })
);

export const UnattachedRadioButtonGroupWrapper = styled.span(
  css({
    '& > label:first-of-type': {
      marginLeft: 'space0',
    },
    '& > label:not(:first-of-type)': {
      marginLeft: 'space40',
    },
  })
);
