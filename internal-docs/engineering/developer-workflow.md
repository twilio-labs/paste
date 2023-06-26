# Developer Workflow

- [Developer Workflow](#developer-workflow)
  - [Assigning work](#assigning-work)
  - [Branching](#branching)
    - [Branch naming convention](#branch-naming-convention)
  - [Do the work, make the change](#do-the-work-make-the-change)
  - [Commit your work](#commit-your-work)
    - [General format](#general-format)
    - [Commit types](#commit-types)
      - [Breaking changes](#breaking-changes)
    - [Avoid commits that touch more than one Paste package](#avoid-commits-that-touch-more-than-one-paste-package)
  - [Changesets make Changelogs](#changesets-make-changelogs)
    - [Versioning](#versioning)
    - [Creating a changeset](#creating-a-changeset)
      - [A note on changesets](#a-note-on-changesets)
  - [Pull Requests](#pull-requests)
    - [Draft PRs](#draft-prs)
    - [Merging your work](#merging-your-work)
      - [Kodiak](#kodiak)
      - [Avoid merge commits.](#avoid-merge-commits)
      - [Rebase and merge](#rebase-and-merge)
      - [Squash and merge](#squash-and-merge)

Here on the Design Systems Engineering team we have a pretty well defined way of working. Below outlines a fairly typical workflow you might take in completing your work.

## Assigning work

All our work is stored in Jira and we have an [active sprint](https://issues.corp.twilio.com/secure/RapidBoard.jspa?rapidView=748&projectKey=DSYS) with stories for you to pick up in the “To Do” column. We aim for our stories to be well defined that meet our [“definition of ready”](../process/definition-of-ready.md) and can be worked on by anyone on the team.

We work in 2 week sprints.

Pick a ticket that you feel comfortable working on, assign it to yourself to let others know you’re working on it, and pull it into the “In-progress” column. Try to limit in-progress tickets to 1 or 2 at a time.

## Branching

Before you start work, create a new branch in git. If you don’t know what that means, Atlassian has a pretty great tutorial section on [basic git workflows](https://www.atlassian.com/git/tutorials). We never work on, or push to the main branch.

Most important is that the new branch is created from the latest version of the “main” branch. While it is possible to rebase your branch over the main branch, starting with the latest code helps alleviate additional conflicts you may encounter.

If your branch is failing on tests, types, storybook, or on the doc site then make sure to build the project with `yarn build`. While it isn’t always necessary to run `yarn build`, we typically need to when swapping branches that add new code that we need to run, like a new component.

### Branch naming convention

There isn’t one. You do you. Pick something that makes sense to you. Some approaches you might like to take if you are unsure where to start:

- Branch names based on type of work, and the package you are working on
  - chore/storybook
  - fix/button
  - feat/modal
- Branch names based on the package and planned work
  - button/new-styles
  - website/accessibility-section
- Branch names based on Jira ticket names
  - DSYS-2345-do-the-thing

## Do the work, make the change

Self explanatory.

## Commit your work

We encourage you to commit early and often. Don’t lose your work.

When creating your commit messages we follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention. This helps us keep a clear commit history, indicating what package you worked on, what type of work was carried out, and what your change was. Generally speaking, the most important things to remember are:

### General format

type(package): title of work or short description

Detailed description of the work if it is warranted

### Commit types

- Feat: Feature, generally additive, large or net new
- Fix: Small change, mostly bug fixes to existing code
- Chore: House cleaning, internal changes that have no customer facing effects
- Docs: Documentation
- Test: Tests

Some examples might include:

- feat(modal): add a new variant
- fix(button): address the regression in focus status color contrast
- docs(combobox): update examples for async data

#### Breaking changes

We aim to do as few breaking changes as possible but actively maintained software projects sometimes find them unavoidable. A breaking change is when the consumer of the package **_must_** perform a change to **_their_** code in order to update the package version.

When we perform a breaking change we should follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer) and mark the commit clearly. Features and Fixes are the only commit types that allow for breaking changes.

### Avoid commits that touch more than one Paste package

This used to be more important when we used commit history to generate a changelog. Now it’s just a good housekeeping rule and makes it much easier to manage a clean commit history when it comes to merging your Pull Requests.

## Changesets make Changelogs

To help us version our components and create human readable [changelogs](https://keepachangelog.com/en/1.0.0/) we use a library called [changesets](https://github.com/atlassian/changesets).

### Versioning

A quick note about versioning. We follow the semver or [semantic versioning](https://semver.org/) convention.

A semantic version is represented by a period separated number in the format of x.x.x. The position of the number indicates the _type_ of version. Starting from left to right, you have:

- **Major version:** Often denotes a complete rewrite of the public facing API, or a breaking change to a consumers implementation. More plainly, as a consumer of your package I probably need to change something in my code to work with the updated version. This should be clearly marked as a **Breaking Change** following [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/#commit-message-with-description-and-breaking-change-footer) conventions.
- **Minor version:** Often represents new or additional features. Can sometimes be a large improvement to an existing feature such as a performance optimization. As a consumer of your package, I don’t need to do anything.
- **Patch version:** More often than not this is a small change or bug fix to existing features. As a consumer of your package, I don’t need to do anything.

### Creating a changeset

Each changeset is an entry into a changelog. The changeset can be shared across packages if the same log or change description makes sense for each independent package. Otherwise you’ll want a changeset for each package.

To create a changeset run:

```
yarn changeset
```

Select the package you made the change to. Select the type of change you made, Major, Minor or Patch. Write a clear description of the change you made, and what effect it will have on the consumer. Don’t be afraid of longform descriptions, this can help consumers understand how to better work with your package or what changes they need to make or can take advantage of in their application.

Include the name of the package in your changeset description. E.g.

```
[Button] added the spin prop to make zoosh
```

#### A note on changesets

Each change you make to a package that is **also** bundled into the @twilio-paste/core package, **must have** a changeset that applies to both the package and Core. Check the [package.json file of Core](https://github.com/twilio-labs/paste/blob/main/packages/paste-core/core-bundle/package.json) to determine whether the package you are working on also gets bundled into core.

By tagging Core onto each changeset of a package that is bundled into Core, we create a [changelog for Core](https://github.com/twilio-labs/paste/blob/main/packages/paste-core/core-bundle/CHANGELOG.md) that includes all relevant information about each change that was made to one of its dependent packages.

Your changeset might look something like:

```yml
---
'@twilio-paste/radio-group': patch
'@twilio-paste/core': patch
---

[RadioGroup] Value is added as a prop used specifically
```

## Pull Requests

Once you have committed your work, along with your changeset, push your branch to GitHub and create a Pull Request, or PR.

A Pull Request is a request to the repository maintainers to “pull” your changes into the main codebase and product feature set.

We title our PRs based on the same commit message convention mentioned above.

In the body of the PR we outline the changes we’ve made. What to look for when testing our changes. What feedback we’re looking for.

### Draft PRs

We ask that you create your PR using the GitHub UI, and select making a “Draft” PR whilst you are actively working on your code. This will prevent certain checks from running which are billed on a per run basis.

Only when you are confident your code is ready for review and you want to run the full suite of checks should you mark your PR as **“ready for review”**.

You should expect at least one reviewer to approve your PR before you can merge. It is your responsibility to request that review and get your code merged. You can place a friendly request for review in the #plz-design-systems Slack channel. If your PR changes any styles, or is a new component, a design review is required. You should assign a Product Designer in the Chromatic UI.

### Merging your work

Once you have two approving reviews (✅) from the review team, including one Leads approval, and all of the PR checks are passing, you are ready to merge.

The goal when merging into the main branch is to create a clear history of exactly what happened, to what package, in small increments. No one needs to understand how you got there, so don’t include all the commits and working history. We only need to know what the result of the PR was.

To merge your branch into the main branch it must first be up to date with the latest commits on main. This is so our tests are re-run against the last changes made, and we ensure a clean new version of our packages.

#### Kodiak

To help you with this, we use a tool called Kodiak to manage the merge queue. Kodiak honors all of our branch protection rules before it is allowed to merge a PR.

By default, a PR is created with the label `Do not merge`. If this label is present Kodiak will not be allowed to merge.

Once you have all your reviews and are ready to merge your work, you can add the `🚀 merge it` label. Kodiak will then handle keeping the branch up to date, and waiting for CI checks to pass, before merging safely into the main branch.

#### Avoid merge commits.

Generally avoid merging main into your feature branch. It creates a useless and meaningless commit, and makes it much harder to create a clean merge into main.

Rebase your branch onto main. This will always create a more consistent changeset as it will re-play your changes on top of the latest code that appears in the main branch.

#### Rebase and merge

If you have a clean commit history, one commit per package, clearly written with no working commits in your history, it is safe to rebase and merge your PR onto main.

This should also be used when you have multiple changes across many packages, as we would like a commit per package in our commit history.

This will play you changes on top of the latest changes to main. It will not create new commits SHAs. This can also be useful as platforms like Vercel can use the SHA to know if it is safe to perform an instant deploy of our websites without having to perform a new build, which can take time.

#### Squash and merge

If you don’t have a clean commit history, and your PR only touches a single package, you can safely use the squash and merge option.

This will take multiple commits and squash them into a single, new commit.

This will create a new SHA and will cause tools like Vercel to treat your changes as if it’s never seen them before and create new builds.
