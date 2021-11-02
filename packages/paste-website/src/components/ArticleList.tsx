import * as React from 'react';
import {Stack} from '@twilio-paste/stack';
import {useUID} from '@twilio-paste/uid-library';
import {Article} from './Article';
import type {ArticleNode} from '../../types/Article';

export interface ArticleListProps {
  articles: [
    {
      node: ArticleNode;
    }
  ];
}

const ArticleList: React.FC<ArticleListProps> = ({articles}) => {
  return (
    <Stack orientation="vertical" spacing="space70">
      {articles.map((article) => (
        <Article key={useUID()} article={article.node} />
      ))}
    </Stack>
  );
};

ArticleList.displayName = 'ArticleList';

export {ArticleList};
