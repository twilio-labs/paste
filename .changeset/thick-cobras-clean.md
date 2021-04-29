---
'@twilio-paste/design-tokens': minor
'@twilio-paste/core': minor
---

Design tokens that are named using the light / dark nomenclature are being deprecated in favour of a new set of tokens based on a weak / strong nomenclature to accommodate light and dark modes.

If you are using these tokens with our `Box` or `Text` component, these will still work for now but we will be removing them in the 2021.11.16 release of Paste. In most cases replacing `dark` for `strong` and `light` for `weak` is all that is required to transition.

Design tokens that are being deprecated include:

| old                                   | new                                    |
| ------------------------------------- | -------------------------------------- |
| color-background-dark                 | color-background-strong                |
| color-background-darker               | color-background-stronger              |
| color-background-darkest              | color-background-strongest             |
| color-background-inverse-light        | color-background-inverse-weak          |
| color-background-neutral-lightest     | color-background-neutral-weakest       |
| color-background-success-lightest     | color-background-success-weakest       |
| color-background-warning-lightest     | color-background-warning-weakest       |
| color-background-error-dark           | color-background-error-strong          |
| color-background-error-lightest       | color-background-error-weakest         |
| color-background-primary-darkest      | color-background-primary-strongest     |
| color-background-primary-darker       | color-background-primary-stronger      |
| color-background-primary-dark         | color-background-primary-strong        |
| color-background-primary-light        | color-background-primary-weak          |
| color-background-primary-lighter      | color-background-primary-weaker        |
| color-background-primary-lightest     | color-background-primary-weakest       |
| color-background-destructive-darkest  | color-background-destructive-strongest |
| color-background-destructive-darker   | color-background-destructive-stronger  |
| color-background-destructive-dark     | color-background-destructive-strong    |
| color-background-destructive-light    | color-background-destructive-weak      |
| color-background-destructive-lighter  | color-background-destructive-weaker    |
| color-background-destructive-lightest | color-background-destructive-weakest   |

| old                              | new                                |
| -------------------------------- | ---------------------------------- |
| color-border-dark                | color-border-strong                |
| color-border-light               | color-border-weak                  |
| color-border-lighter             | color-border-weaker                |
| color-border-inverse-darker      | color-border-inverse-weaker        |
| color-border-inverse-lighter     | color-border-inverse-stronger      |
| color-border-inverse-lightest    | color-border-inverse-strongest     |
| color-border-primary-darkest     | color-border-primary-strongest     |
| color-border-primary-darker      | color-border-primary-stronger      |
| color-border-primary-dark        | color-border-primary-strong        |
| color-border-primary-light       | color-border-primary-weak          |
| color-border-primary-lighter     | color-border-primary-weaker        |
| color-border-neutral-light       | color-border-neutral-weak          |
| color-border-success-light       | color-border-success-weak          |
| color-border-success-lightest    | color-border-success-weakest       |
| color-border-warning-light       | color-border-warning-weak          |
| color-border-warning-lightest    | color-border-warning-weakest       |
| color-border-error-dark          | color-border-error-strong          |
| color-border-error-light         | color-border-error-weak            |
| color-border-error-lightest      | color-border-error-weakest         |
| color-border-destructive-darkest | color-border-destructive-strongest |
| color-border-destructive-darker  | color-border-destructive-stronger  |
| color-border-destructive-dark    | color-border-destructive-strong    |
| color-border-destructive-light   | color-border-destructive-weak      |
| color-border-destructive-lighter | color-border-destructive-weaker    |

| old                               | new                                |
| --------------------------------- | ---------------------------------- |
| shadow-border-lighter             | shadow-border-weaker               |
| shadow-border-light               | shadow-border-weak                 |
| shadow-border-primary-lighter     | shadow-border-primary-weaker       |
| shadow-border-primary-light       | shadow-border-primary-weak         |
| shadow-border-primary-dark        | shadow-border-primary-strong       |
| shadow-border-primary-darker      | shadow-border-primary-stronger     |
| shadow-border-destructive-lighter | shadow-border-destructive-weaker   |
| shadow-border-destructive-light   | shadow-border-destructive-weak     |
| shadow-border-destructive-darker  | shadow-border-destructive-stronger |
| shadow-border-error-light         | shadow-border-error-weak           |
| shadow-border-error-dark          | shadow-border-error-strong         |
| shadow-border-inverse-darker      | shadow-border-inverse-weaker       |
| shadow-border-inverse-light       | shadow-border-inverse-strong       |
| shadow-border-inverse-lightest    | shadow-border-inverse-strongest    |

| old                                | new                                  |
| ---------------------------------- | ------------------------------------ |
| color-text-link-light              | color-text-link-weak                 |
| color-text-link-dark               | color-text-link-strong               |
| color-text-link-darker             | color-text-link-stronger             |
| color-text-link-destructive-light  | color-text-link-destructive-weak     |
| color-text-link-destructive-dark   | color-text-link-destructive-strong   |
| color-text-link-destructive-darker | color-text-link-destructive-stronger |
| color-text-error-light             | color-text-error-weak                |
| color-text-error-dark              | color-text-error-strong              |
| color-text-warning-dark            | color-text-warning-strong            |
