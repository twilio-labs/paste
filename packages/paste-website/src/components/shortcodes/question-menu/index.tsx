import * as React from 'react';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';
import {ChevronDownIcon} from '@twilio-paste/icons/esm/ChevronDownIcon';
import {Stack} from '@twilio-paste/stack';
import {Menu, MenuButton, MenuItem, useMenuState} from '@twilio-paste/menu';

export interface QuestionMenuProps {
  data: {
    fileAbsolutePath: string;
    frontmatter: {
      slug: string;
      title: string;
    };
    headings?: [
      {
        value: string;
        depth: number;
      }
    ];
  };
}

const QuestionMenu: React.FC<QuestionMenuProps> = ({data}) => {
  const menu = useMenuState();
  const handleClick = (): void => menu.hide();

  const gitHubPagesPath = 'https://github.com/twilio-labs/paste/blob/main/packages/paste-website/src/pages';
  const absolutePath = data.fileAbsolutePath;
  const filename = absolutePath.substring(absolutePath.lastIndexOf('/') + 1);
  const gitHubURL = `${gitHubPagesPath + data.frontmatter.slug}/${filename}`;
  const gitHubIssueUrl = `https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title=${data.frontmatter.title.replace(
    /\s+/g,
    '%20'
  )}`;

  return (
    <Box marginBottom="space90">
      <Stack orientation="vertical" spacing="space90">
        <MenuButton {...menu} variant="secondary">
          Ask a question <ChevronDownIcon decorative />
        </MenuButton>
        <Menu {...menu} aria-label="Feedback">
          <MenuItem {...menu} href="https://github.com/twilio-labs/paste/discussions/new" onClick={handleClick}>
            Have a question? Start a discussion
          </MenuItem>
          <MenuItem {...menu} href={gitHubIssueUrl} onClick={handleClick}>
            Find a bug? Submit an issue
          </MenuItem>
        </Menu>
        <Anchor href={gitHubURL}>Edit this page on GitHub</Anchor>
      </Stack>
    </Box>
  );
};

export {QuestionMenu};
