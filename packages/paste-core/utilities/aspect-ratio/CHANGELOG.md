# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/aspect-ratio@1.0.1...@twilio-paste/aspect-ratio@1.0.2) (2019-11-18)

**Note:** Version bump only for package @twilio-paste/aspect-ratio





## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/aspect-ratio@1.0.0...@twilio-paste/aspect-ratio@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/aspect-ratio





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/aspect-ratio@0.2.1...@twilio-paste/aspect-ratio@1.0.0) (2019-11-11)


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





## [0.2.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/aspect-ratio@0.2.0...@twilio-paste/aspect-ratio@0.2.1) (2019-10-31)

**Note:** Version bump only for package @twilio-paste/aspect-ratio





# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/aspect-ratio@0.1.1...@twilio-paste/aspect-ratio@0.2.0) (2019-10-29)


### Features

* **website:** aspect-ratio docs page ([#104](https://github.com/twilio-labs/paste/issues/104)) ([7a78689](https://github.com/twilio-labs/paste/commit/7a78689891468180929bb3cea45207ac09699f81))
* upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))





## 0.1.1 (2019-09-16)


### Bug Fixes

* **website:** composable do-dont, add anchor examples ([#81](https://github.com/twilio-labs/paste/issues/81)) ([a799f1b](https://github.com/twilio-labs/paste/commit/a799f1b))
