import React, {useCallback, useEffect, useState} from 'react';

import {Box} from '@twilio-paste/box';
import {DataGrid} from './DataGrid';
import {DataGridBody} from './DataGridBody';
import {DataGridCell} from './DataGridCell';
import type {DataGridProps} from './DataGrid';
import {DataGridRow} from './DataGridRow';
import {useUID} from '@twilio-paste/uid-library';

interface VirtualizedDataGridProps<T> extends DataGridProps {
  rows: T[];
  rowHeight: number;
  tableHeight: number;
  headerHeight: number;
  columnsCount: number;
  rowTemplate: (rowItem: T) => React.ReactNode;
}

interface VirtualizedDataGridState<T> {
  scroll: {
    start: number;
    end: number;
  };
  visibleRows: T[];
  isFocused: boolean;
}
const PaddingRow: React.FC<{columnsCount: number; height: number}> = ({columnsCount, height}) => {
  const key = useUID();

  const cols = new Array(columnsCount - 1)
    .fill(0)
    // eslint-disable-next-line react/no-array-index-key
    .map((col, idx) => <DataGridCell key={`col-padding-${key}-${idx}`}>-</DataGridCell>);

  return (
    <DataGridRow>
      <DataGridCell>
        <Box height={`${height}px`}>-</Box>
      </DataGridCell>
      {cols}
    </DataGridRow>
  );
};

export function VirtualizedDataGrid<RowType>({
  tableHeight,
  rowHeight,
  headerHeight,
  rowTemplate,
  children,
  rows,
  columnsCount,
  ...props
}: VirtualizedDataGridProps<RowType>): React.ReactElement {
  const scrollHeight = rowHeight * rows.length;
  const maxItems = Math.ceil(tableHeight / rowHeight) * 1.2;

  const [state, setState] = useState<VirtualizedDataGridState<RowType>>({
    scroll: {start: 0, end: 0},
    visibleRows: [],
    isFocused: false,
  });

  const adjustScroll = (scrollTop: number): void => {
    const startIndex = Math.max(0, Math.floor((scrollTop - headerHeight) / rowHeight) - 1);
    const endIndex = Math.min(rows.length - 1, startIndex + maxItems);

    setState((currentState) => ({
      ...currentState,
      scroll: {
        start: startIndex,
        end: endIndex,
      },
      visibleRows: rows.filter((row, i) => i >= startIndex && i <= endIndex),
    }));
  };

  const onFocus = (): void => {
    setState((currentState) => ({
      ...currentState,
      isFocused: true,
    }));
  };
  const onBlur = (): void => {
    setState((currentState) => ({
      ...currentState,
      isFocused: false,
    }));
  };

  const onScroll = useCallback(({currentTarget}: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const {scrollTop} = currentTarget;
    adjustScroll(scrollTop);
  }, []);

  useEffect(() => {
    adjustScroll(0);
  }, []);

  const renderPadding = (): React.ReactNode => {
    if (!state.scroll.start) {
      return null;
    }

    const paddingCount = state.scroll.start - 1;
    const items = [rowTemplate(rows[0])];

    if (paddingCount > 1) {
      const paddingHeight = paddingCount * rowHeight;

      if (state.scroll.start % 2 === 0) {
        items.push(<PaddingRow key="padding-1" height={paddingHeight - rowHeight - 24} columnsCount={columnsCount} />);
        items.push(<PaddingRow key="padding-2" height={rowHeight - 24} columnsCount={columnsCount} />);
      } else {
        items.push(<PaddingRow height={paddingHeight - 24} columnsCount={columnsCount} />);
      }
    }

    return items;
  };

  return (
    <Box
      height={`${tableHeight}px`}
      overflowY="scroll"
      overflowX="hidden"
      onScroll={onScroll}
      boxShadow={state.isFocused ? 'shadowFocus' : undefined}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <Box height={`${scrollHeight}px`} zIndex="zIndex50">
        <DataGrid {...props}>
          {children}

          <DataGridBody>
            {renderPadding()}
            {state.visibleRows.map(rowTemplate)}
          </DataGridBody>
        </DataGrid>
      </Box>
    </Box>
  );
}
