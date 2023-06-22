import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';
import {SuccessIcon as ProgressSuccessIcon} from '@twilio-paste/icons/esm/SuccessIcon';

import type {ProgressStepCompleteProps} from './types';
import {ProgressStepPropTypes} from './propTypes';

export const ProgressStepComplete = React.forwardRef<HTMLDivElement, ProgressStepCompleteProps>(
  ({element = 'PROGRESS_STEP_COMPLETE', as = 'div', children, i18nCompleteLabel = 'Complete', ...props}, ref) => {
    return (
      <Box
        {...safelySpreadBoxProps(props)}
        element={element}
        as={as}
        type={as === 'button' ? 'button' : undefined}
        ref={ref}
        display="flex"
        columnGap="space30"
        border="none"
        background="none"
        padding="space0"
        margin="space0"
        fontFamily="fontFamilyText"
        fontSize="fontSize20"
        lineHeight="lineHeight20"
        fontWeight="fontWeightMedium"
        outline="none"
        borderRadius="borderRadius20"
        cursor={as !== 'div' ? 'pointer' : 'default'}
        color="colorTextWeak"
        _hover={as !== 'div' ? {textDecoration: 'none', color: 'colorTextPrimary'} : undefined}
        _focus={as !== 'div' ? {boxShadow: 'shadowFocus'} : undefined}
      >
        <ProgressSuccessIcon decorative={false} title={i18nCompleteLabel} />
        <Box as="span">{children}</Box>
      </Box>
    );
  }
);
ProgressStepComplete.displayName = 'ProgressStepComplete';
ProgressStepComplete.propTypes = {...ProgressStepPropTypes, i18nCompleteLabel: PropTypes.string};
