import * as React from 'react';
import { Heading } from '@twilio-paste/heading';
import { Text } from '@twilio-paste/text';
import { PopoverContainer, PopoverButton, Popover } from '@twilio-paste/popover';
import { useUID } from '@twilio-paste/uid-library';
import { Box } from '@twilio-paste/box';
import { Stack } from '@twilio-paste/stack';
import { Separator } from '@twilio-paste/separator';
import { Anchor } from '@twilio-paste/anchor';
import { Button } from '@twilio-paste/button';
import { ThumbsUpIcon } from '@twilio-paste/icons/esm/ThumbsUpIcon';
import { ThumbsDownIcon } from '@twilio-paste/icons/esm/ThumbsDownIcon';
import { SupportIcon } from '@twilio-paste/icons/esm/SupportIcon';

import { SimpleStorage } from '../../../utils/SimpleStorage';
import { useLocationPathname } from '../../../utils/RouteUtils';
import { event } from '../../../lib/gtag';

type RatingProps = {
  likePage: (event: React.MouseEvent) => void;
  dislikePage: (event: React.MouseEvent) => void;
};

export const UnratedPage: React.FC<React.PropsWithChildren<RatingProps>> = ({ likePage, dislikePage }) => {
  const pathname = useLocationPathname();
  return (
    <>
      <Heading as="h4" variant="heading40">
        Rate this page
      </Heading>
      <Text as="p" marginBottom="space50">
        Let us know how we&apos;re doing! Please rate this page:
      </Text>
      <Stack orientation="horizontal" spacing="space60">
        <Button variant="link" onClick={likePage}>
          <ThumbsUpIcon size="sizeIcon50" decorative={false} title="Like this page" />
          It&apos;s useful!
        </Button>
        <Button variant="link" onClick={dislikePage}>
          <ThumbsDownIcon size="sizeIcon50" decorative={false} title="Dislike this page" />
          It has issues
        </Button>
      </Stack>
      <Separator orientation="horizontal" verticalSpacing="space50" />
      <Text as="p">
        Spot an issue?{' '}
        <Anchor
          href={`https://github.com/twilio-labs/paste/issues/new?assignees=&labels=Type%3A+Bug&template=bug_report.md&title=Spotted%20a%20documentation%20error%20on%20${pathname}`}
        >
          Let us know!
        </Anchor>
      </Text>
    </>
  );
};

export const LikedPage: React.FC<React.PropsWithChildren<RatingProps>> = () => (
  <>
    <Box display="flex" lineHeight="lineHeight50">
      <ThumbsUpIcon size="sizeIcon50" decorative={false} title="Like this page" />
      <Box as="span" marginLeft="space20">
        This page is useful!
      </Box>
    </Box>
    <Separator orientation="horizontal" verticalSpacing="space40" />
    <Text as="span">
      You&apos;re the best! Thanks for helping us improve.{' '}
      <span role="img" aria-label="raised hands emoji">
        🙌
      </span>
    </Text>
  </>
);

export const DislikedPage: React.FC<React.PropsWithChildren<RatingProps>> = () => (
  <>
    <Box display="flex" lineHeight="lineHeight50">
      <ThumbsDownIcon display="inline-block" size="sizeIcon50" decorative={false} title="Dislike this page" />
      <Box as="span" marginLeft="space20">
        This page has issues
      </Box>
    </Box>
    <Separator orientation="horizontal" verticalSpacing="space40" />
    <Text as="p" marginBottom="space40">
      Thank you for helping us improve!{' '}
      <span role="img" aria-label="raised hands emoji">
        🙌
      </span>
    </Text>
    <Text as="p">
      It would mean a lot to us if you could{' '}
      <Anchor href="https://github.com/twilio-labs/paste/discussions">create a Github discussion</Anchor> with your
      feedback so that we can make this page better. Thank you!
    </Text>
  </>
);

export const FeedbackPopover = (): JSX.Element => {
  const pathname = useLocationPathname();
  const localStorageKey = `page-rating${pathname}`;
  const popoverId = useUID();
  const [pageRating, setPageRating] = React.useState<string>(SimpleStorage.get(localStorageKey) || '');

  const likePage = React.useCallback((): void => {
    SimpleStorage.set(localStorageKey, 'like');
    setPageRating('like');
    event({
      category: 'page-rating',
      label: pathname,
      action: 'like-page',
    });
  }, []);

  const dislikePage = React.useCallback((): void => {
    SimpleStorage.set(localStorageKey, 'dislike');
    setPageRating('dislike');
    event({
      category: 'page-rating',
      label: pathname,
      action: 'dislike-page',
    });
  }, []);

  let ShownComponent = UnratedPage;
  if (pageRating === 'like') {
    ShownComponent = LikedPage;
  } else if (pageRating === 'dislike') {
    ShownComponent = DislikedPage;
  }

  return (
    <Box marginBottom="space90">
      <PopoverContainer baseId={popoverId} placement="left-start" data-cy="popover-container">
        <PopoverButton variant="secondary">
          <SupportIcon size="sizeIcon20" decorative /> Rate this page
        </PopoverButton>
        <Popover aria-label="Give us feedback popover panel">
          <ShownComponent likePage={likePage} dislikePage={dislikePage} />
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
