import * as React from 'react';
import {StyledCallout, StyledCalloutTitle} from './styles';
import {CalloutProps} from './types';

const Callout: React.FC<CalloutProps> = props => {
  return (
    <StyledCallout variant={props.variant}>
      {props.calloutTitle ? <StyledCalloutTitle as="h4">{props.calloutTitle}</StyledCalloutTitle> : null}
      {props.children}
    </StyledCallout>
  );
};

Callout.defaultProps = {
  variant: 'primary',
};

export {Callout};
