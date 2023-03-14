import * as React from 'react';
import {Text} from '@twilio-paste/text';
import {ArrowBackIcon} from '@twilio-paste/icons/esm/ArrowBackIcon';

import {PaginationArrowButton} from './PaginationArrowButton';
import {PaginationArrowIconWrapper} from './PaginationArrowIconWrapper';
import type {PaginationArrowProps} from '../types';
import {PaginationArrowPropTypes} from '../proptypes';

const PaginationBackArrow = React.forwardRef<HTMLButtonElement, PaginationArrowProps>(
  (
    {as = 'button', element = 'PAGINATION_ARROW', disabled, isFocused, isHovered, label, visibleLabel, ...props},
    ref
  ) => {
    return (
      <PaginationArrowButton
        {...props}
        ref={ref}
        as={as}
        disabled={disabled}
        visibleLabel={visibleLabel}
        element={`${element}_BUTTON`}
      >
        <PaginationArrowIconWrapper isFocused={isFocused} isHovered={isHovered} element={`${element}_ICON_WRAPPER`}>
          <ArrowBackIcon
            decorative={false}
            color={isHovered ? 'colorTextPrimary' : 'colorText'}
            display="block"
            title={label}
            element={`${element}_ICON`}
          />
        </PaginationArrowIconWrapper>
        {visibleLabel ? (
          <Text
            aria-hidden="true"
            as="span"
            color={isHovered ? 'colorTextLink' : 'colorText'}
            fontWeight="fontWeightMedium"
            marginLeft="space30"
            element={`${element}_TEXT`}
          >
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
