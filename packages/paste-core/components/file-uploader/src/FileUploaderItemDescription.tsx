import type { BoxElementProps } from '@twilio-paste/box';
import { Text, safelySpreadTextProps } from '@twilio-paste/text';
import type { TextStyleProps } from '@twilio-paste/text';
import * as React from 'react';

import { FileUploaderItemContext } from './FileUploaderItemContext';
import type { FileUploaderItemContextProps } from './FileUploaderItemContext';

export interface FileUploaderItemDescriptionProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children: string;
  element?: BoxElementProps['element'];
}

const variantStyles: Record<FileUploaderItemContextProps['variant'], TextStyleProps> = {
  default: {
    color: 'colorTextWeak',
  },
  loading: {
    color: 'colorTextWeak',
  },
  error: {
    color: 'colorTextError',
  },
};

export const FileUploaderItemDescription = React.forwardRef<HTMLElement, FileUploaderItemDescriptionProps>(
  ({ children, element = 'FILE_UPLOADER_ITEM_DESCRIPTION', ...props }, ref) => {
    const { variant } = React.useContext(FileUploaderItemContext);

    return (
      <Text
        {...safelySpreadTextProps(props)}
        element={element}
        variant={variant}
        ref={ref}
        as="div"
        fontSize="fontSize20"
        lineHeight="lineHeight20"
        {...variantStyles[variant]}
      >
        {children}
      </Text>
    );
  },
);

FileUploaderItemDescription.displayName = 'FileUploaderItemDescription';
