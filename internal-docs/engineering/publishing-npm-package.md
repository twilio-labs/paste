# Publishing NPM Package

Paste core uses [changesets](https://github.com/changesets/changesets) to manage versions and changelogs. It has great support for mono-repos and multipackage repositories, ideal for `@twilio-paste/core`.

Changesets has a great [GitHub action](https://github.com/changesets/action) that will manage the release by creating a PR, periodically pulling changes from main. No code is published to NPM until this PR is merged, which is controlled by the team.

The PR will always be called `Version Packages` and lists all the changes that have been made since the last release. The description will also update with the entries in the changesets from the PRs merged to easily see what will be getting released.

There is a step in the GitHub Action [on_merge_to_main](../../.github/workflows/on_merge_to_main.yml) with the name `Create Pull Request or Publish to npm`. This defines commands to run from [package.json](../../package.json) for what operation.

- version: this removes all of the temporary changeset files which are generated during development. It aggregates them all to a changelog entry.
- publish: responsible for publishing the package to NPM.
- commit: "chore(release): version packages" the commit message on squash and merge.