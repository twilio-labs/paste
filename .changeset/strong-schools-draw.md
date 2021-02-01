---
'@twilio-paste/nextjs-template': patch
---

As the NextJs template is used as a standalone application in a Codesandbox, it cannot inherit the base tsconfig from the the root of the monorepo. This is because it does not exist when deployed to Codesandbox
