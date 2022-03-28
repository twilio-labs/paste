import * as React from 'react';
import type { BoxElementProps, BoxStyleProps } from '@twilio-paste/box';
import type { IconSize } from '@twilio-paste/style-props';
export interface IconWrapperProps extends BoxElementProps, Pick<BoxStyleProps, 'display' | 'color'> {
    size?: IconSize;
}
declare const IconWrapper: React.FC<IconWrapperProps>;
export { IconWrapper };
//# sourceMappingURL=IconWrapper.d.ts.map