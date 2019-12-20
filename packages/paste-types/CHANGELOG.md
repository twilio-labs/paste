# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [2.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/types@2.1.2...@twilio-paste/types@2.2.0) (2019-12-19)


### Features

* **Flex:** add Flex component package ([#204](https://github.com/twilio-labs/paste/issues/204)) ([74877c4](https://github.com/twilio-labs/paste/commit/74877c4b0b260c5c6451bf9eb95c2baf3b1b7751))
* **style-props:** create the style-props package ([2bc21e9](https://github.com/twilio-labs/paste/commit/2bc21e9fb685e598710e2a4ff89114f2b6287b2f))





## [2.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/types@2.1.1...@twilio-paste/types@2.1.2) (2019-12-05)

**Note:** Version bump only for package @twilio-paste/types





## [2.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/types@2.1.0...@twilio-paste/types@2.1.1) (2019-11-20)

**Note:** Version bump only for package @twilio-paste/types





# [2.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/types@2.0.1...@twilio-paste/types@2.1.0) (2019-11-18)


### Features

* **card:** card component ([#145](https://github.com/twilio-labs/paste/issues/145)) ([9049c5f](https://github.com/twilio-labs/paste/commit/9049c5f8953b8ebee68596fedbcd58f6054ef166))





## [2.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/types@2.0.0...@twilio-paste/types@2.0.1) (2019-11-12)


### Bug Fixes

* **types:** add styled-system types dep ([#164](https://github.com/twilio-labs/paste/issues/164)) ([c235734](https://github.com/twilio-labs/paste/commit/c235734337b37acf23bf3fffacd39df9df02ff54))





# [2.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/types@1.1.0...@twilio-paste/types@2.0.0) (2019-11-11)


### Features

* **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))


### BREAKING CHANGES

* **icons:** removed all the inherited icons since we're moving to a new system

* chore(icons): update icon list for storybook

* fix(spinner): use new icon

* fix(storybook): use new icon for story

* fix(story): button icons should be 24px

* fix: adjust icon size tokens

* feat: add iconSizes as separate key in theme-tokens

* feat(icons): icons package to use tokens and update icons

* fix(spinner): update to use tokens and new icons

* fix(button): use correct spinner size

* fix(icons): major icons package fixes

- huge overhaul to build process
- now uses rollup
- builds into cjs and esm directories
- made the package publishable to npm
- moved svg folder out of src, now src only holds react stuff
- updated scripts to use new paths and cleaned up the code
- programmatically generates rollup config from the icon-list command

* chore: add new icons dist folders to gitignore

* fix: spinner and button icon usage

* feat(icons): add rollup icon list cache file

* fix(core-bundle): sort packages for consistent builds

* chore: use `esm` instead of `es` in rollup for correctness

* chore: yarn.lock

* fix(spinner): lint error

* chore(icons): move rollup icon list

* chore(spinner): use types package in story

* fix(spinner): swap out destructured props for explicit props





# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/types@1.0.0...@twilio-paste/types@1.1.0) (2019-10-31)


### Features

* update types package to styled-system v5 format ([#154](https://github.com/twilio-labs/paste/issues/154)) ([117c41e](https://github.com/twilio-labs/paste/commit/117c41e463b11440582e740c28cc067c06d16e67))





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
