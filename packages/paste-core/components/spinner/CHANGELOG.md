# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.3](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.2...@twilio-paste/spinner@1.1.3) (2019-12-20)

**Note:** Version bump only for package @twilio-paste/spinner





## [1.1.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.1...@twilio-paste/spinner@1.1.2) (2019-12-19)

**Note:** Version bump only for package @twilio-paste/spinner





## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.1.0...@twilio-paste/spinner@1.1.1) (2019-12-05)


### Bug Fixes

* **spinner:** export the prop types with the component ([#206](https://github.com/twilio-labs/paste/issues/206)) ([e073184](https://github.com/twilio-labs/paste/commit/e073184dbec47ae4572732b2962cf28e8521adb4))





# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.2...@twilio-paste/spinner@1.1.0) (2019-11-20)


### Features

* **icons:** make decorative required + icon docs ([#165](https://github.com/twilio-labs/paste/issues/165)) ([15ccbc2](https://github.com/twilio-labs/paste/commit/15ccbc2e0f259d60af83bf8503c8ee18a1191cb8))





## [1.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.1...@twilio-paste/spinner@1.0.2) (2019-11-18)


### Bug Fixes

* correct button heights add new default icon size ([#186](https://github.com/twilio-labs/paste/issues/186)) ([2e54478](https://github.com/twilio-labs/paste/commit/2e54478f975cb1930bd6d397d1214947db97c2a3))





## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@1.0.0...@twilio-paste/spinner@1.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/spinner





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.2.0...@twilio-paste/spinner@1.0.0) (2019-11-11)


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





# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.1.6...@twilio-paste/spinner@0.2.0) (2019-10-29)


### Features

* upgrading to styled-system v5 ([#18](https://github.com/twilio-labs/paste/issues/18)) ([2b3ebd8](https://github.com/twilio-labs/paste/commit/2b3ebd8b2f701a0c6e8b75ab6978ba936814f455))





## [0.1.6](https://github.com/twilio-labs/paste/compare/@twilio-paste/spinner@0.1.5...@twilio-paste/spinner@0.1.6) (2019-09-16)

**Note:** Version bump only for package @twilio-paste/spinner





## 0.1.5 (2019-08-15)


### Bug Fixes

* change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
* run eslint across the right files and fix any issues that arise. ([#21](https://github.com/twilio-labs/paste/issues/21)) ([2fcc872](https://github.com/twilio-labs/paste/commit/2fcc872))
