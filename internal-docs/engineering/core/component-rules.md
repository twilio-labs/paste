# Component rules [WIP]

Rules to abide by when designing UI components.

## All

Parent components should not affect the style of child components (i.e.: .mycomponent > div)

No component should be able to affect, interact with, modify or know about it’s children

Components should not define a width, and only define heights when there is no risk to resized text content.

Components should honour their default display property.

No component should have default outer margin or be concerned with where it is on the page

Components should accept all aria attributes and pass them down to the logical root so as not to hinder any accessibility minded developer

No business logic in any component, strictly presentational.

No english strings in components, all text must be passed in from the product side (for i18n).

## Static - Components that are only displayed

Events are not passed through

## Interactive - Components users interact with

All Events are passed through

## Primitives - A component built from raw html elements

Should allow more style pass throughs

Smallest possible interface

## Composed - A component built from multiple primitives

A component should be built from primitives but if the api is too restrictive fall back to raw html + design tokens

Should cover most but not all use cases

## Logic Containers

Pass rendered attributes to sub components

Sub components should be swappable (bring your own)

Should not pass down styles but logic attributes ie. disabled, selected, on/off
