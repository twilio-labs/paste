import * as React from 'react';
import {Box} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';

interface QuestionMenuProps {
  data: {
    fileAbsolutePath: string;
    frontmatter: {
      slug: string;
      title: string;
    };
  };
}

const QuestionMenu: React.FC<QuestionMenuProps> = ({data}) => {
  const menu = useMenuState();
  const handleClick = (): void => menu.hide();

  const gitHubPagesPath = 'https://github.com/twilio-labs/paste/blob/master/packages/paste-website/src/pages';
  const absolutePath = data.fileAbsolutePath;
  const filename = absolutePath.substring(absolutePath.lastIndexOf('/') + 1);
  const gitHubURL = `${gitHubPagesPath + data.frontmatter.slug}/${filename}`;
  const gitHubIssueUrl = `https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title=${data.frontmatter.title.replace(
    /\s+/g,
    '%20'
  )}`;

  return (
    <Box marginBottom="space90">
      <MenuButton {...menu} variant="secondary">
        Ask a question <ChevronDownIcon decorative />
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
  );
};

export {QuestionMenu};
