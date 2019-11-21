# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.1.0...@twilio-paste/core@1.1.1) (2019-11-20)


### Bug Fixes

* remap console semibold to medium font weight ([#195](https://github.com/twilio-labs/paste/issues/195)) ([c01f6b3](https://github.com/twilio-labs/paste/commit/c01f6b30cb0d9d9f24b1a8556b07bee8060f9052))





# [1.1.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.0.1...@twilio-paste/core@1.1.0) (2019-11-18)


### Features

* **card:** card component ([#145](https://github.com/twilio-labs/paste/issues/145)) ([9049c5f](https://github.com/twilio-labs/paste/commit/9049c5f8953b8ebee68596fedbcd58f6054ef166))





## [1.0.1](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@1.0.0...@twilio-paste/core@1.0.1) (2019-11-12)


### Bug Fixes

* paragraph package deps incorrect ([90ad6bc](https://github.com/twilio-labs/paste/commit/90ad6bca9628b2ac85990053d738c92450b4c798))





# [1.0.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@0.2.0...@twilio-paste/core@1.0.0) (2019-11-11)


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





# [0.2.0](https://github.com/twilio-labs/paste/compare/@twilio-paste/core@0.1.0...@twilio-paste/core@0.2.0) (2019-10-31)


### Bug Fixes

* **anchor:** export types and add tests ([#153](https://github.com/twilio-labs/paste/issues/153)) ([4086ee2](https://github.com/twilio-labs/paste/commit/4086ee28da829820ca8f791e4bddf2768bd8b2f9))


### Features

* **core:** add typography ([593de2a](https://github.com/twilio-labs/paste/commit/593de2a4e1511220c2845b48ff35201382c1f4f1))





# 0.1.0 (2019-10-29)


### Features

* **core:** a core bundle ([#138](https://github.com/twilio-labs/paste/issues/138)) ([f6ab2eb](https://github.com/twilio-labs/paste/commit/f6ab2eb924c29235d6889fb55960c788b96fdf01))
