import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {ArrowForwardIcon} from '@twilio-paste/icons/esm/ArrowForwardIcon';
import {PaginationArrowButton} from './PaginationArrowButton';
import {PaginationArrowIconWrapper} from './PaginationArrowIconWrapper';
import type {PaginationArrowProps} from '../types';
import {PaginationArrowPropTypes} from '../proptypes';

const PaginationForwardArrow = React.forwardRef<HTMLButtonElement, PaginationArrowProps>(
  (
    {as = 'button', element = 'PAGINATION_ARROW', disabled, isFocused, isHovered, label, visibleLabel, ...props},
    ref
  ) => {
    return (
      <PaginationArrowButton
        {...props}
        ref={ref}
        element={`${element}_BUTTON`}
        as={as}
        disabled={disabled}
        visibleLabel={visibleLabel}
      >
        {visibleLabel ? (
          <Text aria-hidden="true" as="span" color="inherit" marginRight="space30" element={`${element}_TEXT`}>
            {visibleLabel}
          </Text>
        ) : null}
        <PaginationArrowIconWrapper isFocused={isFocused} isHovered={isHovered} element={`${element}_ICON_WRAPPER`}>
          <ArrowForwardIcon decorative={false} display="block" title={label} element={`${element}_ICON`} />
        </PaginationArrowIconWrapper>
      </PaginationArrowButton>
    );
  }
);

PaginationForwardArrow.displayName = 'PaginationForwardArrow';

PaginationForwardArrow.propTypes = PaginationArrowPropTypes;

export {PaginationForwardArrow};
