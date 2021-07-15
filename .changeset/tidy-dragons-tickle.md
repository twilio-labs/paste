---
'@twilio-paste/pagination': patch
'@twilio-paste/core': patch
---

[Pagination] Update styles for better dark theme accessibility

`PaginationArrow` hover and focus:

- border-color: colorBorderPrimary changed to colorBorderPrimaryStronger
- color: colorTextLink changed to colorTextLinkStronger

`PaginationNumber`:

- border-color: added colorBorderPrimaryStronger border on hover and focus
- color: colorTextLink changed to colorTextLinkStronger on hover and focus
- isCurrent:
  - background-color: colorBackgroundPrimaryWeakest changed to colorBackgroundPrimary Stronger
  - color: colorTextLink changed to colorTextWeakest
  - isCurrent hover and focus uses same background-colors and colors
