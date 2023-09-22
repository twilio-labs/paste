import { Anchor } from '@twilio-paste/anchor';
import type { AnchorProps } from '@twilio-paste/anchor';
import { Card } from '@twilio-paste/card';
import { Heading } from '@twilio-paste/heading';
import { Paragraph } from '@twilio-paste/paragraph';
import * as React from 'react';

import type { ArticleData } from '../utils/api';
import { ArticleAuthor } from './ArticleAuthor';
import { SiteLink } from './SiteLink';

export interface ArticleProps {
  article: ArticleData;
}

export type ArticleLinkProps = Pick<ArticleData, 'slug' | 'external_link'> & Pick<AnchorProps, 'children'>;
export const ArticleLink: React.FC<React.PropsWithChildren<ArticleLinkProps>> = ({ external_link, slug, children }) => {
  if (external_link)
    return (
      <Anchor href={external_link} showExternal>
        {children}
      </Anchor>
    );
  return <SiteLink href={slug}>{children}</SiteLink>;
};

const Article: React.FC<React.PropsWithChildren<ArticleProps>> = ({ article }) => {
  return (
    <Card padding="space70">
      <Heading as="h2" variant="heading20" marginBottom="space0">
        <ArticleLink slug={article.slug} external_link={article.external_link}>
          {article.title}
        </ArticleLink>
      </Heading>
      <ArticleAuthor
        author={article.author}
        avatar={article.avatar}
        date={article.date}
        machineDate={article.machineDate}
      />
      <Paragraph marginBottom="space0">
        {article.excerpt}{' '}
        <ArticleLink slug={article.slug} external_link={article.external_link}>
          Continue reading
        </ArticleLink>
      </Paragraph>
    </Card>
  );
};

Article.displayName = 'Article';

export { Article };
