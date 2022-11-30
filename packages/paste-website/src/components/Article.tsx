import * as React from 'react';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';
import type {AnchorProps} from '@twilio-paste/anchor';

import {SiteLink} from './SiteLink';
import {ArticleAuthor} from './ArticleAuthor';
import type {ArticleFrontMatter, ArticleNode} from '../../types/Article';

export interface ArticleProps {
  article: ArticleNode;
}

export type ArticleLinkProps = Pick<ArticleFrontMatter, 'slug' | 'external_link'> & Pick<AnchorProps, 'children'>;
export const ArticleLink: React.FC<React.PropsWithChildren<ArticleLinkProps>> = ({external_link, slug, children}) => {
  if (external_link)
    return (
      <Anchor href={external_link} showExternal>
        {children}
      </Anchor>
    );
  return <SiteLink to={slug}>{children}</SiteLink>;
};

const Article: React.FC<React.PropsWithChildren<ArticleProps>> = ({article}) => {
  return (
    <Card padding="space70">
      <Heading as="h2" variant="heading20" marginBottom="space0">
        <ArticleLink slug={article.frontmatter.slug} external_link={article.frontmatter.external_link}>
          {article.frontmatter.title}
        </ArticleLink>
      </Heading>
      <ArticleAuthor
        author={article.frontmatter.author}
        avatar={article.frontmatter.avatar}
        date={article.frontmatter.date}
        machineDate={article.frontmatter.machineDate}
      />
      <Paragraph marginBottom="space0">
        {article.excerpt}{' '}
        <ArticleLink slug={article.frontmatter.slug} external_link={article.frontmatter.external_link}>
          Continue reading
        </ArticleLink>
      </Paragraph>
    </Card>
  );
};

Article.displayName = 'Article';

export {Article};
