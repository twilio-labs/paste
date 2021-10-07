/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 * Based on the excellent work done in https://github.com/chakra-ui/chakra-ui
 */
export const PseudoPropStyles = {
  _hover: '&:hover',
  _active: '&:active, &[data-active=true]',
  _focus: '&:focus',
  _focus_placeholder: '&:focus::placeholder',
  _visited: '&:visited',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _disabled:
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _checked: '&:checked, &[aria-checked=true]',
  _mixed: '&:indeterminate, &[aria-checked=mixed]',
  _selected: '&[aria-selected=true]',
  _selected_hover: '&[aria-selected=true]:hover',
  _selected_focus: '&[aria-selected=true]:focus',
  _selected_focusVisible: '&[aria-selected=true]:focus-visible',
  _invalid: '&:invalid, &[aria-invalid=true]',
  _pressed: '&[aria-pressed=true]',
  _readOnly: '&[aria-readonly=true], &[readonly]',
  _first: '&:first-of-type',
  _last: '&:last-of-type',
  _expanded: '&[aria-expanded=true]',
  _grabbed: '&[aria-grabbed=true]',
  _notFirst: '&:not(:first-of-type)',
  _notLast: '&:not(:last-of-type)',
  _groupHover: '[role=group]:hover &',
  _before: '&:before',
  _after: '&:after',
  _focusWithin: '&:focus-within',
  _focusVisible: '&:focus-visible',
  _placeholder: '&::placeholder',
  __moz_focus_inner: '&::-moz-focus-inner',
  __webkit_datetime_edit: '&::-webkit-datetime-edit',
  __webkit_calendar_picker_indicator_hover: '&::-webkit-calendar-picker-indicator:hover',
};
