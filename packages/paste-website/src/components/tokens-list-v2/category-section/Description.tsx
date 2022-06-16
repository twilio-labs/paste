import * as React from 'react';
import {Paragraph} from '@twilio-paste/paragraph';
import {Anchor} from '@twilio-paste/anchor';
import {Box} from '@twilio-paste/box';

import {Callout, CalloutTitle, CalloutText} from '../../callout';
import {CATEGORY_DESCRIPTIONS} from '../constants';
import type {CategoryDescriptionMeta} from '../constants';

const DescriptionCallout: React.FC<{callout: CategoryDescriptionMeta['callout']}> = ({callout}) => {
  const calloutText = callout?.text || null;
  const calloutTitle = callout?.title || null;
  const calloutVariant = callout?.variant;

  return calloutText != null && calloutTitle != null ? (
    <Callout variant={calloutVariant}>
      <CalloutTitle>{calloutTitle}</CalloutTitle>
      <CalloutText>{calloutText}</CalloutText>
    </Callout>
  ) : null;
};

const LearnMoreAnchor: React.FC<{anchor: CategoryDescriptionMeta['paragraph']['anchor']}> = ({anchor}) => {
  const anchorText = anchor?.text;
  const anchorHref = anchor?.href;
  return anchorText != null && anchorHref != null ? <Anchor href={anchorHref}>{anchorText}</Anchor> : null;
};

export const Description: React.FC<{categoryKey: string}> = ({categoryKey}) => {
  const {paragraph, callout} = CATEGORY_DESCRIPTIONS[categoryKey];
  const paragraphText = paragraph?.text;

  const anchor = paragraph?.anchor;

  return (
    <Box paddingTop="space20">
      <Paragraph>
        {paragraphText} <LearnMoreAnchor anchor={anchor} />
      </Paragraph>
      <DescriptionCallout callout={callout} />
    </Box>
  );
};
