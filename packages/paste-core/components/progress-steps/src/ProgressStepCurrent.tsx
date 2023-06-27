import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {ProgressCurrentIcon} from './icons/ProgressCurrentIcon';
import type {ProgressStepCurrentProps} from './types';
import {ProgressStepPropTypes} from './propTypes';

export const ProgressStepCurrent = React.forwardRef<HTMLDivElement, ProgressStepCurrentProps>(
  ({element = 'PROGRESS_STEP_CURRENT', as = 'div', children, i18nCurrentLabel = 'Current', ...props}, ref) => {
    return (
      <div role="listitem">
        <Box
          {...safelySpreadBoxProps(props)}
          element={element}
          as={as}
          type={as === 'button' ? 'button' : undefined}
          ref={ref}
          aria-current="step"
          display="flex"
          columnGap="space30"
          border="none"
          background="none"
          padding="space0"
          margin="space0"
          fontFamily="fontFamilyText"
          fontSize="fontSize20"
          lineHeight="lineHeight20"
          fontWeight={as === 'button' ? 'fontWeightSemibold' : 'fontWeightMedium'}
          outline="none"
          borderRadius="borderRadius20"
          cursor={as !== 'div' ? 'pointer' : 'default'}
          color="colorTextPrimary"
          _hover={as !== 'div' ? {textDecoration: 'none', color: 'colorTextPrimaryStrongest'} : undefined}
          _focus={as !== 'div' ? {boxShadow: 'shadowFocus'} : undefined}
        >
          <ProgressCurrentIcon decorative={false} title={i18nCurrentLabel} />
          <Box as="span" textAlign="left">
            {children}
          </Box>
        </Box>
      </div>
    );
  }
);
ProgressStepCurrent.displayName = 'ProgressStepCurrent';
ProgressStepCurrent.propTypes = {...ProgressStepPropTypes, i18nCurrentLabel: PropTypes.string};
