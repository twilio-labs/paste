---
'@twilio-paste/base-radio-checkbox': patch
'@twilio-paste/checkbox': patch
'@twilio-paste/core': patch
---

[checkbox]

- Update the check icon to inherit color from `BaseRadioCheckbox`
- Update selectAll background color to default to `colorBackground`, and use `colorBackgroundPrimaryWeakest` when checked and not disabled or indeterminate and not disabled
- Update default color to `colorTextWeakest`
- Update hover text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
- Update focus text color to `colorTextWeakest` and border color to `colorBorderPrimaryStronger`
- Update active text color to `colorTextWeakest`
- Update checked text color to `colorTextInverse`
- Update invalid and hover border color to `colorBorderErrorStronger`
- Update checked and hover text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
- Update checked and focus text color to `colorTextWeakest` and background color to `colorBackgroundPrimaryStronger`
- Update checked and disabled text color to `colorTextWeakest`
- Update checked and invalid text color to `colorTextInverse`
- Update checked and invalid and hover background color to `colorBackgroundErrorStronger` and border color to `colorBorderErrorStronger`
