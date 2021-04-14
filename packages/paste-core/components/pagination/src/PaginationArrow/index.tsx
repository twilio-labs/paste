import * as React from 'react';
import {PaginationBackArrow} from './PaginationBackArrow';
import {PaginationForwardArrow} from './PaginationForwardArrow';
import type {PaginationArrowProps} from '../types';
import {PaginationArrowPropTypes} from '../proptypes';
import {handleLinkValidation} from '../utils';

const PaginationArrow = React.forwardRef<HTMLButtonElement, PaginationArrowProps>(
  ({as = 'button', href, label, variant = 'back', visibleLabel, ...props}, ref) => {
    handleLinkValidation({as, href});
    return variant === 'back' ? (
      <PaginationBackArrow
        {...props}
        ref={ref}
        as={as}
        href={href}
        label={label}
        variant={variant}
        visibleLabel={visibleLabel}
      />
    ) : (
      <PaginationForwardArrow
        {...props}
        ref={ref}
        as={as}
        href={href}
        label={label}
        variant={variant}
        visibleLabel={visibleLabel}
      />
    );
  }
);

PaginationArrow.displayName = 'PaginationArrow';

PaginationArrow.propTypes = PaginationArrowPropTypes;

export {PaginationArrow};
