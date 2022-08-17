## Publishing Extension

We will publish the vscode extension to the [VS Code Extension Marketplace](https://marketplace.visualstudio.com/vscode) so others can find, download, and use your extension.

First, We need to install the [vsce](https://github.com/microsoft/vscode-vsce) command-line tool for packaging and publishing  VS Code extensions. Let’s install it:

```sh
npm install -g vsce
```

### Security Concerns

`vsce` will not publish extensions that contain user-provided SVG images.

The publishing tool checks the following constraints:
- The icon provided in package.json may not be an SVG.
- The badges provided in the package.json may not be SVGs unless they are from [trusted badge providers](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).
- Image URLs in README.md and CHANGELOG.md need to resolve to https URLs.
- Images in README.md and CHANGELOG.md may not be SVGs unless they are from [trusted badge providers](https://code.visualstudio.com/api/references/extension-manifest#approved-badges).

### Get a Personal Access Token

Visual Studio Code uses `Azure DevOps` for its Marketplace services. This means that authentication, hosting, and management of extensions are provided through Azure DevOps. Therefore we need to create a new account in [Azure DevOps](https://azure.microsoft.com/en-gb/services/devops/).

`vsce` can only publish extensions using Personal Access Tokens. First we need to [create your own organization](https://docs.microsoft.com/en-gb/azure/devops/organizations/accounts/create-organization?view=azure-devops) in Azure DevOps. I will create like `twilio-labs`. 

Next, from your organization's home page (for example: https://dev.azure.com/twilio-labs), open the User settings dropdown menu next to your profile image and select Personal access tokens:

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/organization-page.png" alt="Personal Access Token" />

On the `Personal Access Tokens` page, select `New Token` to create a new Personal Access Token and set the following details:
- Access Token Name
- Set Organization to All accessible organizations
- Optionally extend its expiration date
- Set Scopes to `Custom defined` and choose the `Marketplace > Manage` scope

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/create-personal-access-token.png" alt="Create Personal Access Token" />

Select `Create` and you'll be presented with your newly created Personal Access Token. Copy it, you'll need it to create a publisher.

### Create a publisher

A publisher is an identity who can publish extensions to the VS Code Marketplace. Each extension must include the publisher's name in its package.json [file](https://code.visualstudio.com/api/references/extension-manifest).

Now We need to create a new publisher through the Visual Studio Marketplace publisher [management page](https://marketplace.visualstudio.com/manage).

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/create-a-publisher.png" alt="Create a publisher" />

Last, we can test our publisher's personal access token by the following command:

```sh
vsce login <publisher name>
```

<img src="https://raw.githubusercontent.com/twilio-labs/paste/docs/readme-publishing/apps/vs-code-intellisense/assets/vsce-login-done.png" alt="vsce login" />

### Publish an extension

Now, we can publish an extension using `vsce` with the `publish` command:

```sh
vsce publish
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

 * Reduce the extension size and improve the startup time by [bundling your extension](https://code.visualstudio.com/api/working-with-extensions/bundling-extension).
 * [Publish your extension](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) on the VSCode extension marketplace.
 * Automate builds by setting up [Continuous Integration](https://code.visualstudio.com/api/working-with-extensions/continuous-integration).
