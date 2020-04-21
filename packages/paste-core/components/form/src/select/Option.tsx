import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {safelySpreadFormControlProps} from '../shared/Utils';

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
}

const OptionElement = styled.option(
    css({
        background: 'transparent',
        color: 'colorText',
    })
);

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(({children, ...props}, ref) => {
  return (
    <OptionElement ref={ref} {...safelySpreadFormControlProps(props)}>
      {cren}
    </OptionElement>
  );
});

Option.displayName = 'Option';

if (process.env.NODE_ENV === 'development') {
  Option.propTypes = {
    value: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
  };
}

export {Option};
