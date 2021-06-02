# Package Resolution Reasoning

This document serves as notes for why certain packages needed a resolution line in our package.json files.
[Why would you want to use selective version resolution?](https://classic.yarnpkg.com/en/docs/selective-version-resolutions/#toc-why-would-you-want-to-do-this)

## "websocket-extensions": "^0.1.4"

Reason: [vulnerability](https://github.com/twilio-labs/paste/pull/483)

```
- Hoisted from "_project_#websocket-driver#websocket-extensions"
- Hoisted from "_project_#@twilio-paste#website#gatsby#webpack-dev-server#sockjs#websocket-driver#websocket-extensions"
- Hoisted from "_project_#@twilio-paste#website#gatsby#webpack-dev-server#sockjs#faye-websocket#websocket-driver#websocket-extensions"
```

Fix blocked on [this PR](https://github.com/faye/websocket-driver-node/pull/37). Maintainer recommends using yarn resolution instead. Even after a fix would be applied, we would need to wait for Gatsby to upgrade this package as well.

## "graphql-playground-middleware-express": "^1.7.18"

Reason: [vulnerability](https://github.com/twilio-labs/paste/pull/494)

```
- Hoisted from "_project_#@twilio-paste#website#gatsby#graphql-playground-middleware-express"
```

At this time, the latest Gatsby version does not have the correct version of this package.

## "meow": "^10.0.0"

Reason: [vulnerability](https://github.com/twilio-labs/paste/pull/1511)

```
- Hoisted from "_project_#@twilio-paste#codemods#meow"
```

At this time, various verions of Meow are used in other dependencies:

- changesets
- manypkg
- chromatic
- conventional-changelog-writer
- conventional-commits-parser
- conventional-recommended-bump
- get-pkg-rep
- git-raw-commits
- git-semver-tags
- lpad-align
