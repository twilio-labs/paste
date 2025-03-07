# Developing locally

- [Developing locally](#developing-locally)
  - [Prerequisites](#prerequisites)
  - [First time working on Paste](#first-time-working-on-paste)
  - [Environment variables](#environment-variables)
    - [Pull Environment variables](#pull-environment-variables)
      - [Theme designer](#theme-designer)
      - [Website](#website)
  - [Building packages](#building-packages)
  - [Repository structure](#repository-structure)
  - [Working on Packages that appear as a peer dependency of another package](#working-on-packages-that-appear-as-a-peer-dependency-of-another-package)
  - [Working on components](#working-on-components)
  - [Working on the docs site](#working-on-the-docs-site)
  - [Working on Remix (Theme Designer)](#working-on-remix-theme-designer)
  - [Working on Backend](#working-on-backend)

## Prerequisites

Before you begin there are some things that you will need to have installed, and some things that we recommend, but are not essential:

1. **[Git](https://git-scm.com/)** - distributed version control. This should be preinstalled on a Mac.
   1. `git config --global user.name “first last”`
   2. `git config --global user.email johndoe@example.com`
2. **[Xcode Command Line Tools](https://developer.apple.com/xcode/)** - Used to build some Apple software and node packages.
3. **[Homebrew](https://brew.sh/)** (optional)- A package manager for Mac software
   1. Follow the installation instructions on the [Homebrew website](https://brew.sh/)
4. **NodeJS v20.5.x**- A JavaScript runtime for running JavaScript applications
   1. Node is preinstalled on Macs but you might need to manage the version that is installed.
5. **[NVM](https://github.com/nvm-sh/nvm)** (optional) - A Node version manager that can help installing and managing Node versions on your machine
   1. Follow the [installation instructions on NVM](https://github.com/nvm-sh/nvm#installing-and-updating).
6. **[Yarn](https://classic.yarnpkg.com/en/)** - A package manager for node packages.
   1. Install via NPM instructions on the Yarn website [https://classic.yarnpkg.com/en/](https://classic.yarnpkg.com/en/)
   2. Paste currently uses v3.
7. **[Visual Studio Code](https://code.visualstudio.com/)** (optional) - Lightweight IDE that’s really good working with Typescript codebases.
   1. Check out the recommended extensions in the extensions tab.
   2. We supply some handy React code snippets in the Paste repo too
8. **Chrome, Edge, Firefox and Safari browsers** - Browsers we support.
9. **[iTerm2](https://iterm2.com/)** - (optional) Handy terminal with many features.
   1. We’re fans of zShell coupled with [Oh My Zsh!](https://ohmyz.sh/)
10. **[Connect to Github with SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)** - You'll need this to connect your local machine to Github and clone the Paste repo.
    1. Follow the [Github instructions to check if you have an existing SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/checking-for-existing-ssh-keys). If not, continue through the instructions to generate and add a new one.

## First time working on Paste

Once you have the prerequisites installed you will need to clone the repo, install the Paste dependencies, link the internal packages and build Paste packages.

First things first, you need to clone the [Paste repo](https://github.com/twilio-labs/paste) to your local machine using git. Using your terminal find somewhere where you’d like to install the code base to and then run:

```bash
git clone git@github.com:twilio-labs/paste.git
```

Then you are going to want to move into that directory or, change directory:

```bash
cd paste/
```

Once in the Paste repo you are going to need to install all the dependencies that we need for our tools. Using yarn type into the terminal

```bash
yarn
```

You should now have everything installed that is needed to run our tools. You’ll need to run the initial build of our packages to be able to develop locally. Type into the terminal:

```bash
yarn build
```

## Environment variables

To run the website locally you will need to have the following environment variable set. These can be managed via the [Vercel CLI](https://vercel.com/docs/cli).

You will need to request a login to Vercel via a Service Now ticket.

### Pull Environment variables

To pull the environment variables from Vercel, follow the documentation on the [Vercel CLI](https://vercel.com/docs/cli/env).

#### Theme designer

Create a `.env.local` file at the root of packages/paste-theme-designer/

Then add each environment variable with it’s value to the env file in the format of

```bash
DATADOG_CLIENT_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxx
```

<table>
  <tr>
   <td>CONTEXT
   </td>
   <td>Set to “development”. This replicates <a href="https://vercel.com/docs/projects/environment-variables/system-environment-variables">Vercel environment variables</a>
   </td>
  </tr>
  <tr>
   <td>DATADOG_APPLICATION_ID
   </td>
   <td>Datadog RUM app ID. You can get this from the dashboard chart <a href="https://app.datadoghq.com/dashboard/p79-36e-cxi/paste-monitoring-dashboard?fullscreen_paused=false&fullscreen_refresh_mode=sliding&fullscreen_section=edit&fullscreen_start_ts=1719073205976&fullscreen_widget=6572526642365602&refresh_mode=sliding">here</a>
   </td>
  </tr>
  <tr>
   <td>DATADOG_CLIENT_TOKEN
   </td>
   <td><a href="https://app.datadoghq.com/organization-settings/client-tokens">Datadog RUM client token</a>  (search Paste)
   </td>
  </tr>
</table>

#### Website

Create a `.env` (specifically different from theme designer) file at the root of packages/paste-website/

Then add each environment variable with it’s value to the env file in the format of

```bash
DATADOG_CLIENT_TOKEN=xxxxxxxxxxxxxxxxxxxxxxxxx
```

<table>
  <tr>
   <td>NEXT_PUBLIC_ENVIRONMENT_CONTEXT
   </td>
   <td>Set to development”. This replicates <a href="https://vercel.com/docs/projects/environment-variables/system-environment-variables#system-environment-variables">Vercel deployment context</a>
   </td>
  </tr>
  <tr>
   <td>NEXT_PUBLIC_DATADOG_APPLICATION_ID
   </td>
   <td>Datadog RUM app ID
   </td>
  </tr>
  <tr>
   <td>NEXT_PUBLIC_DATADOG_CLIENT_TOKEN
   </td>
   <td>Datadog RUM client token
   </td>
  </tr>
  <tr>
   <td>AIRTABLE_APIKEY
   </td>
   <td>API key for Airtable
   </td>
  </tr>
  <tr>
   <td>AIRTABLE_BASEID
   </td>
   <td>ID of the Airtable that contains our roadmap
   </td>
  </tr>
</table>

## Building packages

Due to Paste packages depending on each other, they must be built before you can work on them. This is because “package B” might depend on “package A”, but if “package A” isn’t built before working on “package B” then that dependency will be missing and the build or compilation of “package B” will fail.

Each package must have a “build” yarn script.

To run a build of every package, run the following command from the root paste directory:

```bash
yarn build
```

As we use yarn workspaces you can run a workspace command on a single package without building all packages in the repo. Run:

```bash
yarn workspace name-of-package build
```

## Repository structure

Paste is a monorepo. It means most of the packages and projects Paste distributes live in a single git repository. This helps with maintenance and catching bugs related to inter dependencies. It allows us to distribute independently versioned packages that have peer dependencies on each other, but work on them without actually publishing the latest versions to NPM.

For example, our Button depends on our Box package. Box depends on Theme, and Theme depends on Design Tokens. If you make a change to Design Tokens, it’s easier to observe and manage the side effects that it will have on dependent packages, if all packages are managed under a single repo.

We use [Nx](https://nx.dev/) and [Yarn workspaces](https://classic.yarnpkg.com/en/docs/workspaces/) to link all the internal dependencies together whilst working locally.

All packages and projects that rely on the latest version of components, live under the packages, apps, and templates directory.

<table>
  <tr>
   <td>packages/paste-core
   </td>
   <td>All React components, split into layout, primitives, and components
   </td>
  </tr>
  <tr>
   <td>packages/paste-codemods
   </td>
   <td><a href="https://github.com/facebook/codemod">Codemods</a> that allow the Paste team to write scripts that can be run on a consuming code base, that automatically make code changes.
   </td>
  </tr>
  <tr>
   <td>packages/paste-customization
   </td>
   <td>Customization provider will allow customers to change the look and feel of their Paste apps
   </td>
  </tr>
  <tr>
   <td>packages/paste-design-tokens
   </td>
   <td>Paste Design Language
   </td>
  </tr>
  <tr>
   <td>packages/paste-icons
   </td>
   <td>Paste icons
   </td>
  </tr>
  <tr>
   <td>packages/paste-libraries
   </td>
   <td>Third party libraries that Paste uses
   </td>
  </tr>
  <tr>
   <td>templates/paste-nextjs-template
   </td>
   <td>A create-next-app template to get started with Paste
   </td>
  </tr>
  <tr>
   <td>packages/paste-style-props
   </td>
   <td>Paste style props
   </td>
  </tr>
  <tr>
   <td>packages/paste-theme
   </td>
   <td>Paste theme provider and default themes
   </td>
  </tr>
  <tr>
   <td>packages/paste-theme-designer
   </td>
   <td>A web app to help Paste consumers design a custom theme
   </td>
  </tr>
  <tr>
   <td>packages/paste-types
   </td>
   <td>Typescript types for the Paste project
   </td>
  </tr>
  <tr>
   <td>packages/paste-website
   </td>
   <td>Paste documentation site
   </td>
  </tr>
</table>

## Working on Packages that appear as a peer dependency of another package

Sometimes a package will rely on another package as a peer dependency. When you modify a package that is listed as a peer dependency on another package, you must build that package to see the effect it will have.

If you don’t, you'll see the effect of the old compiled code and nothing will have changed.

To build a single package, run the workspace build command:

```bash
yarn workspace name-of-package build
```

## Working on components

To work on components you will need to work under the paste-core directory under packages, and run [Storybook](https://storybook.js.org/) locally. To start storybook run:

```bash
yarn start:storybook
```

Storybook is our testing and development playground, where we can see our components rendered in isolation from each other.

We have story sections for each component, each variant they can be displayed as, and in some instances, in each state the component can appear in. This is important as we use the stories for visual regression testing, more on that under the testing section.

When running Storybook, a new browser tab will automatically launch with the Storybook running. When you make any changes to any component, you will see the changes reflect live upon saving the file.

## Working on the docs site

To run the documentation website you will be working in the paste-website directory under packages. _Make sure you have built the latest version of Paste packages and have the environment variable set before you start._

Then run:

```bash
yarn start:website
```

## Working on [Remix (Theme Designer)](https://remix.twilio.design)

To run the Theme Designer web application you will be working in the paste-theme-designer directory under packages. _Make sure you have built the latest version of the Paste packages before you start._

Then run:

```bash
yarn start:theme-designer
```

## Working on Website Backend

This section covers how to setup the Supabase backend and configuring additional environment variables. This will enable development of AI assistant and generation scripts such as [generate-embeddings.ts](../../packages/paste-website/scripts/search/generate-embeddings.ts) 

### Prerequisites

You will need docker or a similar service in order to start the local supabase instance.

### Environment

To run the backend and develop all functionality of the website you will need to add additional variable in the `.env` file previously configured

**Note**: access can be granted internally to OpenAI via the Service portal

<table>
  <tr>
   <td>OPENAI_API_KEY
   </td>
   <td>The token used to interact with OpenAI
   </td>
  </tr>
  <tr>
   <td>OPENAI_API_SECRET
   </td>
   <td>The secret provided by OpenAI
   </td>
  </tr>
  <tr>
   <td>OPENAI_ASSISTANT_ID
   </td>
   <td>The assistant id for the OpenAI project
   </td>
  </tr>
  <tr>
   <td>SUPABASE_URL
   </td>
   <td>The url of the supabase backend you want to use. For local development is should map to <strong>http://127.0.0.1:54321</strong>
   </td>
  </tr>
  <tr>
   <td>SUPABASE_KEY
   </td>
   <td>This will be generated and output from the start command in `/apps/backend`. It can also be retrieved by running `npx supabase status` in the directory.
   </td>
  </tr>
  <tr>
   <td>GH_SERVICE_ACC_DISCUSSIONS_TOKEN
   </td>
   <td>Used for embeddings script, must be a token with read access to Paste repo discussions.
   </td>
  </tr>
  <tr>
   <td>ROLLBAR_ACCESS_TOKEN
   </td>
   <td>A dummy value can be used for local development e.g. "MOCK_TOKEN"
   </td>
  </tr>
</table>

### Running Supabase

Supabase is the data storage layer used by the application. We use it to store messages with the Paste AI Assistant and also storing embeddings used by our search functionality for pages and GitHub discussions.

With Docker or a similar service running, you can start supabase by running `start:backend:dev`. This will output details of the envirnment such as auth tokens used to connect to the APIs and URLs of the frontent and services.

You should be able to access the UI at http://localhost:54323.

Migrations should be applied by default. If there are no tables on startup run the `db:reset` command in the `apps/backend` directory.