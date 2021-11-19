import * as React from 'react';
import {safelySpreadBoxProps} from '@twilio-paste/box';
import {Button} from '@twilio-paste/button';

import type {BadgeProps} from './types';

export const BadgeWrapper = React.forwardRef<HTMLButtonElement, BadgeProps>(({children, as, ...props}, ref) => {
  const propsMinusStyles = safelySpreadBoxProps(props);
  if (as === 'button') {
    return (
      <Button {...propsMinusStyles} variant="reset" size="reset" type="button" ref={ref}>
        {children}
      </Button>
    );
  }
  if (as === 'a') {
    return (
      <Button {...propsMinusStyles} variant="reset" size="reset" as="a" ref={ref}>
        {children}
      </Button>
    );
  }
  return <>{children}</>;
});
BadgeWrapper.displayName = 'BadgeWrapper';
