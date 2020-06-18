import * as React from 'react';
import * as PropTypes from 'prop-types';
import {styled, css} from '@twilio-paste/styling-library';
import {restrictedProps} from '../shared/restricted-attributes';

const optionRestrictedProps = {...restrictedProps, selected: undefined};

export interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  value: string;
  children: React.ReactNode;
}

const OptionElement = styled.option(
  css({
    background: 'transparent',
    color: 'colorText',
    fontFamily: 'fontFamilyText',
    lineHeight: 'lineHeight50',
    paddingTop: 'space30',
    paddingBottom: 'space30',
    paddingLeft: 'space20',
  })
);

const Option = React.forwardRef<HTMLOptionElement, OptionProps>(({children, ...props}, ref) => {
  if (props.selected) {
    console.warn('"selected" is a blocked prop on this component, please use "value" on the select element.');
  }
  return (
    <OptionElement ref={ref} {...props} {...optionRestrictedProps}>
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
