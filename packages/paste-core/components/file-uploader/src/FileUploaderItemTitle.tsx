import * as React from 'react';
import type { BoxElementProps } from '@twilio-paste/box';
import { Text, safelySpreadTextProps } from '@twilio-paste/text';

export interface FileUploaderItemTitleProps extends Omit<React.ComponentPropsWithRef<'div'>, 'children'> {
  children: string;
  element?: BoxElementProps['element'];
}

export const FileUploaderItemTitle = React.forwardRef<HTMLElement, FileUploaderItemTitleProps>(
  ({ children, element = 'FILE_UPLOADER_ITEM_TITLE', ...props }, ref) => {
    return (
      <Text
        {...safelySpreadTextProps(props)}
        element={element}
        ref={ref}
        as="div"
        fontSize="fontSize30"
        lineHeight="lineHeight30"
        color="colorText"
        wordBreak="break-word"
      >
        {children}
      </Text>
    );
  },
);

FileUploaderItemTitle.displayName = 'FileUploaderItemTitle';
