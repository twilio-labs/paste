import * as React from 'react';
import {Heading} from '@twilio-paste/heading';
import {Text} from '@twilio-paste/text';
import {PopoverContainer, PopoverButton, Popover} from '@twilio-paste/popover';
import {useUID} from '@twilio-paste/uid-library';
import {Box} from '@twilio-paste/box';
import {Separator} from '@twilio-paste/separator';
import {Anchor} from '@twilio-paste/anchor';
import {Button} from '@twilio-paste/button';
import {ThumbsUpIcon} from '@twilio-paste/icons/esm/ThumbsUpIcon';
import {ThumbsDownIcon} from '@twilio-paste/icons/esm/ThumbsDownIcon';
import {EditIcon} from '@twilio-paste/icons/esm/EditIcon';
import {trackCustomEvent} from 'gatsby-plugin-google-analytics';
import {SimpleStorage} from '../../../utils/SimpleStorage';

type RatingProps = {
  likePage: (event: React.MouseEvent) => void;
  dislikePage: (event: React.MouseEvent) => void;
};

const UnratedPage: React.FC<RatingProps> = ({likePage, dislikePage}) => (
  <>
    <Heading as="h4" variant="heading40">
      Rate this page
    </Heading>
    <Text as="p" marginBottom="space50">
      Let us know how we&apos;re doing! Please rate this page:
    </Text>
    <Button variant="link" onClick={likePage}>
      <ThumbsUpIcon size="sizeIcon50" decorative={false} title="Like this page" />
      It&apos;s useful!
    </Button>
    <Box as="span" marginLeft="space60">
      <Button variant="link" onClick={dislikePage}>
        <ThumbsDownIcon size="sizeIcon50" decorative={false} title="Dislike this page" />
        It has issues
      </Button>
    </Box>
  </>
);

const LikedPage: React.FC<RatingProps> = () => (
  <>
    <Button variant="link" disabled>
      <ThumbsUpIcon size="sizeIcon50" decorative={false} title="Like this page" />
      It&apos;s useful!
    </Button>
    <Separator orientation="horizontal" verticalSpacing="space30" />
    <Text as="span">
      You&apos;re the best! Thanks for helping us improve.{' '}
      <span role="img" aria-label="raised hands emoji">
        🙌
      </span>
    </Text>
  </>
);

const DislikedPage: React.FC<RatingProps> = () => (
  <>
    <Button variant="link" disabled>
      <ThumbsDownIcon size="sizeIcon50" decorative={false} title="Dislike this page" />
      It has issues
    </Button>
    <Separator orientation="horizontal" verticalSpacing="space30" />
    <Text as="p" marginBottom="space20">
      Thank you for helping us improve!{' '}
      <span role="img" aria-label="raised hands emoji">
        🙌
      </span>
    </Text>
    <Text as="p">
      For questions and suggestions, please{' '}
      <Anchor href="https://github.com/twilio-labs/paste/discussions">create a Github discussion</Anchor>.
    </Text>
  </>
);

// Returns the window pathname in the browser, empty string on the server
const usePathname = (): string => {
  if (typeof window == 'undefined' || !window.location || !window.location.pathname) {
    return '';
  }
  return window.location.pathname;
};

export const FeedbackPopover: React.FC = () => {
  const pathname = usePathname();
  const localStorageKey = `page-rating-${pathname}`;
  const popoverId = useUID();
  const [pageRating, setPageRating] = React.useState<string>(SimpleStorage.get(localStorageKey) || '');

  const likePage = React.useCallback((): void => {
    SimpleStorage.set(localStorageKey, 'like');
    setPageRating('like');
    trackCustomEvent({
      category: 'page-rating',
      label: pathname,
      action: 'like-page',
    });
  }, []);

  const dislikePage = React.useCallback((): void => {
    SimpleStorage.set(localStorageKey, 'dislike');
    setPageRating('dislike');
    trackCustomEvent({
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
      <PopoverContainer baseId={popoverId} placement="left-start">
        <PopoverButton variant="secondary">
          <EditIcon size="sizeIcon20" decorative /> Rate this page
        </PopoverButton>
        <Popover aria-label="Give us feedback popover panel">
          <ShownComponent likePage={likePage} dislikePage={dislikePage} />
        </Popover>
      </PopoverContainer>
    </Box>
  );
};
