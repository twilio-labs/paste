---
'@twilio-paste/box': minor
'@twilio-paste/text': minor
'@twilio-paste/styling-library': minor
'@twilio-paste/style-props': minor
'@twilio-paste/theme': patch
'@twilio-paste/core': minor
---

[Box] Update tests to account for `stylis` parser change in jest emotion matchers.

- also updated style fiunction

[Text] Update tests to account for `stylis` parser change in jest emotion matchers.

[Styling Library] Upgrade to Emotion v11

- replace `@emotion/core` with `@emotion/react`
- bump `@emotion/styled` to v11
- remove `emotion`, remove `emotion-themeing`
  - both packages now included with `@emotion/react`

[Theme] Small edit to cased named imports and usage of `keyof` in types.
