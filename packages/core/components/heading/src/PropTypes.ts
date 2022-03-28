import * as PropTypes from 'prop-types';
import type {HeadingVariants, AsTags} from './types';

export const HeadingPropTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'label', 'span'] as AsTags[]).isRequired,
  element: PropTypes.string,
  marginBottom: PropTypes.oneOf(['space0']) as PropTypes.Validator<'space0' | null | undefined> | undefined,
  variant: PropTypes.oneOf([
    'heading10',
    'heading20',
    'heading30',
    'heading40',
    'heading50',
    'heading60',
  ] as HeadingVariants[]).isRequired,
  display: PropTypes.string,
};
