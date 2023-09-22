import type { StoryFn } from '@storybook/react';
import { Box } from '@twilio-paste/box';
import { CustomizationProvider } from '@twilio-paste/customization';
import { useTheme } from '@twilio-paste/theme';
import { Truncate } from '@twilio-paste/truncate';
import { useUID } from '@twilio-paste/uid-library';
import * as React from 'react';

import { Breadcrumb, BreadcrumbItem } from '../src';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
};

export const Anchors = (): React.ReactNode => {
  const uniqueLandmarkIdentifier = useUID();
  return (
    <Breadcrumb aria-label={`breadcrumb ${uniqueLandmarkIdentifier}`}>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
    </Breadcrumb>
  );
};

export const AnchorsAndCurrentPage = (): React.ReactNode => {
  const uniqueLandmarkIdentifier = useUID();
  return (
    <Breadcrumb aria-label={`breadcrumb ${uniqueLandmarkIdentifier}`}>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">Active Numbers</BreadcrumbItem>
      <BreadcrumbItem>Infrrd Germany hotline B</BreadcrumbItem>
    </Breadcrumb>
  );
};

AnchorsAndCurrentPage.storyName = 'Anchors and current page ';

export const AnchorsWithTruncation = (): React.ReactNode => {
  const uniqueLandmarkIdentifier = useUID();
  return (
    <Breadcrumb aria-label={`breadcrumb ${uniqueLandmarkIdentifier}`}>
      <BreadcrumbItem href="#">Phone Numbers</BreadcrumbItem>
      <BreadcrumbItem href="#">
        <Box as="span" display="inline-flex" maxWidth="size10">
          <Truncate title="Some very long text to truncate">Some very long text to truncate</Truncate>
        </Box>
      </BreadcrumbItem>
      <BreadcrumbItem>Infrrd Germany hotline B</BreadcrumbItem>
    </Breadcrumb>
  );
};

AnchorsWithTruncation.storyName = 'Anchors with truncation ';

export const CustomizationBreadcrumb: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  const uniqueLandmarkIdentifier = useUID();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        BREADCRUMB: { fontVariantNumeric: 'slashed-zero' },
        BREADCRUMB_ITEM: { fontWeight: 'fontWeightMedium' },
        BREADCRUMB_ANCHOR: {
          textDecoration: 'underline wavy',
          color: 'colorTextWeak',
          ':hover': { color: 'colorLinkStronger' },
        },
        BREADCRUMB_TEXT: { letterSpacing: '0.25rem' },
        BREADCRUMB_SEPARATOR: {
          color: 'colorTextBrandHighlight',
        },
      }}
    >
      <Breadcrumb aria-label={`breadcrumb ${uniqueLandmarkIdentifier}`}>
        <BreadcrumbItem href="#">0 Great grandparent</BreadcrumbItem>
        <BreadcrumbItem href="#">1 Grandparent</BreadcrumbItem>
        <BreadcrumbItem href="#">2 Parent</BreadcrumbItem>
        <BreadcrumbItem href="#">3 First child</BreadcrumbItem>
        <BreadcrumbItem>Child</BreadcrumbItem>
      </Breadcrumb>
    </CustomizationProvider>
  );
};

CustomizationBreadcrumb.storyName = 'Customized ';
CustomizationBreadcrumb.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};

export const CustomizationBreadcrumbWithCustomName: StoryFn = (_args, { parameters: { isTestEnvironment } }) => {
  const currentTheme = useTheme();
  const uniqueLandmarkIdentifier = useUID();
  return (
    <CustomizationProvider
      disableAnimations={isTestEnvironment}
      theme={currentTheme}
      elements={{
        DOGS_BREADCRUMB: { marginY: 'space60', fontVariantNumeric: 'ordinal' },
        GOOD: { fontWeight: 'fontWeightLight' },
        GOOD_ANCHOR: { fontWeight: 'fontWeightBold' },
        GOOD_SEPARATOR: { fontWeight: 'fontWeightLight' },
        DOGS: { fontWeight: 'fontWeightNormal' },
        DOGS_SEPARATOR: { fontWeight: 'fontWeightNormal' },
        SAY: { fontWeight: 'fontWeightMedium' },
        SAY_SEPARATOR: { fontWeight: 'fontWeightMedium' },
        BORK: { fontWeight: 'fontWeightSemibold' },
        BORK_SEPARATOR: { fontWeight: 'fontWeightSemibold' },
        WOOF: { fontWeight: 'fontWeightBold' },
        WOOF_SEPARATOR: { fontWeight: 'fontWeightBold' },
      }}
    >
      <Breadcrumb element="DOGS_BREADCRUMB" aria-label={`breadcrumb ${uniqueLandmarkIdentifier}`}>
        <BreadcrumbItem element="GOOD" href="#">
          0th
        </BreadcrumbItem>
        <BreadcrumbItem element="DOGS" href="#">
          1st
        </BreadcrumbItem>
        <BreadcrumbItem element="SAY" href="#">
          2nd
        </BreadcrumbItem>
        <BreadcrumbItem element="BORK" href="#">
          3rd
        </BreadcrumbItem>
        <BreadcrumbItem href="#">4th</BreadcrumbItem>
        <BreadcrumbItem element="BORK">5th</BreadcrumbItem>
      </Breadcrumb>
    </CustomizationProvider>
  );
};

CustomizationBreadcrumbWithCustomName.storyName = 'Customized unique name';
CustomizationBreadcrumbWithCustomName.parameters = {
  a11y: {
    // no need to a11y check customization
    disable: true,
  },
};
