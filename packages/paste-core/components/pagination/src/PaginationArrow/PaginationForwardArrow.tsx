import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {ArrowForwardIcon} from '@twilio-paste/icons/esm/ArrowForwardIcon';
import {PaginationArrowButton} from './PaginationArrowButton';
import {PaginationArrowIconWrapper} from './PaginationArrowIconWrapper';
import type {PaginationArrowProps} from '../types';
import {PaginationArrowPropTypes} from '../proptypes';

const PaginationForwardArrow = React.forwardRef<HTMLButtonElement, PaginationArrowProps>(
  ({as = 'button', disabled, isFocused, isHovered, label, visibleLabel, ...props}, ref) => {
    return (
      <PaginationArrowButton {...props} ref={ref} as={as} disabled={disabled} visibleLabel={visibleLabel}>
        {visibleLabel ? (
          <Text aria-hidden="true" as="span" color="inherit" marginRight="space30">
            {visibleLabel}
          </Text>
        ) : null}
        <PaginationArrowIconWrapper isFocused={isFocused} isHovered={isHovered}>
          <ArrowForwardIcon decorative={false} display="block" title={label} />
        </PaginationArrowIconWrapper>
      </PaginationArrowButton>
    );
  }
);

PaginationForwardArrow.displayName = 'PaginationForwardArrow';

PaginationForwardArrow.propTypes = PaginationArrowPropTypes;

export {PaginationForwardArrow};
