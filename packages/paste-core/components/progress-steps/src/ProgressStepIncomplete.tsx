import * as React from 'react';

import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {ProgressIncompleteIcon} from './icons/ProgressIncompleteIcon';
import type {ProgressStepIncompleteProps} from './types';

export const ProgressStepIncomplete = React.forwardRef<HTMLDivElement, ProgressStepIncompleteProps>(
  (
    {
      element = 'PROGRESS_STEP_INCOMPLETE',
      as = 'div',
      disabled = false,
      children,
      i18nIncompleteLabel = 'Incomplete',
      ...props
    },
    ref
  ) => {
    return (
      <div role="listitem">
        <Box
          {...safelySpreadBoxProps(props)}
          element={element}
          as={as}
          type={as === 'button' ? 'button' : undefined}
          disabled={disabled}
          ref={ref}
          display="flex"
          alignItems="center"
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
          color={disabled ? 'colorTextWeaker' : 'colorTextWeak'}
          _hover={as !== 'div' ? {textDecoration: 'none', color: 'colorTextPrimary'} : undefined}
          _focus={as !== 'div' ? {boxShadow: 'shadowFocus'} : undefined}
          _disabled={{textDecoration: 'none', color: 'colorTextWeaker', cursor: 'not-allowed'}}
        >
          <ProgressIncompleteIcon decorative={false} title={i18nIncompleteLabel} />
          <Box as="span" textAlign="left">
            {children}
          </Box>
        </Box>
      </div>
    );
  }
);
ProgressStepIncomplete.displayName = 'ProgressStepIncomplete';
