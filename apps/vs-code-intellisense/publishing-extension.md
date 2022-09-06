## Publishing Extension

We will publish the vscode extension to the [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode) so others can find, download, and use your extension.

First, We need to install the [vsce](https://github.com/microsoft/vscode-vsce) command-line tool for packaging and publishing VS Code extensions. Let’s install it:

```sh
npm install -g vsce
```

Note: until we write nicer scripts, you may need to sudo this

### Security Concerns

`vsce` will not publish extensions that contain user-provided SVG images.

The publishing tool checks the following constraints:

- The icon provided in package.json may not be an SVG.
- The badges provided in the package.json may not be SVGs unless they are from [trusted badge providers](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).
- Image URLs in README.md and CHANGELOG.md need to resolve to https URLs.
- Images in README.md and CHANGELOG.md may not be SVGs unless they are from [trusted badge providers](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).

### Get a Personal Access Token

Visual Studio Code uses `Azure DevOps` for its Marketplace services. This means that authentication, hosting, and management of extensions are provided through Azure DevOps. Therefore we need to create a new account in [Azure DevOps](https://azure.microsoft.com/en-gb/services/devops/).

`vsce` can only publish extensions using Personal Access Tokens (PAT). Since PATs expire within 3 months, we likely need to create these from time to time. Make sure to join the existing [paste-plugins organization](https://dev.azure.com/paste-plugins/) by asking for an email invite from the team in Slack.

Next, create a personal access [token for this organization](https://dev.azure.com/paste-plugins/_usersSettings/tokens):

- Fill in a Token Name, like `paste-vs-code-plugin`
- Set Organization to `All accessible organizations`
- Optionally extend its expiration date to `90 days`
- Set Scopes to `Custom defined`
- Click `Show all scopes` at the bottom of the panel
- Choose the `Marketplace > Manage` scope (it will auto select Read and Publish for you)

![Create a Personal Access Token](https://github.com/twilio-labs/paste/blob/main/apps/vs-code-intellisense/assets/create-personal-access-token.png)

Select `Create` and you'll be presented with your newly created Personal Access Token. **Copy it and save it somewhere safe**, you'll need it to create a publisher.

### Marketplace Publisher Account

A publisher is an identity who can publish extensions to the VS Code Marketplace. Each extension must include the publisher's name in its package.json [file](https://code.visualstudio.com/api/references/extension-manifest).

Join the [TwilioPaste](https://marketplace.visualstudio.com/manage/publishers/twiliopaste) Publisher via user ID invite. Email invites are broken, so you need to get your User ID by visiting the [marketplace homepage](https://marketplace.visualstudio.com/) and hovering over your username on the top right. Give the User ID to a colleague in Slack to add you to the Publisher account.

![Grab your User ID](https://github.com/twilio-labs/paste/blob/main/apps/vs-code-intellisense/assets/get-user-id.png)

#### Creating a new Publisher

To create a new publisher, go to the Visual Studio Marketplace publisher [management page](https://marketplace.visualstudio.com/manage).

![Create a Publisher](https://github.com/twilio-labs/paste/blob/main/apps/vs-code-intellisense/assets/create-a-publisher.png)

### Publishing

Last, we can test our publisher's personal access token by the following command:

```sh
vsce login <publisher name>
```

![vsce login](https://github.com/twilio-labs/paste/blob/main/apps/vs-code-intellisense/assets/vsce-login-done.png)

### Publish an extension

Now, we can publish an extension using `vsce` with the `publish` command:

```sh
vsce publish --no-yarn
```

We can auto-increment an extension's version number when we publish by specifying the [SemVer](https://semver.org) compatible number to increment: `major`, `minor`, or `patch`.

For example, if you want to update an extension's version from 1.0.0 to 1.1.0, you would specify `minor`:

```sh
vsce publish minor
```

Great! This will modify the extension's `package.json` version attribute before publishing the extension.

Also we can just specify the version:

```sh
vsce publish 2.0.1
```

## Go further

- Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
- [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VSCode extension marketplace.
- Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
