import { Box } from "@twilio-paste/box";
import { Checkbox, CheckboxGroup } from "@twilio-paste/checkbox";
import { Input } from "@twilio-paste/input";
import {
  Pagination,
  PaginationArrow,
  PaginationEllipsis,
  PaginationItems,
  PaginationNumber,
  PaginationNumbers,
} from "@twilio-paste/pagination";
import { ScreenReaderOnly } from "@twilio-paste/screen-reader-only";
import { useUID, useUIDSeed } from "@twilio-paste/uid-library";
import * as React from "react";

import type { SortDirection } from "../../src";
import {
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHead,
  DataGridHeader,
  DataGridHeaderSort,
  DataGridRow,
} from "../../src";
import { PaginatedTableBodyData, TableHeaderData } from "./constants";

// Sorting function
const simpleComparator = (a: string[], b: string[], ascending: boolean, columnId: number): number => {
  if (a[columnId] === b[columnId]) {
    return 0;
  }
  if (a[columnId] > b[columnId]) {
    return ascending ? 1 : -1;
  }
  return ascending ? -1 : 1;
};

const numColumns = TableHeaderData.length + 1; // +1 for checkbox;
const initialHeaderData = [...new Array(numColumns)].map((_, index) => {
  if (index === 0) return null;
  if (index === 1) return "ascending";
  return "none";
});
// Add the first column for checkbox state
const initialBodyData = PaginatedTableBodyData.map((row) => [false, ...row]).sort(
  (a, b) =>
    // @ts-expect-error won't be boolean
    simpleComparator(a, b, true, 1), // passing 1 instead of 0 to skip checkbox column
);

const getRange = (start: number, end: number): number[] => {
  return [...new Array(end - start + 1)].map((_, index) => index + start);
};

/* Calculates the correct display of the pagination numbers */
/* TODO: move this into the Pagination package as an export with tests */
const calculatePaginationState = (currentPage: number, pageCount: number): number[] => {
  let delta;
  if (pageCount <= 7) {
    // delta === 7: [1 2 3 4 5 6 7]
    delta = 7;
  } else {
    /*
     * delta === 2: [1 ... 4 5 6 ... 10]
     * delta === 4: [1 2 3 4 5 ... 10]
     */
    delta = currentPage > 4 && currentPage < pageCount - 3 ? 2 : 4;
  }

  let rangeStart = Math.round(currentPage - delta / 2);
  let rangeEnd = Math.round(currentPage + delta / 2);

  if (rangeStart - 1 === 1 || rangeEnd + 1 === pageCount) {
    rangeStart += 1;
    rangeEnd += 1;
  }

  let pages =
    currentPage > delta
      ? getRange(Math.min(rangeStart, pageCount - delta), Math.min(rangeEnd, pageCount))
      : getRange(1, Math.min(pageCount, delta + 1));

  const withDots = (value: number, pair: number[]): number[] => (pages.length + 1 !== pageCount ? pair : [value]);

  if (pages[0] !== 1) {
    pages = withDots(1, [1, -1]).concat(pages);
  }

  if (pages[pages.length - 1] < pageCount) {
    pages = pages.concat(withDots(pageCount, [-1, pageCount]));
  }

  return pages;
};

interface DataGridPaginationProps {
  currentPage?: number;
  pageCount: number;
  onPageChange: (newPageNumber: number) => void;
}

