import * as React from 'react';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import type {TFootProps} from './types';
import {TFootPropTypes} from './proptypes';

export type TFootContextProps = {
  isTFoot: boolean;
};
export const TFootContext = React.createContext<TFootContextProps>({isTFoot: false});

const TFoot = React.forwardRef<HTMLTableSectionElement, TFootProps>(({element = 'TFOOT', ...props}, ref) => {
  return (
    <TFootContext.Provider value={{isTFoot: true}}>
      <Box
        {...safelySpreadBoxProps(props)}
        ref={ref}
        as="tfoot"
        backgroundColor="colorBackground"
        borderTopStyle="solid"
        borderTopWidth="borderWidth20"
        borderTopColor="colorBorderWeaker"
        element={element}
      />
    </TFootContext.Provider>
  );
});

TFoot.displayName = 'TFoot';
TFoot.propTypes = TFootPropTypes;

export {TFoot};
