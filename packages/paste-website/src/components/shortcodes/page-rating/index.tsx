import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {Box} from '@twilio-paste/box';
import {Anchor} from '@twilio-paste/anchor';
import {Button} from '@twilio-paste/button';
import {ThumbsUpIcon} from '@twilio-paste/icons/esm/ThumbsUpIcon';
import {ThumbsDownIcon} from '@twilio-paste/icons/esm/ThumbsDownIcon';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {SimpleStorage} from '../../../utils/SimpleStorage';

const gitHubPagesPath = 'https://github.com/twilio-labs/paste/blob/main/packages/paste-website/src/pages';

interface PageRatingProps {
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

export const PageRating: React.FC<PageRatingProps> = ({data}) => {
  const [pageRated, setPageRated] = React.useState<boolean>(SimpleStorage.get(window.location.pathname) != null);
  const absolutePath = data.fileAbsolutePath;
  const filename = absolutePath.slice(Math.max(0, absolutePath.lastIndexOf('/') + 1));
  const gitHubURL = `${gitHubPagesPath + data.frontmatter.slug}/${filename}`;

  const likePage = (): void => {
    SimpleStorage.set(window.location.pathname, 'like');
    setPageRated(true);
    trackCustomEvent({
      category: 'Doc Page Rating',
      action: 'click-rating',
      label: 'Like',
    });
  };
  const dislikePage = (): void => {
    SimpleStorage.set(window.location.pathname, 'dislike');
    setPageRated(true);
    trackCustomEvent({
      category: 'Doc Page Rating',
      action: 'click-rating',
      label: 'Dislike',
    });
  };

  return (
    <Box marginTop="space160">
      <Heading as="h2" variant="heading20">
        Share your feedback
      </Heading>
      <Text as="p" fontSize="fontSize30">
        Let us know how we’re doing! Please rate this page:
        <br />
        {pageRated ? (
          <Text as="span">
            You’re the best! Thanks for helping us improve.{' '}
            <span role="img" aria-label="raised hands emoji">
              🙌
            </span>
          </Text>
        ) : (
          <>
            <Button variant="link" size="icon" onClick={likePage}>
              <ThumbsUpIcon decorative="false" title="Like this page" />
            </Button>
            <Button variant="link" size="icon" onClick={dislikePage}>
              <ThumbsDownIcon decorative="false" title="Dislike this page" />
            </Button>
          </>
        )}
      </Text>
      <Box marginTop="space40">
        <Text as="p">
          <strong>See a mistake?</strong> <Anchor href={gitHubURL}>Edit this page</Anchor>
        </Text>
        <Text as="p">
          <strong>Have a question or suggestion?</strong>{' '}
          <Anchor href="https://github.com/twilio-labs/paste/discussions">Create a Github Discussion</Anchor>
        </Text>
      </Box>
    </Box>
  );
};
