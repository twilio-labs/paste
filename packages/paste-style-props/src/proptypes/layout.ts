import * as PropTypes from 'prop-types';
import {DefaultTheme} from '@twilio-paste/theme';

import {propValidator} from './utils/propValidator';
import {ResponsiveProp} from './utils/responsivePropValidator';

// Tokens
const IconSizeOptions = Object.keys(DefaultTheme.iconSizes);

export const isWidthTokenProp = ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));
export const isMinWidthTokenProp = ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));
export const isMaxWidthTokenProp = ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));
export const isHeightTokenProp = ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));
export const isMinHeightTokenProp = ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));
export const isMaxHeightTokenProp = ResponsiveProp(PropTypes.oneOfType([PropTypes.string, PropTypes.number]));
export const isIconSizeTokenProp = propValidator(IconSizeOptions);
