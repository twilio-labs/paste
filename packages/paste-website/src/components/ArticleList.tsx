import * as React from 'react';
import { Stack } from '@twilio-paste/stack';
import { useUID } from '@twilio-paste/uid-library';

import { Article } from './Article';
import type { ArticleData } from '../utils/api';

export interface ArticleListProps {
  articles: ArticleData[];
}

const ArticleList: React.FC<React.PropsWithChildren<ArticleListProps>> = ({ articles }) => {
  return (
    <Stack orientation="vertical" spacing="space70">
      {articles.map((article) => (
        <Article key={useUID()} article={article} />
      ))}
    </Stack>
  );
};

ArticleList.displayName = 'ArticleList';

export { ArticleList };
