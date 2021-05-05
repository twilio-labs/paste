import * as React from 'react';
import {PaginationBackArrow} from './PaginationBackArrow';
import {PaginationForwardArrow} from './PaginationForwardArrow';
import type {PaginationArrowProps} from '../types';
import {PaginationArrowPropTypes} from '../proptypes';
import {handleLinkValidation} from '../utils';

const PaginationArrow = React.forwardRef<HTMLButtonElement, PaginationArrowProps>(
  ({as = 'button', disabled, href, isHovered, label, variant = 'back', visibleLabel, ...props}, ref) => {
    const [hovered, setHovered] = React.useState(false);
    handleLinkValidation({as, href});
    return variant === 'back' ? (
      <PaginationBackArrow
        {...props}
        ref={ref}
        as={as}
        disabled={disabled}
        href={href}
        isHovered={hovered}
        label={label}
        variant={variant}
        visibleLabel={visibleLabel}
        onMouseEnter={(event) => {
          if (typeof props.onMouseEnter === 'function') {
            props.onMouseEnter(event);
          }
          setHovered(true);
        }}
        onMouseLeave={(event) => {
          if (typeof props.onMouseLeave === 'function') {
            props.onMouseLeave(event);
          }
          setHovered(false);
        }}
      />
    ) : (
      <PaginationForwardArrow
        {...props}
        ref={ref}
        as={as}
        disabled={disabled}
        href={href}
        isHovered={hovered}
        label={label}
        variant={variant}
        visibleLabel={visibleLabel}
        onMouseEnter={(event) => {
          if (typeof props.onMouseEnter === 'function') {
            props.onMouseEnter(event);
          }
          setHovered(true);
        }}
        onMouseLeave={(event) => {
          if (typeof props.onMouseLeave === 'function') {
            props.onMouseLeave(event);
          }
          setHovered(false);
        }}
      />
    );
  }
);

PaginationArrow.displayName = 'PaginationArrow';

PaginationArrow.propTypes = PaginationArrowPropTypes;

export {PaginationArrow};
