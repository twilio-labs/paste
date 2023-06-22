import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {ProgressErrorIcon} from './icons/ProgressErrorIcon';
import type {ProgressStepErrorProps} from './types';
import {ProgressStepPropTypes} from './propTypes';

export const ProgressStepError = React.forwardRef<HTMLDivElement, ProgressStepErrorProps>(
  ({element = 'PROGRESS_STEP_ERROR', as = 'div', children, i18nErrorLabel = 'Error', ...props}, ref) => {
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
        color="colorTextLinkDestructive"
        _hover={as !== 'div' ? {textDecoration: 'none', color: 'colorTextLinkDestructiveStrongest'} : undefined}
        _focus={as !== 'div' ? {boxShadow: 'shadowFocus'} : undefined}
      >
        <ProgressErrorIcon decorative={false} title={i18nErrorLabel} />
        <Box as="span">{children}</Box>
      </Box>
    );
  }
);
ProgressStepError.displayName = 'ProgressStepError';
ProgressStepError.propTypes = {...ProgressStepPropTypes, i18nErrorLabel: PropTypes.string};
