import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';
import {Breadcrumb, BreadcrumbItem} from '../../breadcrumb';
import {SidebarCategoryRoutes} from '../../../constants';
import {P, InlineCode} from '../../Typography';
import {getHumanizedNameFromPackageName} from '../../../utils/RouteUtils';

const getCategoryNameFromRoute = (categoryRoute: string): string => {
  switch (categoryRoute) {
    case SidebarCategoryRoutes.COMPONENTS:
      return 'Components';
    case SidebarCategoryRoutes.PRIMITIVES:
      return 'Primitives';
    case SidebarCategoryRoutes.LAYOUT:
      return 'Layout';
    case SidebarCategoryRoutes.TOKENS:
      return 'Tokens';
    case SidebarCategoryRoutes.FORM:
      return 'Form Elements';
    default:
      return 'Layout';
  }
};

const ComponentHeaderBasic: React.FC<{
  name: string;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
}> = ({name, categoryRoute}) => (
  <>
    <Breadcrumb>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      <BreadcrumbItem to={categoryRoute}>{getCategoryNameFromRoute(categoryRoute)}</BreadcrumbItem>
    </Breadcrumb>
    <Box display="flex" alignItems="center" marginBottom="space70">
      <Heading as="h1" variant="heading10" marginBottom="space0">
        {getHumanizedNameFromPackageName(name)}
      </Heading>
    </Box>
  </>
);

interface ComponentHeaderProps {
  children?: React.ReactElement;
  name: string;
  categoryRoute: typeof SidebarCategoryRoutes[keyof typeof SidebarCategoryRoutes];
  githubUrl: string;
  storybookUrl: string;
  abstractUrl: string;
  data?: [
    {
      node: {
        name: string;
        category: string;
        description: string;
        status: string;
        sideEffects: boolean;
        version: string;
      };
    }
  ];
  mdxData: {
    fileAbsolutePath: string;
    frontmatter: {
      slug: string;
      title: string;
    };
  };
}

const PackageValue: React.FC<{}> = ({children}) => {
  return (
    <Text as="dd" display="inline-block">
      {children}
    </Text>
  );
};

const PackageLabel: React.FC<{}> = ({children}) => {
  return (
    <Text as="dt" display="inline-block" color="colorTextWeak" css={{width: '80px'}}>
      {children}
    </Text>
  );
};

const PackageInstallSnippet: React.FC<{}> = ({children}) => {
  return <InlineCode>{children}</InlineCode>;
};

const ComponentHeader: React.FC<ComponentHeaderProps> = ({
  name,
  categoryRoute,
  githubUrl,
  storybookUrl,
  abstractUrl,
  data,
  mdxData,
}) => {
  if (data == null || data[0] == null || data[0].node == null) {
    return <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />;
  }
  const {description, status, name: packageName, version} = data[0].node;

  const menu = useMenuState();
  const handleClick = (): void => menu.hide();

  const gitHubPagesPath = 'https://github.com/twilio-labs/paste/blob/master/packages/paste-website/src/pages';
  const absolutePath = mdxData.fileAbsolutePath;
  const filename = absolutePath.substring(absolutePath.lastIndexOf('/') + 1);
  const gitHubURL = `${gitHubPagesPath + mdxData.frontmatter.slug}/${filename}`;
  const gitHubIssueUrl = `https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title=${mdxData.frontmatter.title.replace(
    /\s+/g,
    '%20'
  )}`;

  return (
    <>
      <ComponentHeaderBasic categoryRoute={categoryRoute} name={name} />
      {categoryRoute.includes('/form/') ? null : <P variant="lead">{description}</P>}
      <Box as="dl" marginBottom="space100">
        {status && (
          <Box marginBottom="space20">
            <PackageLabel>Status</PackageLabel>
            <PackageValue>{status}</PackageValue>
          </Box>
        )}
        <Box marginBottom="space20">
          <PackageLabel>Version</PackageLabel>
          <PackageValue>{version}</PackageValue>
        </Box>
        <Box marginBottom="space20">
          <PackageLabel>Sources</PackageLabel>
          <PackageValue>
            <Box display="inline" marginRight="space30">
              <Anchor href={githubUrl}>Github</Anchor>
            </Box>
            <Box display="inline" marginRight="space30">
              {storybookUrl != null ? <Anchor href={storybookUrl}>Storybook</Anchor> : null}
            </Box>
            {abstractUrl != null ? <Anchor href={abstractUrl}>Abstract</Anchor> : null}
          </PackageValue>
        </Box>
        <Box marginBottom="space60">
          <PackageLabel>Install</PackageLabel>
          <PackageValue>
            <PackageInstallSnippet>yarn add {packageName}</PackageInstallSnippet> &mdash; or &mdash;{' '}
            <PackageInstallSnippet>yarn add @twilio-paste/core</PackageInstallSnippet>
          </PackageValue>
        </Box>
        <Box marginBottom="space20">
          <MenuButton {...menu} variant="link">
            Feedback <ChevronDownIcon decorative />
          </MenuButton>
          <Menu {...menu} aria-label="Feedback">
            <MenuItem {...menu} href={gitHubURL} onClick={handleClick}>
              Edit this page on GitHub
            </MenuItem>
            <MenuItem {...menu} href="https://github.com/twilio-labs/paste/discussions/new" onClick={handleClick}>
              Have a question? Submit a Github Discussion
            </MenuItem>
            <MenuItem {...menu} href={gitHubIssueUrl} onClick={handleClick}>
              Find a bug? Submit a Github Issue
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </>
  );
};

export {ComponentHeader};
