import * as React from 'react';
import { Box } from '@twilio-paste/box';
import { Heading } from '@twilio-paste/heading';

import { Breadcrumb, BreadcrumbItem } from '../breadcrumb';
import { ArticleAuthor } from '../ArticleAuthor';

interface ArticleHeaderProps {
  title: string;
  author: string;
  avatar: string;
  date: string;
  machineDate: string;
  authorLink: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, author, avatar, date, authorLink, machineDate }) => {
  const articleDate = new Date(date);
  const formattedDate = new Date(
    articleDate.getUTCFullYear(),
    articleDate.getUTCMonth(),
    articleDate.getUTCDate(),
  ).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href="/blog">Blog</BreadcrumbItem>
      </Breadcrumb>
      <Box marginBottom="space70">
        <Heading as="h1" variant="heading10" marginBottom="space0">
          {title}
        </Heading>
        <ArticleAuthor
          author={author}
          avatar={avatar}
          date={formattedDate}
          machineDate={machineDate}
          authorLink={authorLink}
        />
      </Box>
    </>
  );
};

export { ArticleHeader };
