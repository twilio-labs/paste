import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Button} from '@twilio-paste/button';
import {Box} from '@twilio-paste/box';
import type {BoxElementProps, BoxStyleProps} from '@twilio-paste/box';
import {CloseCircleIcon} from '@twilio-paste/icons/esm/CloseCircleIcon';
import {ScreenReaderOnly} from '@twilio-paste/screen-reader-only';

/*
These style props are specific to our CloseCircleIcon use case in ComposerAttachmentCard.

The close button uses CloseCircleIcon and needs the Box behind it to have these styles
because the inner part of the glyph is transparent (variant="secondary_icon").
When more button variants become available, closeButtonBackgroundStyles should
be reconsidered (and possibly removed).
*/
const closeButtonBackgroundStyles: BoxStyleProps = {
  backgroundColor: 'colorBackgroundBody',
  borderRadius: 'borderRadiusCircle',
  width: '12px',
  height: '12px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export interface ComposerAttachmentCardProps {
  children: NonNullable<React.ReactNode>;
  element?: BoxElementProps['element'];
  i18nDismissLabel?: string;
  onDismiss?: () => void;
}

const ComposerAttachmentCard = React.forwardRef<HTMLDivElement, ComposerAttachmentCardProps>(
  (
    {children, onDismiss, i18nDismissLabel = 'Remove attachment', element = 'COMPOSER_ATTACHMENT_CARD', ...props},
    ref
  ) => {
    return (
      <Box
        ref={ref}
        padding="space30"
        borderStyle="solid"
        borderColor="colorBorderWeaker"
        borderRadius="borderRadius30"
        borderWidth="borderWidth10"
        boxShadow="shadowLow"
        position="relative"
        display="inline-block"
        width="100%"
        element={element}
        {...props}
      >
        {children}
        {onDismiss && (
          <Box
            position="absolute"
            top="space0"
            right="space0"
            transform="translate(50%, -50%)"
            {...closeButtonBackgroundStyles}
          >
            <Button element={`${element}_REMOVE_BUTTON`} variant="secondary_icon" size="icon" onClick={onDismiss}>
              <CloseCircleIcon decorative />
              <ScreenReaderOnly>{i18nDismissLabel}</ScreenReaderOnly>
            </Button>
          </Box>
        )}
      </Box>
    );
  }
);

ComposerAttachmentCard.displayName = 'ComposerAttachmentCard';

ComposerAttachmentCard.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.string,
  i18nDismissLabel: PropTypes.string,
  onDismiss: PropTypes.func,
};

export {ComposerAttachmentCard};
