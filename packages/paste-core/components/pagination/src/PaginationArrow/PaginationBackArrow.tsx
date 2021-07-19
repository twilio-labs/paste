import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {ArrowBackIcon} from '@twilio-paste/icons/esm/ArrowBackIcon';
import {PaginationArrowButton} from './PaginationArrowButton';
import {PaginationArrowIconWrapper} from './PaginationArrowIconWrapper';
import type {PaginationArrowProps} from '../types';
import {PaginationArrowPropTypes} from '../proptypes';

const PaginationBackArrow = React.forwardRef<HTMLButtonElement, PaginationArrowProps>(
  ({as = 'button', disabled, isFocused, isHovered, label, visibleLabel, ...props}, ref) => {
    return (
      <PaginationArrowButton {...props} ref={ref} as={as} disabled={disabled} visibleLabel={visibleLabel}>
        <PaginationArrowIconWrapper isFocused={isFocused} isHovered={isHovered}>
          <ArrowBackIcon decorative={false} display="block" title={label} />
        </PaginationArrowIconWrapper>
        {visibleLabel ? (
          <Text aria-hidden="true" as="span" color="inherit" marginLeft="space30">
            {visibleLabel}
          </Text>
        ) : null}
      </PaginationArrowButton>
    );
  }
);

PaginationBackArrow.displayName = 'PaginationBackArrow';

PaginationBackArrow.propTypes = PaginationArrowPropTypes;

export {PaginationBackArrow};
