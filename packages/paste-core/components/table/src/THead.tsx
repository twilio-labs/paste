import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {BoxProps} from '@twilio-paste/box';
import type {THeadProps} from './types';
import {THeadPropTypes} from './proptypes';

export type THeadContextProps = {
  isTHead: boolean;
};
export const THeadContext = React.createContext<THeadContextProps>({isTHead: false});

const getStickyStyles = ({stickyHeader}: {stickyHeader: THeadProps['stickyHeader']}): Partial<BoxProps> => {
  if (!stickyHeader) return {};

  return {
    position: 'sticky',
    zIndex: 'zIndex10',
  };
};

const THead = React.forwardRef<HTMLTableSectionElement, THeadProps>(
  ({element = 'THEAD', stickyHeader = false, top = stickyHeader ? '-1px' : null, ...props}, ref) => {
    return (
      <THeadContext.Provider value={{isTHead: true}}>
        <Box
          {...safelySpreadBoxProps(props)}
          ref={ref}
          as="thead"
          backgroundColor="colorBackground"
          element={element}
          top={top}
          {...getStickyStyles({stickyHeader})}
        />
      </THeadContext.Provider>
    );
  }
);

THead.displayName = 'THead';
THead.propTypes = THeadPropTypes;

export {THead};
