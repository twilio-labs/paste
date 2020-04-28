import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled from '@emotion/styled';
import css from '@styled-system/css';
import {safelySpreadFormControlProps, PROPS_TO_BLOCK} from '../shared/Utils';

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
}

const OPTION_PROPS_TO_BLOCK = [...PROPS_TO_BLOCK, 'selected'];

const OptionElement = styled.option(
  css({
    background: 'transparent',
    color: 'colorText',
  })
);

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(({children, ...props}, ref) => {
  if (props.selected) {
    console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.');
  }
  return (
    <OptionElement ref={ref} {...safelySpreadFormControlProps(props, OPTION_PROPS_TO_BLOCK)}>
      {children}
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
