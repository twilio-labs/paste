import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {Card} from '@twilio-paste/card';
import {Paragraph} from '@twilio-paste/paragraph';
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
  const [pageRating, setPageRating] = React.useState<string>(SimpleStorage.get(window.location.pathname) || '');
  const absolutePath = data.fileAbsolutePath;
  const filename = absolutePath.slice(Math.max(0, absolutePath.lastIndexOf('/') + 1));
  const gitHubURL = `${gitHubPagesPath + data.frontmatter.slug}/${filename}`;

  const likePage = (): void => {
    SimpleStorage.set(window.location.pathname, 'like');
    setPageRating('like');
    trackCustomEvent({
      category: 'page-rating',
      label: window.location.pathname,
      action: 'like-page',
    });
  };
  const dislikePage = (): void => {
    SimpleStorage.set(window.location.pathname, 'dislike');
    setPageRating('dislike');
    trackCustomEvent({
      category: 'page-rating',
      label: window.location.pathname,
      action: 'dislike-page',
    });
  };

  return (
    <Box marginTop="space160">
      <Card>
        <Heading as="h2" variant="heading20">
          Share your feedback
        </Heading>
        <Text as="p" marginBottom="space50">
          Let us know how we’re doing! Please rate this page:
        </Text>
        <Box as="div" marginBottom="space70">
          {pageRating != '' ? (
            <Text as="span">
              You’re the best! Thanks for helping us improve.{' '}
              <span role="img" aria-label="raised hands emoji">
                🙌
              </span>
            </Text>
          ) : (
            <>
              <Button variant="link" onClick={likePage}>
                <ThumbsUpIcon size="sizeIcon50" decorative="false" title="Like this page" />
                It's useful!
              </Button>
              <Box as="span" marginLeft="space60">
                <Button variant="link" onClick={dislikePage}>
                  <ThumbsDownIcon size="sizeIcon50" decorative="false" title="Dislike this page" />
                  It has issues
                </Button>
              </Box>
            </>
          )}
        </Box>
        <Box marginTop="space40">
          <Text as="p">
            <strong>See a mistake?</strong> <Anchor href={gitHubURL}>Edit this page</Anchor>
          </Text>
          <Text as="p">
            <strong>Have a question or suggestion?</strong>{' '}
            <Anchor href="https://github.com/twilio-labs/paste/discussions">Create a Github Discussion</Anchor>
          </Text>
        </Box>
      </Card>
    </Box>
  );
};
