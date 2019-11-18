# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [3.0.2](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.1...@twilio-paste/design-tokens@3.0.2) (2019-11-18)


### Bug Fixes

* **design-tokens:** change color-text-link token values ([#172](https://github.com/twilio-labs/paste/issues/172)) ([f0a215c](https://github.com/twilio-labs/paste/commit/f0a215cb283f74f268387e744099e337c6489ebd))
* **design-tokens:** update lightest console color palette ([#174](https://github.com/twilio-labs/paste/issues/174)) ([98b625c](https://github.com/twilio-labs/paste/commit/98b625cc0998381b9a9d43cf590d1bc9cbbed6b6))
* correct button heights add new default icon size ([#186](https://github.com/twilio-labs/paste/issues/186)) ([2e54478](https://github.com/twilio-labs/paste/commit/2e54478f975cb1930bd6d397d1214947db97c2a3))
* **design-tokens:** update some blues, reds, and focus shadow ([#185](https://github.com/twilio-labs/paste/issues/185)) ([98d70cc](https://github.com/twilio-labs/paste/commit/98d70cc046db0284e151fab7f427ee16b8874c4a))





## [3.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@3.0.0...@twilio-paste/design-tokens@3.0.1) (2019-11-12)

**Note:** Version bump only for package @twilio-paste/design-tokens





# [3.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@2.5.0...@twilio-paste/design-tokens@3.0.0) (2019-11-11)


### Features

* **icons:** delete old icons, add new streamline icons ([#129](https://github.com/twilio-labs/paste/issues/129)) ([571791d](https://github.com/twilio-labs/paste/commit/571791ded8ee4c55bb5a3dbcebee4b17b2c7c826))
* **typography:** heading component ([#149](https://github.com/twilio-labs/paste/issues/149)) ([4e033e6](https://github.com/twilio-labs/paste/commit/4e033e6f3e58566107271b18057532e768420827))


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





# [2.5.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@2.4.0...@twilio-paste/design-tokens@2.5.0) (2019-10-29)


### Bug Fixes

* token formatter tests ([#102](https://github.com/twilio-labs/paste/issues/102)) ([1599e1e](https://github.com/twilio-labs/paste/commit/1599e1e89b2d64eb2a2898f0240199ac36428f5b))


### Features

* design token and theme package documentation ([#103](https://github.com/twilio-labs/paste/issues/103)) ([3060113](https://github.com/twilio-labs/paste/commit/30601132ccdec8f0fee79e0f293c80d0c0cff335))





# [2.4.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/design-tokens@2.3.0...@twilio-paste/design-tokens@2.4.0) (2019-09-16)


### Bug Fixes

* **design-tokens:** fix SendGrid token values ([#71](https://github.com/twilio-labs/paste/issues/71)) ([396fccf](https://github.com/twilio-labs/paste/commit/396fccf))
* **design-tokens:** typo on word `borderr` ([#56](https://github.com/twilio-labs/paste/issues/56)) ([6b5edd1](https://github.com/twilio-labs/paste/commit/6b5edd1))
* **tokens:** correct the box shadow tokens category and type ([#95](https://github.com/twilio-labs/paste/issues/95)) ([fe0f946](https://github.com/twilio-labs/paste/commit/fe0f946))


### Features

* **tokens:** Add box-shadow and line-height tokens ([#35](https://github.com/twilio-labs/paste/issues/35)) ([706643b](https://github.com/twilio-labs/paste/commit/706643b))





# 2.3.0 (2019-08-15)


### Bug Fixes

* **design-tokens:** resolve path correctly ([6f89111](https://github.com/twilio-labs/paste/commit/6f89111))
* **tokens:** added missing SG token values ([#22](https://github.com/twilio-labs/paste/issues/22)) ([23d7385](https://github.com/twilio-labs/paste/commit/23d7385))
* change [@paste](https://github.com/paste) scope to [@twilio-paste](https://github.com/twilio-paste) ([#2](https://github.com/twilio-labs/paste/issues/2)) ([1d8d2ff](https://github.com/twilio-labs/paste/commit/1d8d2ff))
* run eslint across the right files and fix any issues that arise. ([#21](https://github.com/twilio-labs/paste/issues/21)) ([2fcc872](https://github.com/twilio-labs/paste/commit/2fcc872))
* swap light/dark border token colors ([0a99d3c](https://github.com/twilio-labs/paste/commit/0a99d3c))
* Type-checking fixes ([#12](https://github.com/twilio-labs/paste/issues/12)) ([be02450](https://github.com/twilio-labs/paste/commit/be02450))


### Features

* change the z-index scale to 10s ([#34](https://github.com/twilio-labs/paste/issues/34)) ([ed05089](https://github.com/twilio-labs/paste/commit/ed05089))
* ComponentHeader component, component overview fixes, more ([#20](https://github.com/twilio-labs/paste/issues/20)) ([875e124](https://github.com/twilio-labs/paste/commit/875e124))
* **website:** Add text color token accessibility rating to the token page ([#28](https://github.com/twilio-labs/paste/issues/28)) ([74f12d1](https://github.com/twilio-labs/paste/commit/74f12d1))
* **website:** Add the tokens page ([#19](https://github.com/twilio-labs/paste/issues/19)) ([878d3c5](https://github.com/twilio-labs/paste/commit/878d3c5))
* **website:** Callout component ([#25](https://github.com/twilio-labs/paste/issues/25)) ([e4a3d00](https://github.com/twilio-labs/paste/commit/e4a3d00))
