import {InputElement} from '@twilio-paste/input';
import {styled, css} from '@twilio-paste/styling-library';
import type {ComboboxProps} from '../types';

// Fixes chevron overlapping really long text
// Extra right padding is removed when autocomplete is true
/* eslint-disable emotion/syntax-preference */
const ComboboxInputSelect = styled(InputElement)<ComboboxProps>((props) =>
  css({
    paddingRight: !props.autocomplete ? 'space100' : null,
  })
);
/* eslint-enable */

export {ComboboxInputSelect};
