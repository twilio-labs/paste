import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {ProgressIncompleteIcon} from './icons/ProgressIncompleteIcon';
import {validateProps} from './utils';
import type {ProgressStepIncompleteProps} from './types';
import {ProgressStepPropTypes} from './propTypes';

export const ProgressStepIncomplete = React.forwardRef<HTMLDivElement, ProgressStepIncompleteProps>((props, ref) => {
  validateProps(props);
  const {
    element = 'PROGRESS_STEP_INCOMPLETE',
    as = 'div',
    disabled,
    children,
    i18nIncompleteLabel = 'Incomplete',
    ...rest
  } = props;

  // only buttons can be `disabled`
  if (as !== 'button' && disabled) {
    throw new Error('[Paste ProgressSteps] provided `disabled` to a non-button element step.');
  }

  return (
    <Box
      {...safelySpreadBoxProps(rest)}
      element={element}
      as={as}
      type={as === 'button' ? 'button' : undefined}
      disabled={disabled}
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
      color={disabled ? 'colorTextWeaker' : 'colorTextWeak'}
      _hover={as !== 'div' ? {textDecoration: 'none', color: 'colorTextPrimary'} : undefined}
      _focus={as !== 'div' ? {boxShadow: 'shadowFocus', color: 'colorTextPrimaryStrongest'} : undefined}
      _disabled={{textDecoration: 'none', color: 'colorTextWeaker', cursor: 'not-allowed'}}
    >
      <ProgressIncompleteIcon decorative={false} title={i18nIncompleteLabel} />
      <Box as="span">{children}</Box>
    </Box>
  );
});
ProgressStepIncomplete.displayName = 'ProgressStepIncomplete';
ProgressStepIncomplete.propTypes = {
  ...ProgressStepPropTypes,
  i18nIncompleteLabel: PropTypes.string,
  disabled: PropTypes.bool,
};
