import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {TableContextProps, THeadProps} from './types';
import {THeadPropTypes} from './proptypes';
import {TableContext} from './TableContext';

const getStickyStyles = ({
  stickyHeader,
  variant,
}: {
  stickyHeader: THeadProps['stickyHeader'];
  variant: TableContextProps['variant'];
}): Partial<BoxProps> => {
  if (!stickyHeader) return {};

  return {
    position: 'sticky',
    zIndex: 'zIndex10',
    _before: {
      ...(variant !== 'borderless' && {
        position: 'absolute',
        top: 0,
        width: '100%',
        display: 'block',
        content: `""`,
        borderBottomStyle: 'solid',
        borderBottomWidth: 'borderWidth10',
        borderBottomColor: 'colorBorderWeaker',
      }),
    },
    // fake bottom border so that it follows along with the sticky element
    _after: {
      position: 'absolute',
      // This is gross but we need it to sit ontop of the real border, other we lose 2px in overall height of the thead. Borders take up space, absolute positioned afters do not
      bottom: '-3px',
      width: '100%',
      display: 'block',
      content: `""`,
      borderBottomStyle: 'solid',
      borderBottomWidth: 'borderWidth20',
      borderBottomColor: 'colorBorderWeaker',
    },
  };
};

const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({element = 'THEAD', stickyHeader = false, top = stickyHeader ? '-1px' : null, ...props}, ref) => {
    const {variant} = React.useContext(TableContext);
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="thead"
        backgroundColor="colorBackground"
        borderBottomStyle="solid"
        borderBottomWidth="borderWidth20"
        borderBottomColor="colorBorderWeaker"
        element={element}
        top={top}
        {...getStickyStyles({stickyHeader, variant})}
      />
    );
  }
);

THead.displayName = 'THead';

if (process.env.NODE_ENV === 'development') {
  THead.propTypes = THeadPropTypes;
}

export {THead};