const DataGridPagination: React.FC<React.PropsWithChildren<DataGridPaginationProps>> = ({
  currentPage = 1,
  pageCount,
  onPageChange,
}) => {
  const goToNextPage = React.useCallback(() => {
    onPageChange(Math.min(currentPage + 1, pageCount));
  }, [currentPage, pageCount]);

  const goToPreviousPage = React.useCallback(() => {
    onPageChange(Math.max(currentPage - 1, 1));
  }, [currentPage]);

  const goToPage = React.useCallback((pageNumber: number) => {
    onPageChange(pageNumber);
  }, []);

  // used to create unique labels for nav elements in side by side stories
  const uniquePaginationID = useUID();

  const paginationState = calculatePaginationState(currentPage, pageCount);

  /* eslint-disable react/no-array-index-key */
  return (
    <Pagination label={`paged pagination navigation ${uniquePaginationID}`}>
      <PaginationItems>
        <PaginationArrow
          label="Go to previous page"
          variant="back"
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
        />
        <PaginationNumbers>
          {paginationState.map((pageNumber, pageIndex) => {
            if (pageNumber === -1) {
              return <PaginationEllipsis key={`pagination-number-${pageIndex}`} label="Collapsed previous pages" />;
            }

            return (
              <PaginationNumber
                label={`Go to page ${pageNumber}`}
                isCurrent={currentPage === pageNumber}
                onClick={() => {
                  goToPage(pageNumber);
                }}
                key={`pagination-number-${pageIndex}`}
              >
                {pageNumber}
              </PaginationNumber>
            );
          })}
        </PaginationNumbers>
        <PaginationArrow
          label="Go to next page"
          variant="forward"
          onClick={goToNextPage}
          disabled={currentPage === pageCount}
        />
      </PaginationItems>
    </Pagination>
  );
  /* eslint-enable react/no-array-index-key */
};

const PAGE_SIZE = 10;
const TOTAL_ROWS = PaginatedTableBodyData.length;
const TOTAL_PAGES = Math.ceil(TOTAL_ROWS / PAGE_SIZE);

interface CheckboxCellProps {
  onClick: (checked: boolean) => void;
  id: string;
  checked: boolean;
  label: string;
  indeterminate?: boolean;
}
const CheckboxCell: React.FC<React.PropsWithChildren<CheckboxCellProps>> = ({
  onClick,
  id,
  indeterminate,
  checked,
  label,
}) => {
  const checkboxRef = React.createRef<HTMLInputElement>();

  const handleClick = React.useCallback(() => {
    if (checkboxRef.current == null) {
      return undefined;
    }
    return onClick(!checkboxRef.current.checked);
  }, [onClick, checkboxRef]);
  const handleKeyDown = React.useCallback(
    (event: any) => {
      if (checkboxRef.current == null) {
        return undefined;
      }
      if (event.keyCode === 32 || event.keyCode === 13) {
        return onClick(!checkboxRef.current.checked);
      }
      return undefined;
    },
    [onClick, checkboxRef],
  );

  return (
    <Box
      position="absolute"
      top="0"
      left="0"
      right="0"
      bottom="0"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={handleClick}
      cursor="pointer"
    >
      <Box marginLeft="space20">
        <Checkbox id={id} checked={checked} onKeyDown={handleKeyDown} ref={checkboxRef} indeterminate={indeterminate}>
          <ScreenReaderOnly>{label}</ScreenReaderOnly>
        </Checkbox>
      </Box>
    </Box>
  );
};

