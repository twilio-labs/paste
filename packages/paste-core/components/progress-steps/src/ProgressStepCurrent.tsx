import * as React from 'react';
import PropTypes from 'prop-types';
import {Box, safelySpreadBoxProps} from '@twilio-paste/box';

import {ProgressCurrentIcon} from './icons/ProgressCurrentIcon';
import {validateProps} from './utils';
import type {ProgressStepCurrentProps} from './types';
import {ProgressStepPropTypes} from './propTypes';

export const ProgressStepCurrent = React.forwardRef<HTMLDivElement, ProgressStepCurrentProps>((props, ref) => {
  validateProps(props);
  const {element = 'PROGRESS_STEP_CURRENT', as = 'div', children, i18nCurrentLabel = 'Current', ...rest} = props;

  return (
    <Box
      {...safelySpreadBoxProps(rest)}
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
      color="colorTextPrimary"
      _hover={as !== 'div' ? {textDecoration: 'none', color: 'colorTextPrimaryStrongest'} : undefined}
      _focus={as !== 'div' ? {boxShadow: 'shadowFocus'} : undefined}
    >
      <ProgressCurrentIcon decorative={false} title={i18nCurrentLabel} />
      <Box as="span">{children}</Box>
    </Box>
  );
});
ProgressStepCurrent.displayName = 'ProgressStepCurrent';
ProgressStepCurrent.propTypes = {...ProgressStepPropTypes, i18nCurrentLabel: PropTypes.string};
