# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 1.0.0 (2019-10-29)


### Bug Fixes

* allow 'auto' for marginLeft and marginRight ([#134](https://github.com/twilio-labs/paste/issues/134)) ([b892866](https://github.com/twilio-labs/paste/commit/b8928661558d6ec26dc76598aa479c9e35c9e890))


### Features

* **box:** polish and fix ([#125](https://github.com/twilio-labs/paste/issues/125)) ([d151bad](https://github.com/twilio-labs/paste/commit/d151badadfa4db8ade1425df9336e0155ce09619))
* finalise the Text component ([#151](https://github.com/twilio-labs/paste/issues/151)) ([b51c272](https://github.com/twilio-labs/paste/commit/b51c272cf420380f73c31c3474ebdf23cb7cad3a))
* upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))


### BREAKING CHANGES

* **box:** many Box API changes

* fix(theme-tokens): add sizes key for styled-system responsiveness

* fix(absolute): update to newer Box

* fix(types): allow for responsive values via array

* fix(box): update story and light tweaks to OverflowProps

* chore: update yarn.lock file

* fix(types): many more types fixes

refactor: moved ValueOf into types package

* fix(box): eslint error in story

* fix(box): using the correct BorderProps definition

fix: we shouldn't allow users to pass the `border` shorthand, it circumvents tokens

* fix: lint errors

* fix(website): update box docs

* fix(storybook): use theme breakpoints
