import { useUID } from "@twilio-paste/uid-library";
import * as React from "react";

import {
  Pagination,
  PaginationArrow,
  PaginationEllipsis,
  PaginationItems,
  PaginationLabel,
  PaginationNumber,
  PaginationNumbers,
} from "../src";

export const ArrowExample = (): JSX.Element => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" />
        <PaginationArrow variant="forward" label="Go to next page" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowsAsAnchorsExample = (): JSX.Element => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
      <PaginationItems>
        <PaginationArrow as="a" href="#" variant="back" label="Go to previous page" />
        <PaginationArrow as="a" href="#" variant="forward" label="Go to next page" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowLabelsExample = (): JSX.Element => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationArrow variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowAsAnchorLabelsExample = (): JSX.Element => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
      <PaginationItems>
        <PaginationArrow as="a" href="#" variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationArrow as="a" href="#" variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const ArrowsPageLabelExample: React.FC<React.PropsWithChildren<{ staticLabel?: string }>> = ({
  staticLabel,
}) => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={staticLabel ? staticLabel : `pagination navigation ${uniquePaginationID}`}>
      <PaginationItems>
        <PaginationArrow variant="back" label="Go to previous page" visibleLabel="Previous" />
        <PaginationLabel>Page 1 of 10</PaginationLabel>
        <PaginationArrow variant="forward" label="Go to next page" visibleLabel="Next" />
      </PaginationItems>
    </Pagination>
  );
};

export const NumbersExample = (): JSX.Element => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
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

export const NumbersAsAnchorsExample = (): JSX.Element => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
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

export const NumbersPageLabelExample = (): JSX.Element => {
  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
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

export const ControlledArrowPaginationExample = (): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = 7;

  const goToNextPage = (event: { preventDefault: () => void }): void => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event: { preventDefault: () => void }): void => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
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

export const ControlledNumberPaginationExample = (): JSX.Element => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const pages = [1, 2, 3, 4, 5, 6, 7];
  const totalPages = pages.length;

  const goToNextPage = (event: { preventDefault: () => void }): void => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
    event.preventDefault();
  };

  const goToPreviousPage = (event: { preventDefault: () => void }): void => {
    setCurrentPage((page) => Math.max(page - 1, 1));
    event.preventDefault();
  };

  // we use this to create unique labels for landmark elements when stacked or side-by-side
  const uniquePaginationID = useUID();
  return (
    <Pagination label={`pagination navigation ${uniquePaginationID}`}>
      <PaginationItems>
        <PaginationArrow
          variant="back"
          label="Go to previous page"
          visibleLabel="Previous"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        />
        <PaginationNumbers pageLabel={`Page ${currentPage} of ${totalPages}`}>
          {pages.map((page, i) => {
            return (
              // biome-ignore lint: this is a story, so we don't need to worry about the key
              <PaginationNumber key={i} label={`Go to page ${page}`} isCurrent={page === currentPage}>
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
  title: "Components/Pagination",
  excludeStories: [
    "ArrowExample",
    "ArrowsAsAnchorsExample",
    "ArrowLabelsExample",
    "ArrowAsAnchorLabelsExample",
    "ArrowsPageLabelExample",
    "NumbersExample",
    "NumbersAsAnchorsExample",
    "NumbersPageLabelExample",
    "ControlledArrowPaginationExample",
    "ControlledNumberPaginationExample",
  ],
  component: Pagination,
};

export const Arrows = (): React.ReactNode => {
  return <ArrowExample />;
};

export const ArrowsAsAnchors = (): React.ReactNode => {
  return <ArrowsAsAnchorsExample />;
};

ArrowsAsAnchors.storyName = "Arrows as anchors";

export const ArrowLabels = (): React.ReactNode => {
  return <ArrowLabelsExample />;
};

ArrowLabels.storyName = "Arrows with visible labels";

export const ArrowAsAnchorLabels = (): React.ReactNode => {
  return <ArrowAsAnchorLabelsExample />;
};

ArrowAsAnchorLabels.storyName = "Arrows as anchors with visible labels";

export const ArrowsPageLabel = (): React.ReactNode => {
  return <ArrowsPageLabelExample />;
};

ArrowsPageLabel.storyName = "Arrows with page label";

export const Numbers = (): React.ReactNode => {
  return <NumbersExample />;
};

export const NumbersAsAnchors = (): React.ReactNode => {
  return <NumbersAsAnchorsExample />;
};

NumbersAsAnchors.storyName = "Numbers as anchors";

export const NumbersPageLabel = (): React.ReactNode => {
  return <NumbersPageLabelExample />;
};

NumbersPageLabel.storyName = "Numbers with page label";

export const Label = (): React.ReactNode => {
  return <PaginationLabel>Page 1 of 10</PaginationLabel>;
};

export const Ellipsis = (): React.ReactNode => {
  return <PaginationEllipsis label="Collapsed pages" />;
};

export const ControlledArrowPagination = (): React.ReactNode => {
  return <ControlledArrowPaginationExample />;
};

ControlledArrowPagination.storyName = "Controlled pagination using arrows";

export const ControlledNumberPagination = (): React.ReactNode => {
  return <ControlledNumberPaginationExample />;
};

ControlledArrowPagination.storyName = "Controlled pagination using numbers";
