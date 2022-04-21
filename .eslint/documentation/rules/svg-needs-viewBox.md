# svg needs viewBox

Disallows svg elements which have no `viewBox` attribute

The viewBox attribute defines the position and dimension of an SVG viewport. [More details here.](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/viewBox)

Without a viewBox attribute, resizing of svgs is inconsistent.

## Rule Details

This rule produces an error for svg elements which have no `viewBox` attribute

Examples of **incorrect** code for this rule:

```tsx
/* paste-internal svg-needs-viewBox: "error" */

<svg role="img" width="100%" height="100%">
  <circle fill="currentColor" cx={10} cy={10} r={6.5} />
</svg>
```

Examples of **correct** code for this rule:

```tsx
/* paste-internal svg-needs-viewBox: "error" */

<svg role="img" width="100%" height="100%" viewBox="0 0 20 20">
  <circle fill="currentColor" cx={10} cy={10} r={6.5} />
</svg>
```

## When Not To Use It

There is no current use case for not using this rule.
