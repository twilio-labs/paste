import * as React from 'react';
import {
  Pagination,
  PaginationArrow,
  PaginationEllipsis,
  PaginationItems,
  PaginationLabel,
  PaginationNumber,
  PaginationNumbers,
} from '../src';

export const ArrowExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" />
        <PaginationArrow variant="forward" label="Go to next page" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowsAsAnchorsExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow as="a" href="#" variant="back" label="Go to previous page" />
        <PaginationArrow as="a" href="#" variant="forward" label="Go to next page" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowLabelsExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationArrow variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowAsAnchorLabelsExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow as="a" href="#" variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationArrow as="a" href="#" variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowsPageLabelExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationLabel>Page 1 of 10</PaginationLabel>
        <PaginationArrow variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const NumbersExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationNumbers>
          <PaginationNumber label="Go to page 1">1</PaginationNumber>
          <PaginationEllipsis label="Collapsed previous pages" />
          <PaginationNumber label="Go to page 4">4</PaginationNumber>
          <PaginationNumber label="Go to page 5" isCurrent>
            5
          </PaginationNumber>
          <PaginationNumber label="Go to page 6">6</PaginationNumber>
          <PaginationEllipsis label="Collapsed next pages" />
          <PaginationNumber label="Go to page 10">10</PaginationNumber>
        </PaginationNumbers>
        <PaginationArrow variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const NumbersAsAnchorsExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow as="a" href="#" variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationNumbers>
          <PaginationNumber as="a" href="#" label="Go to page 1">
            1
          </PaginationNumber>
          <PaginationEllipsis label="Collapsed previous pages" />
          <PaginationNumber as="a" href="#" label="Go to page 4">
            4
          </PaginationNumber>
          <PaginationNumber as="a" href="#" label="Go to page 5" isCurrent>
            5
          </PaginationNumber>
          <PaginationNumber as="a" href="#" label="Go to page 6">
            6
          </PaginationNumber>
          <PaginationEllipsis label="Collapsed next pages" />
          <PaginationNumber as="a" href="#" label="Go to page 10">
            10
          </PaginationNumber>
        </PaginationNumbers>
        <PaginationArrow as="a" href="#" variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const NumbersPageLabelExample: React.FC = () => {
  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationNumbers pageLabel="Page 5 of 10">
          <PaginationNumber label="Go to page 1">1</PaginationNumber>
          <PaginationEllipsis label="Collapsed previous pages" />
          <PaginationNumber label="Go to page 4">4</PaginationNumber>
          <PaginationNumber label="Go to page 5" isCurrent>
            5
          </PaginationNumber>
          <PaginationNumber label="Go to page 6">6</PaginationNumber>
          <PaginationEllipsis label="Collapsed next pages" />
          <PaginationNumber label="Go to page 10">10</PaginationNumber>
        </PaginationNumbers>
        <PaginationArrow variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const ControlledArrowPaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 7;

  const goToNextPage = (event: {preventDefault: () => void}): void => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event: {preventDefault: () => void}): void => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow
          variant="back"
          label="Go to previous page"
          visibleLabel="Previous"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        />
        <PaginationLabel>
          Page {currentPage} of {totalPages}
        </PaginationLabel>
        <PaginationArrow
          variant="forward"
          label="Go to next page"
          visibleLabel="Next"
          onClick={goToNextPage}
          disabled={currentPage === 7}
        />
      </PaginationItems>
    </Pagination>
  );
};

export const ControlledNumberPaginationExample: React.FC = () => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [1, 2, 3, 4, 5, 6, 7];
  const totalPages = pages.length;

  const goToNextPage = (event: {preventDefault: () => void}): void => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event: {preventDefault: () => void}): void => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  return (
    <Pagination label="pagination navigation">
      <PaginationItems>
        <PaginationArrow
          variant="back"
          label="Go to previous page"
          visibleLabel="Previous"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        />
        <PaginationNumbers pageLabel={`Page ${currentPage} of ${totalPages}`}>
          {pages.map((page) => {
            return (
              <PaginationNumber label={`Go to page ${page}`} isCurrent={page === currentPage}>
                {page}
              </PaginationNumber>
            );
          })}
        </PaginationNumbers>
        <PaginationArrow
          variant="forward"
          label="Go to next page"
          visibleLabel="Next"
          onClick={goToNextPage}
          disabled={currentPage === 7}
        />
      </PaginationItems>
    </Pagination>
  );
};

// eslint-disable-next-line import/no-default-export
export default {
  title: 'Components/Pagination',
  excludeStories: [
    'ArrowExample',
    'ArrowsAsAnchorsExample',
    'ArrowLabelsExample',
    'ArrowAsAnchorLabelsExample',
    'ArrowsPageLabelExample',
    'NumbersExample',
    'NumbersAsAnchorsExample',
    'NumbersPageLabelExample',
    'ControlledArrowPaginationExample',
    'ControlledNumberPaginationExample',
  ],
  component: Pagination,
};

export const Arrows = (): React.ReactNode => {
  return <ArrowExample />;
};

export const ArrowsAsAnchors = (): React.ReactNode => {
  return <ArrowsAsAnchorsExample />;
};

ArrowsAsAnchors.story = {
  name: 'Arrows as anchors',
};

export const ArrowLabels = (): React.ReactNode => {
  return <ArrowLabelsExample />;
};

ArrowLabels.story = {
  name: 'Arrows with visible labels',
};

export const ArrowAsAnchorLabels = (): React.ReactNode => {
  return <ArrowAsAnchorLabelsExample />;
};

ArrowAsAnchorLabels.story = {
  name: 'Arrows as anchors with visbile labels',
};

export const ArrowsPageLabel = (): React.ReactNode => {
  return <ArrowsPageLabelExample />;
};

ArrowsPageLabel.story = {
  name: 'Arrows with page label',
};

export const Numbers = (): React.ReactNode => {
  return <NumbersExample />;
};

export const NumbersAsAnchors = (): React.ReactNode => {
  return <NumbersAsAnchorsExample />;
};

NumbersAsAnchors.story = {
  name: 'Numbers as anchors',
};

export const NumbersPageLabel = (): React.ReactNode => {
  return <NumbersPageLabelExample />;
};

NumbersPageLabel.story = {
  name: 'Numbers with page label',
};

export const Label = (): React.ReactNode => {
  return <PaginationLabel>Page 1 of 10</PaginationLabel>;
};

export const Ellipsis = (): React.ReactNode => {
  return <PaginationEllipsis label="Collapsed pages" />;
};

export const ControlledArrowPagination = (): React.ReactNode => {
  return <ControlledArrowPaginationExample />;
};

ControlledArrowPagination.story = {
  name: 'Controlled pagination using arrows',
};

export const ControlledNumberPagination = (): React.ReactNode => {
  return <ControlledNumberPaginationExample />;
};

ControlledArrowPagination.story = {
  name: 'Controlled pagination using numbers',
};