export const KitchenSinkDataGrid = (): JSX.Element => {
  const seed = useUIDSeed();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [sortedColumns, setSortedColumns] = React.useState<Array<SortDirection | null>>(initialHeaderData);
  const [sortedData, setSortedData] = React.useState(initialBodyData);

  const selections = sortedData.map((row) => row[0]);
  const allChecked = selections.every(Boolean);
  const indeterminate = selections.some(Boolean) && !allChecked;

  const rowIndexStart = (currentPage - 1) * PAGE_SIZE;
  const rowIndexEnd = Math.min(rowIndexStart + PAGE_SIZE - 1, TOTAL_ROWS);

  const handlePagination = React.useCallback((newPage: any) => {
    setCurrentPage(newPage);
  }, []);

  // Handle sorting behavior
  const handleSortingColumn = (columnId: number): void => {
    // Update the state of the sort direction in column headers
    const newSortedColumns: Array<SortDirection> = sortedColumns.map(() => "none");
    if (sortedColumns[columnId] === "ascending") {
      newSortedColumns[columnId] = "descending";
    } else {
      newSortedColumns[columnId] = "ascending";
    }
    setSortedColumns(newSortedColumns);

    // Update the table data to be sorted correctly
    setSortedData(
      initialBodyData.sort((a, b) =>
        // @ts-expect-error won't be boolean
        simpleComparator(a, b, newSortedColumns[columnId] === "ascending", columnId),
      ),
    );
  };

  /* eslint-disable react/no-array-index-key */
  return (
    <>
      <CheckboxGroup name="items" legend="Select which user to promote">
        <DataGrid aria-label="example grid" striped>
          <DataGridHead>
            <DataGridRow>
              <DataGridHeader width="55px">
                <CheckboxCell
                  onClick={(checked: boolean) => {
                    const newSortedData = sortedData.map(([_, ...row]) => [checked, ...row]);
                    setSortedData(newSortedData);
                  }}
                  id={seed("select-all")}
                  checked={allChecked}
                  indeterminate={indeterminate}
                  label="Select all"
                />
              </DataGridHeader>
              <DataGridHeader aria-sort={sortedColumns[1]}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  {TableHeaderData[0]}
                  <DataGridHeaderSort
                    direction={sortedColumns[1] as SortDirection}
                    onClick={() => handleSortingColumn(1)}
                  />
                </Box>
              </DataGridHeader>
              <DataGridHeader aria-sort={sortedColumns[2]}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  {TableHeaderData[1]}
                  <DataGridHeaderSort
                    direction={sortedColumns[2] as SortDirection}
                    onClick={() => handleSortingColumn(2)}
                  />
                </Box>
              </DataGridHeader>
              <DataGridHeader aria-sort={sortedColumns[3]}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  {TableHeaderData[2]}
                  <DataGridHeaderSort
                    direction={sortedColumns[3] as SortDirection}
                    onClick={() => handleSortingColumn(3)}
                  />
                </Box>
              </DataGridHeader>
              <DataGridHeader aria-sort={sortedColumns[4]}>
                <Box display="flex" alignItems="center" columnGap="space20">
                  {TableHeaderData[3]}
                  <DataGridHeaderSort
                    direction={sortedColumns[4] as SortDirection}
                    onClick={() => handleSortingColumn(4)}
                  />
                </Box>
              </DataGridHeader>
              <DataGridHeader>{TableHeaderData[4]}</DataGridHeader>
            </DataGridRow>
          </DataGridHead>
          <DataGridBody>
            {sortedData
              // Only show rows for the current page
              .filter((_, rowIndex) => {
                return rowIndex >= rowIndexStart && rowIndex <= rowIndexEnd;
              })
              // Render the rows and cells
              .map((row, index) => {
                const rowIndex = index + rowIndexStart;
                return (
                  <DataGridRow key={`row-${rowIndex}`} selected={selections[rowIndex] as boolean}>
                    {row.map((col, colIndex) => {
                      // The first column is the checkbox column
                      if (colIndex === 0) {
                        return (
                          <DataGridCell key={`col-${colIndex}`}>
                            <CheckboxCell
                              onClick={(checked: boolean) => {
                                const newSortedData = [...sortedData];
                                newSortedData[rowIndex][0] = checked;
                                setSortedData(newSortedData);
                              }}
                              id={seed(`row-${rowIndex}-checkbox`)}
                              checked={sortedData[rowIndex][0] as boolean}
                              label={`Select row ${rowIndex}`}
                            />
                          </DataGridCell>
                        );
                      }
                      if (colIndex === 5) {
                        return (
                          <DataGridCell key={`col-${colIndex}`}>
                            <Input aria-label="Phone number" value={col as string} type="text" onChange={() => {}} />
                          </DataGridCell>
                        );
                      }
                      return <DataGridCell key={`col-${colIndex}`}>{col}</DataGridCell>;
                    })}
                  </DataGridRow>
                );
              })}
          </DataGridBody>
        </DataGrid>
      </CheckboxGroup>
      <Box display="flex" justifyContent="center" marginTop="space70">
        <DataGridPagination currentPage={currentPage} pageCount={TOTAL_PAGES} onPageChange={handlePagination} />
      </Box>
    </>
  );
  /* eslint-enable react/no-array-index-key */
};
