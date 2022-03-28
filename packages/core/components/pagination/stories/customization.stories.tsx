import * as React from 'react';
import {BoxElementProps} from '@twilio-paste/box';
import {Card} from '@twilio-paste/card';
import {Heading} from '@twilio-paste/heading';
import {Stack} from '@twilio-paste/stack';
import {CustomizationProvider} from '@twilio-paste/customization';
import type {PasteCustomCSS} from '@twilio-paste/customization';
import {
  Pagination,
  PaginationArrow,
  PaginationEllipsis,
  PaginationItems,
  PaginationNumber,
  PaginationNumbers,
  PaginationLabel,
} from '../src';

// Wrapper to abstract the rendering of the default and customized pagination versions
const BeforeAndAfter: React.FC<{before: React.ReactNode; after: React.ReactNode}> = ({before, after}) => (
  <Stack orientation="vertical" spacing="space90">
    <Heading as="h3" variant="heading30">
      Default:
    </Heading>
    <Card>{before}</Card>
    <Heading as="h3" variant="heading30">
      Customized:
    </Heading>
    <Card>{after}</Card>
  </Stack>
);

export const WrapperAndArrows: React.FC<{element?: BoxElementProps['element']}> = ({element = 'PAGINATION'}) => (
  <Pagination data-testid="pagination" label="pagination navigation" element={element}>
    <PaginationItems data-testid="pagination-items" element={`${element}_ITEMS`}>
      <PaginationArrow
        element={`${element}_ARROW`}
        data-testid="pagination-back-arrow"
        variant="back"
        label="Go to previous page"
        visibleLabel="Previous"
      />
      <PaginationArrow
        element={`${element}_ARROW`}
        data-testid="pagination-forward-arrow"
        variant="forward"
        label="Go to next page"
        visibleLabel="Next"
      />
    </PaginationItems>
  </Pagination>
);
export const NumbersAndLabel: React.FC<{element?: BoxElementProps['element']}> = ({element = 'PAGINATION'}) => (
  <Pagination label="pagination navigation" element={element}>
    <PaginationItems element={`${element}_ITEMS`}>
      <>
        <PaginationNumbers data-testid="pagination-numbers" element={`${element}_NUMBERS`}>
          <PaginationNumber data-testid="pagination-number" label="Go to page 1" element={`${element}_NUMBER`}>
            1
          </PaginationNumber>
          <PaginationEllipsis
            data-testid="pagination-ellipsis"
            label="Collapsed previous pages"
            element={`${element}_ELLIPSIS`}
          />
          <PaginationNumber label="Go to page 4" element={`${element}_NUMBER`}>
            4
          </PaginationNumber>
          <PaginationNumber label="Go to page 5" isCurrent element={`${element}_NUMBER`}>
            5
          </PaginationNumber>
          <PaginationNumber label="Go to page 6" element={`${element}_NUMBER`}>
            6
          </PaginationNumber>
          <PaginationEllipsis label="Collapsed next pages" element={`${element}_ELLIPSIS`} />
          <PaginationNumber label="Go to page 10" element={`${element}_NUMBER`}>
            10
          </PaginationNumber>
        </PaginationNumbers>
        <PaginationLabel element={`${element}_LABEL`} data-testid="pagination-label">
          Page 5 of 10
        </PaginationLabel>
      </>
    </PaginationItems>
  </Pagination>
);

const paginationStyles = {fontSize: 'fontSize60', fontWeight: 'fontWeightBold'} as PasteCustomCSS;
const getCustomizedStyles = (prefix = 'PAGINATION'): {[key: string]: any} => ({
  [`${prefix}`]: {borderColor: 'colorBorder', borderStyle: 'solid', borderWidth: 'borderWidth10'},
  [`${prefix}_ITEMS`]: {
    borderColor: 'colorBorder',
    borderStyle: 'solid',
    borderWidth: 'borderWidth10',
    margin: 'space30',
  },
  [`${prefix}_ITEMS_ITEM`]: {
    borderColor: 'colorBorder',
    borderStyle: 'solid',
    borderWidth: 'borderWidth10',
    margin: 'space30',
  },
  [`${prefix}_ARROW_BUTTON`]: {
    backgroundColor: 'colorBackground',
    borderColor: 'colorBorder',
    borderStyle: 'solid',
    borderWidth: 'borderWidth10',
  },
  [`${prefix}_ARROW_ICON_WRAPPER`]: {
    padding: 'space40',
    size: 'size10',
  },
  [`${prefix}_ARROW_ICON`]: {
    size: 'size10',
  },
  [`${prefix}_ARROW_TEXT`]: {
    fontWeight: 'fontWeightBold',
    fontSize: 'fontSize50',
  },
  [`${prefix}_LABEL`]: paginationStyles,
  [`${prefix}_ELLIPSIS`]: paginationStyles,
  [`${prefix}_NUMBERS`]: paginationStyles,
  [`${prefix}_NUMBERS_ITEM`]: paginationStyles,
  [`${prefix}_NUMBER`]: paginationStyles,
  [`${prefix}_NUMBER_TEXT`]: paginationStyles,
});

export const PaginationWrapperAndArrows: React.FC = () => {
  return (
    <BeforeAndAfter
      before={<WrapperAndArrows />}
      after={
        <CustomizationProvider baseTheme="default" elements={getCustomizedStyles()}>
          <WrapperAndArrows />
        </CustomizationProvider>
      }
    />
  );
};

export const PaginationNumbersAndLabel: React.FC = () => {
  return (
    <BeforeAndAfter
      before={<NumbersAndLabel />}
      after={
        <CustomizationProvider baseTheme="default" elements={getCustomizedStyles()}>
          <NumbersAndLabel />
        </CustomizationProvider>
      }
    />
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Pagination/Customization',
  excludeStories: ['WrapperAndArrows', 'NumbersAndLabel'],
};
