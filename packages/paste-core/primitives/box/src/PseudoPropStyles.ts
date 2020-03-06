/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 * Based on the excellent work done in https://github.com/chakra-ui/chakra-ui
 */
export const PseudoPropStyles: {[key: string]: string} = {
  _hover: '&:hover',
  _active: '&:active, &[data-active=true]',
  _focus: '&:focus',
  _visited: '&:visited',
  _even: '&:nth-of-type(even)',
  _odd: '&:nth-of-type(odd)',
  _disabled:
    '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover',
  _checked: '&[aria-checked=true]',
  _mixed: '&[aria-checked=mixed]',
  _selected: '&[aria-selected=true]',
  _invalid: '&[aria-invalid=true]',
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
  _placeholder: '&::placeholder',
};
